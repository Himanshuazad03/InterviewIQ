import { Reveal } from "@/components/landing/Reveal";
import { MiniScoreChart } from "@/components/dashboard/MiniScoreChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AlertTriangle,
  ArrowRight,
  BrainCircuit,
  FileText,
  Target,
  Trophy,
  Activity,
  History,
  TrendingUp,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Overview | InterviewIQ",
  description: "Your interview readiness and performance command center.",
};

import { Suspense } from "react";
import Skeleton from "@/components/dashboard/Skeleton";

export default function OverviewPage() {
  return (
    <Suspense fallback={<Skeleton />}>
      <ScrollArea className="h-full">
        <div className="space-y-6 p-4 sm:p-8 pb-10">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Overview
            </h1>
            <p className="text-slate-400 mt-1">
              Your performance command center.
            </p>
          </div>

          {/* 1. Readiness Score Hero Card */}
          <Reveal>
            <Card className="bg-[#111118] border-slate-800/70 shadow-sm relative overflow-hidden">
              {/* Soft purple gradient glow */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              <CardContent className="p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <h2 className="text-2xl font-semibold text-white tracking-tight">
                    Interview Readiness Score
                  </h2>
                  <p className="text-slate-400 max-w-lg mx-auto md:mx-0">
                    Based on your recent interview performance and resume
                    analysis.
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mt-4">
                    <TrendingUp className="w-4 h-4" />
                    Your readiness has improved by 8% in the last 30 days.
                  </div>
                </div>

                {/* Circular score indicator */}
                <div className="relative flex items-center justify-center w-36 h-36 shrink-0">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      className="text-slate-800"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="42"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="text-indigo-500"
                      strokeWidth="8"
                      strokeDasharray="264"
                      strokeDashoffset={264 - (264 * 76) / 100}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="42"
                      cx="50"
                      cy="50"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-white">
                    <span className="text-4xl font-bold tracking-tighter">
                      76<span className="text-2xl text-slate-400">%</span>
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          {/* 2. Summary Metrics Row */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard title="Total Interviews" value="12" icon={Target} />
              <StatCard title="Average Score" value="78" icon={Trophy} />
              <StatCard
                title="Resume Match Score"
                value="72%"
                icon={FileText}
              />
              <StatCard
                title="Weakest Skill"
                value="System Design"
                icon={BrainCircuit}
              />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: 3. Chart and 6. Recent Activity */}
            <div className="lg:col-span-2 space-y-6">
              <Reveal delay={0.2}>
                {/* 3. Performance Trend Mini Chart */}
                <div className="h-[240px]">
                  <MiniScoreChart />
                </div>
              </Reveal>

              {/* 4. Resume Snapshot Card & 5. Focus Area Panel */}
              <Reveal delay={0.3}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Resume Snapshot */}
                  <Card className="bg-[#111118] border-slate-800/70 shadow-sm flex flex-col h-full hover:border-slate-700/50 transition-colors">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                          <FileText className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-white">
                          Resume Snapshot
                        </h3>
                      </div>

                      <div className="space-y-3 flex-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Last analyzed</span>
                          <span className="text-slate-200">3 days ago</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Skill Match</span>
                          <span className="text-slate-200 font-medium text-emerald-400">
                            72%
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">
                            Missing keywords
                          </span>
                          <span className="text-rose-400 font-medium">
                            4 detected
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">
                            Strongest category
                          </span>
                          <span className="text-slate-200 truncate ml-2">
                            Frontend Dev
                          </span>
                        </div>
                      </div>

                      <Link
                        href="/dashboard/resume"
                        className="mt-6 flex items-center text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                      >
                        View Full Analysis{" "}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </CardContent>
                  </Card>

                  {/* Focus Area */}
                  <Card className="bg-[#111118] border-rose-500/20 shadow-sm flex flex-col h-full hover:border-rose-500/40 transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 bg-rose-500/5 pointer-events-none" />
                    <CardContent className="p-6 flex flex-col h-full relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-rose-500/10 rounded-lg text-rose-400">
                          <AlertTriangle className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-white">Focus Area</h3>
                      </div>

                      <div className="space-y-4 flex-1">
                        <p className="text-slate-300 text-sm leading-relaxed">
                          "System Design" explanations have scored below 70% in
                          3 of your last 5 interviews.
                        </p>
                        <p className="text-rose-400/80 text-sm leading-relaxed">
                          Consider practicing scalability and architecture
                          fundamentals.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Reveal>
            </div>

            {/* Right Column: 6. Recent Activity Section */}
            <div className="lg:col-span-1">
              <Reveal delay={0.4}>
                <Card className="bg-[#111118] border-slate-800/70 shadow-sm h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-slate-800 rounded-lg text-slate-300">
                        <History className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-white">
                        Recent Activity
                      </h3>
                    </div>

                    <div className="space-y-4 flex-1">
                      {/* Item 1 */}
                      <div className="flex flex-col gap-1 pb-4 border-b border-slate-800/60">
                        <div className="flex justify-between items-start">
                          <span className="text-sm font-medium text-slate-200">
                            React Interview
                          </span>
                          <span className="text-xs text-slate-500">Feb 10</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          <Target className="w-3.5 h-3.5" /> Score:{" "}
                          <span className="text-emerald-400 font-medium">
                            82
                          </span>
                        </div>
                      </div>

                      {/* Item 2 */}
                      <div className="flex flex-col gap-1 pb-4 border-b border-slate-800/60">
                        <div className="flex justify-between items-start">
                          <span className="text-sm font-medium text-slate-200">
                            Node Interview
                          </span>
                          <span className="text-xs text-slate-500">Feb 05</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          <Target className="w-3.5 h-3.5" /> Score:{" "}
                          <span className="text-amber-400 font-medium">75</span>
                        </div>
                      </div>

                      {/* Item 3 */}
                      <div className="flex flex-col gap-1 pb-2">
                        <div className="flex justify-between items-start">
                          <span className="text-sm font-medium text-slate-200">
                            Resume Analyzed
                          </span>
                          <span className="text-xs text-slate-500">Feb 02</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          <FileText className="w-3.5 h-3.5" /> Match: 72%
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/dashboard/interviews"
                      className="mt-6 flex items-center justify-center w-full py-2.5 rounded-lg border border-slate-800 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                      View All Activity
                    </Link>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </ScrollArea>
    </Suspense>
  );
}
