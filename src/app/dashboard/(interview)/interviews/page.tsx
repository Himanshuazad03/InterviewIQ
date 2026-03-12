import { StatCard } from "@/components/dashboard/StatCard";
import { ScoreChart } from "@/components/interviewDash/ScoreChart";
import { InterviewTable } from "@/components/interviewDash/InterviewTable";
import { Reveal } from "@/components/landing/Reveal";
import { Target, TrendingUp, Trophy, Plus, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import InterviewForm from "@/components/interviewDash/InterviewForm";
import { AllInterviews } from "@/actions/Interview";
import { currentUser } from "@clerk/nextjs/server";
import AllInterview from "@/components/interviewDash/AllInterviews";

import { Suspense } from "react";
import Skeleton from "@/components/dashboard/Skeleton";

export default async function InterviewsPage() {
  const user = await currentUser();
  const interviews = await AllInterviews();

  const totalInterviews = interviews?.length;

  const interviewLength: number | undefined = interviews?.filter(
    (i) => i.score !== null,
  )?.length;

  const averageScore = Math.round(
    interviews && interviewLength
      ? interviews.reduce((acc, interview) => acc + (interview.score ?? 0), 0) /
          interviewLength
      : 0,
  );

  const highestScore = interviews?.reduce(
    (acc, interview) => Math.max(acc, interview.score ?? 0),
    0,
  );

  const lowestScore = interviews?.reduce(
    (acc, interview) => Math.min(acc, interview.score ?? 0),
    0,
  );

  const scores = (interviews ?? [])
    .map((i) => i.score)
    .filter((s): s is number => s !== null);

  return (
    <Suspense fallback={<Skeleton />}>
      <ScrollArea className="h-full">
        <div className="space-y-6 p-4 sm:p-16 pb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-heading font-semibold text-[#F9FAFB] tracking-tight">
                Welcome, {user?.firstName}
              </h1>
              <p className="text-[#9CA3AF] mt-1">
                Ready to practice your next interview?
              </p>
            </div>
            <InterviewForm>
              <Button className="bg-[#1F2937] hover:bg-[#374151] text-[#F9FAFB] shadow-none border-0 rounded-lg">
                <Plus className="w-4 h-4 mr-2" />
                Create Interview
              </Button>
            </InterviewForm>
          </div>

          {/* 1. Overview Stat Cards Row */}
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Total Interviews"
                value={totalInterviews}
                icon={Target}
                trend={{ value: 15, isPositive: true }}
              />
              <StatCard
                title="Average Score"
                value={averageScore}
                icon={Trophy}
                trend={{ value: 4.2, isPositive: true }}
              />
              <StatCard
                title="Highest Score"
                value={highestScore}
                icon={TrendingUp}
              />
              <StatCard
                title="Lowest Score"
                value={lowestScore}
                icon={TrendingDown}
              />
            </div>
          </Reveal>

          {/* 2. Performance Trend Section */}
          <Reveal delay={0.1}>
            <ScoreChart scores={scores} />
          </Reveal>

          {/* 3. Recent Interviews Table */}
          <Reveal delay={0.2}>
            <div>
              <h3 className="text-3xl font-semibold mb-5">Your Interviews</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interviews && interviews.length > 0 ? (
                interviews.map((interview) => (
                  <AllInterview key={interview.id} interview={interview} />
                ))
              ) : (
                <>
                  <div>You have'nt created any interview</div>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </ScrollArea>
    </Suspense>
  );
}
