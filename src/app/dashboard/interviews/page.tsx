import { StatCard } from "@/components/dashboard/StatCard";
import { ScoreChart } from "@/components/dashboard/ScoreChart";
import { InterviewTable } from "@/components/dashboard/InterviewTable";
import { Reveal } from "@/components/Reveal";
import { BrainCircuit, Target, TrendingUp, Trophy, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import InterviewForm from "@/components/dashboard/InterviewForm";
import { AllInterviews } from "@/actions/Interview";
import { currentUser } from "@clerk/nextjs/server";
import AllInterview from "@/components/dashboard/AllInterviews";

export default async function InterviewsPage() {
  const user = await currentUser();
  const interviews = await AllInterviews();

  return (
    <ScrollArea className="h-full">
      <div className="space-y-6 p-4 sm:p-8 pb-10">
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
              value="12"
              icon={Target}
              trend={{ value: 15, isPositive: true }}
            />
            <StatCard
              title="Average Score"
              value="78/100"
              icon={Trophy}
              trend={{ value: 4.2, isPositive: true }}
            />
            <StatCard title="Highest Score" value="92" icon={TrendingUp} />
            <StatCard
              title="Weakest Category"
              value="System Design"
              icon={BrainCircuit}
            />
          </div>
        </Reveal>

        {/* 2. Performance Trend Section */}
        <Reveal delay={0.1}>
          <ScoreChart />
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
              <div>
                You have'nt created any interview
              </div>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </ScrollArea>
  );
}
