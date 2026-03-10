import React, { Suspense } from "react";
import { FeedbackHeader } from "@/components/interview-feedback/FeedbackHeader";
import { OverallScoreCard } from "@/components/interview-feedback/OverallScoreCard";
import { SkillsBreakdown } from "@/components/interview-feedback/SkillsBreakdown";
import { StrengthsCard } from "@/components/interview-feedback/StrengthsCard";
import { ActionableImprovementsCard } from "@/components/interview-feedback/ActionableImprovementsCard";

import { QuestionFeedbackList } from "@/components/interview-feedback/QuestionFeedbackList";
import {
  FeedbackSkeleton,
  FeedbackNotFound,
  FeedbackProcessing,
} from "@/components/interview-feedback/FeedbackStates";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAttemptFeedback } from "@/actions/Interview";
import { FeedbackType } from "@/services/generateQuestions";

async function FeedbackContent({ id }: { id: string }) {
  const data = await getAttemptFeedback(id);

  if (!data) return <FeedbackNotFound />;

  const feedback = data.feedback as unknown as FeedbackType;
  const retakeHref = `/dashboard/interview/${data.interviewId}`;

  return (
    <ScrollArea className="h-full">
      <div className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 text-white animate-in fade-in duration-500">
        <FeedbackHeader
          role={feedback?.role}
          date={data?.createdAt?.toISOString().slice(0, 10)}
          retakeHref={retakeHref}
        />

        <div className="space-y-6 mt-6">
          {/* Full Width Top Section */}
          <OverallScoreCard
            score={feedback?.overallScore}
            summary={feedback?.overallSummary}
          />

          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SkillsBreakdown skills={feedback?.skills} />
            <ActionableImprovementsCard
              improvements={feedback?.actionableImprovements}
            />
          </div>

          {/* Full Width Bottom Section */}
          <StrengthsCard strengths={feedback?.strengths} />
        </div>

        <div className="mt-8">
          <QuestionFeedbackList questions={feedback?.questions} />
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 mb-8 flex justify-center">
          <Link href={retakeHref}>
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-black font-semibold rounded-full px-8 py-6 text-lg shadow-xl shadow-white/5 transition-transform hover:scale-105"
            >
              <RefreshCw className="mr-2 w-5 h-5" />
              Retake Interview
            </Button>
          </Link>
        </div>
      </div>
    </ScrollArea>
  );
}

export default async function FeedbackPage({
  params,
}: {
  params: Promise<{ attemptid: string }>;
}) {
  const { attemptid } = await params;

  return (
    <>
      <Suspense fallback={<FeedbackSkeleton />}>
        <FeedbackContent id={attemptid} />
      </Suspense>
    </>
  );
}
