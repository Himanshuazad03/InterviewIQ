import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { InterviewReportPreview } from "@/components/InterviewReportPreview";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 
      bg-gradient-to-br from-[#050507] via-[#0B0B0F] to-[#16161D]">

      {/* Subtle depth layer (very soft, no glow) */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.04),transparent_40%)] 
        pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <Reveal>
            <div className="flex flex-col gap-6 max-w-4xl">

              <div className="inline-flex items-center 
                rounded-full border border-[#1F1F2A] 
                bg-[#111118] px-3 py-1 
                text-sm font-medium text-[#9CA3AF] w-fit">
                AI-Driven • Structured Evaluation • Performance Analytics
              </div>

              {/* Premium subtle gradient heading */}
              <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-semibold leading-[1.1] tracking-tight 
                bg-gradient-to-r from-[#9CA3AF] via-[#E5E7EB] to-[#94A3B8] 
                bg-clip-text text-transparent">
                AI-Powered Interviews. <br />
                Real Results.
              </h1>

              <p className="text-lg sm:text-xl text-[#9CA3AF] leading-relaxed max-w-2xl font-normal">
                Simulate real-world technical and behavioral interviews.
                Receive structured scoring, actionable insights, and 
                measurable improvement over time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">

                <Button
                  size="lg"
                  className="h-12 px-8 rounded-lg 
                  bg-[#1F2937] text-[#F9FAFB] 
                  hover:bg-[#2A3342] 
                  border border-[#2D3748] 
                  text-base transition-colors duration-200"
                >
                  Start Free Interview
                </Button>

                <Button
                  size="lg"
                  variant="ghost"
                  className="h-12 px-8 rounded-lg 
                  border border-[#2D2D3A] 
                  text-[#D1D5DB] 
                  hover:bg-[#141419] 
                  text-base transition-colors duration-200"
                >
                  View Demo
                </Button>

              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <InterviewReportPreview />
          </Reveal>

        </div>
      </div>
    </section>
  );
}