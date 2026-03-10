import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/Reveal";
import Link from "next/link";
import { Activity, BrainCircuit, CheckCircle2 } from "lucide-react";
import { herodata } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex flex-col items-center justify-start pt-8 pb-16 bg-[linear-gradient(to_bottom,#050507_0%,#0B0B0F_40%,#0B0B0F_70%,#16161D_100%)]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#1F2937]/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="absolute top-[25%] sm:top-[28%] left-1/2 -translate-x-1/2 w-[250%] sm:w-[150%] h-[800px] sm:h-[1000px] rounded-[100%] border-t-[1px] border-[#374151]/70 bg-[#0B0B0F] pointer-events-none z-0" />
      <div className="absolute top-[25%] sm:top-[28%] left-1/2 -translate-x-1/2 w-[150%] sm:w-[100%] h-[500px] rounded-[100%] border-t-[2px] border-[#9CA3AF]/40 blur-sm pointer-events-none z-0" />
      <div className="absolute top-[25%] sm:top-[28%] left-1/2 -translate-x-1/2 w-[80%] sm:w-[50%] h-[300px] rounded-[100%] border-t-[3px] border-[#E5E7EB]/60 blur-md pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 relative w-full mt-4 sm:mt-8 flex flex-col items-center">
          <div className="flex flex-col items-center text-center gap-6 max-w-6xl mx-auto z-10 relative animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center rounded-full border border-[#1F1F2A] bg-[#111118] px-4 py-1.5 text-xs sm:text-sm font-medium text-[#9CA3AF] shadow-sm">
              <span
                className="mr-2 w-1.5 h-1.5 rounded-full bg-[#E5E7EB]/50"
                aria-hidden="true"
              />
              AI-Driven{" "}
              <span className="text-[#E5E7EB] ml-1">
                Evaluation & Analytics
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-[5rem] font-bold leading-[1.05] tracking-tight text-[#E5E7EB] pb-2 text-center max-w-4xl">
              Turn Interview Practice{" "}
              <span className="whitespace-nowrap">Into Opportunity</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#9CA3AF] leading-relaxed max-w-2xl font-normal mt-2">
              Simulate real-world technical and behavioral interviews. Receive
              structured scoring, actionable insights, and measurable
              improvement over time.
            </p>
          </div>

          <div className="w-full flex justify-center mt-32 sm:mt-25 mb-12 relative z-20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/dashboard" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 px-4 md:px-8 rounded-full bg-[#E5E7EB] text-[#050507] hover:bg-white md:font-medium font-medium text-sm md:text-base transition-colors duration-200 shadow-[0_0_30px_rgba(229,231,235,0.15)]"
                >
                  Start Free Interview
                </Button>
              </Link>
              <Button
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto h-12 px-4 md:px-8 rounded-full border border-[#1F1F2A] text-[#E5E7EB] hover:bg-[#111118] md:font-medium font-medium text-sm md:text-base transition-colors duration-200 bg-[#0B0B0F]/80 backdrop-blur-sm"
              >
                View Demo
              </Button>
            </div>
          </div>

        <Reveal delay={0.2}>
          <div className="relative w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mt-8 pb-20 z-10">
            <div className="w-full max-w-[320px] lg:w-[320px] lg:mt-16 z-10">
              <div className="bg-[#0B0B0F]/90 border border-[#1F1F2A] rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.6)] backdrop-blur-lg">
                <h3 className="text-[#E5E7EB] font-medium mb-5 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#9CA3AF]" />
                  Skill Breakdown
                </h3>
                <div className="space-y-4">
                  {herodata.map((skill) => (
                    <div key={skill.id} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#9CA3AF]">{skill.label}</span>
                        <span className="text-[#E5E7EB] font-medium">
                          {skill.score}
                        </span>
                      </div>
                      <div className="h-1 w-full bg-[#16161D] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#4B5563] rounded-full shadow-[0_0_8px_rgba(156,163,175,0.2)]"
                          style={{ width: skill.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full max-w-[340px] lg:w-[340px] lg:-mx-4 z-20">
              <div className="bg-[#111118]/95 border border-[#1F1F2A] rounded-2xl p-8 shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl flex flex-col items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1F2937]/30 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />

                <h3 className="text-[#E5E7EB] font-medium mb-6">
                  Overall Performance
                </h3>

                <div className="relative w-36 h-36 flex items-center justify-center mb-6">
                  <svg
                    className="w-full h-full -rotate-90 transform"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#1F1F2A"
                      strokeWidth="4"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray="282.7"
                      strokeDashoffset={282.7 * 0.13}
                      className="drop-shadow-[0_0_12px_rgba(229,231,235,0.2)]"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#9CA3AF]">
                      87
                    </span>
                    <span className="text-[10px] text-[#9CA3AF] font-medium mt-1 uppercase tracking-widest">
                      Score
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-[#050507]/50 px-3 py-1.5 border border-[#1F1F2A]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E5E7EB]/80" />
                  <span className="text-xs font-medium text-[#9CA3AF]">
                    Top-tier simulated candidate
                  </span>
                </div>
              </div>
            </div>

            {/* Right: AI Insight Card */}
            <div className="w-full max-w-[380px] lg:w-[380px] lg:mt-12 z-10">
              <div className="bg-[#0B0B0F]/90 border border-[#1F1F2A] rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.6)] backdrop-blur-lg">
                <h3 className="text-[#E5E7EB] font-medium mb-4 flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4 text-[#9CA3AF]" />
                  AI Insight
                </h3>
                <div className="text-[#9CA3AF] text-sm leading-relaxed space-y-3">
                  <p>
                    <strong className="text-[#E5E7EB] font-medium">
                      Strong understanding
                    </strong>{" "}
                    of React concepts.
                  </p>
                  <p>
                    Improve structured explanations and edge-case handling for a
                    better overall delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
