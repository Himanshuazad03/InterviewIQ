import { StatCard } from "@/components/dashboard/StatCard";
import { ScoreChart } from "@/components/interviewDash/ScoreChart";
import { InterviewTable } from "@/components/interviewDash/InterviewTable";
import { Reveal } from "@/components/landing/Reveal";
import {
  Target,
  TrendingUp,
  Trophy,
  Plus,
  TrendingDown,
  History,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import InterviewForm from "@/components/interviewDash/InterviewForm";
import { AllInterviews, getRecentAttempts } from "@/actions/Interview";
import { currentUser } from "@clerk/nextjs/server";
import AllInterview from "@/components/interviewDash/AllInterviews";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

import { Suspense } from "react";
import Skeleton from "@/components/dashboard/Skeleton";

export default async function InterviewsPage() {
  const user = await currentUser();
  const [interviews, recentAttempts] = await Promise.all([
    AllInterviews(),
    getRecentAttempts(5),
  ]);

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

  const scores = (interviews ?? [])
    .map((i) => i.score)
    .filter((s): s is number => s !== null);

  const highestScore =
    scores.length > 0 ? scores.reduce((acc, s) => Math.max(acc, s)) : undefined;

  const lowestScore =
    scores.length > 0 ? scores.reduce((acc, s) => Math.min(acc, s)) : undefined;

  const completedInterviews = (interviews || [])
    .filter((i) => i.status === "completed")
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    );

  const notCompletedInterviews = (interviews || [])
    .filter((i) => i.status !== "completed")
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

  let trend = { value: 0, isPositive: false };

  if (scores.length >= 2) {
    const lastScore = scores[scores.length - 1];
    const prevScore = scores[scores.length - 2];

    const diff = lastScore - prevScore;

    trend = {
      value: Math.abs(diff),
      isPositive: diff >= 0,
    };
  }

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
              />
              <StatCard
                title="Average Score"
                value={averageScore}
                icon={Trophy}
                trend={trend}
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

          {/* 2 & 3. Chart and Recent Activity Side-by-Side */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Performance Trend Section */}
            <div className="lg:col-span-2">
              <Reveal delay={0.1}>
                <ScoreChart scores={scores} />
              </Reveal>
            </div>

            {/* Right: Recent Attempts Table / Cards */}
            <div className="lg:col-span-1">
              {recentAttempts && recentAttempts.length > 0 && (
                <Reveal delay={0.15}>
                  <div className="h-full flex flex-col">
                    <Card className="bg-[#111116] border-[#27272A] shadow-sm flex flex-col rounded-2xl flex-1">
                      <div className="px-5">
                        <h3 className="text-lg font-bold text-white">
                          Recent Activity
                        </h3>
                      </div>
                      <CardContent className="p-0 sm:p-2 sm:px-4">
                        <div className="flex flex-col">
                          {recentAttempts.map((attempt) => {
                            const date = new Date(
                              attempt.createdAt,
                            ).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            });

                            // Pick a color based on score
                            const isGood = attempt.score >= 70;
                            const scoreColor = isGood
                              ? "text-emerald-400"
                              : attempt.score >= 40
                                ? "text-amber-400"
                                : "text-rose-400";

                            return (
                              <Link
                                key={attempt.id}
                                href={`/dashboard/interview/${attempt.interviewId}/attempts/feedback/${attempt.id}`}
                                className="flex flex-col gap-0.5 pb-3 border-b border-slate-800/60 hover:bg-slate-800/20 p-3 rounded-xl transition-colors group cursor-pointer last:border-0"
                              >
                                <div className="flex justify-between items-start mb-1">
                                  <span className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 transition-colors">
                                    {attempt.interview?.jobRole}
                                  </span>
                                  <span className="text-xs text-slate-400 whitespace-nowrap ml-2 bg-slate-800/50 px-2 py-0.5 rounded-md">
                                    {date}
                                  </span>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                  <div className="flex items-center gap-2 text-sm text-slate-400">
                                    <Target className="w-3.5 h-3.5" /> Score:{" "}
                                    <span
                                      className={`font-semibold text-sm ${scoreColor}`}
                                    >
                                      {attempt.score}
                                    </span>
                                  </div>
                                  <span className="text-xs text-indigo-500/0 group-hover:text-indigo-500 transition-all flex items-center font-medium">
                                    View{" "}
                                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Reveal>
              )}
            </div>
          </div>

          {/* 4. All Interviews Table: Tabs */}
          <Reveal delay={0.2}>
            <Tabs defaultValue="in-progress" className="w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 mt-2">
                <h3 className="text-2xl font-semibold text-[#F9FAFB]">
                  All Interviews
                </h3>
                <TabsList>
                  <TabsTrigger value="in-progress" className="cursor-pointer">
                    In Progress
                  </TabsTrigger>
                  <TabsTrigger value="completed" className="cursor-pointer">
                    Completed
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="in-progress" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {notCompletedInterviews.length > 0 ? (
                    notCompletedInterviews.map((interview) => (
                      <AllInterview
                        key={interview.id}
                        interview={interview as any}
                      />
                    ))
                  ) : (
                    <div className="text-[#9CA3AF] py-12 text-center col-span-full bg-[#111116] rounded-2xl border border-[#27272A]">
                      You don't have any interviews in progress.
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="completed" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completedInterviews.length > 0 ? (
                    completedInterviews.map((interview) => (
                      <AllInterview
                        key={interview.id}
                        interview={interview as any}
                      />
                    ))
                  ) : (
                    <div className="text-[#9CA3AF] py-12 text-center col-span-full bg-[#111116] rounded-2xl border border-[#27272A]">
                      You haven't completed any interviews yet.
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </Reveal>
        </div>
      </ScrollArea>
    </Suspense>
  );
}
