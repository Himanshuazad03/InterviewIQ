import { Play, Settings, Target, Trophy } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    title: "Create Interview",
    description: "Select role, topic, difficulty, and interview type.",
    icon: Settings,
  },
  {
    title: "Answer Questions",
    description: "Respond via text or voice in a simulated interview flow.",
    icon: Play,
  },
  {
    title: "AI Evaluation",
    description: "Structured scoring using intelligent evaluation prompts.",
    icon: Target,
  },
  {
    title: "Review & Improve",
    description: "See detailed feedback and track performance over time.",
    icon: Trophy,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-gradient-to-br from-[#050507] via-[#0B0B0F] to-[#16161D]">
      <div className="container mx-auto max-w-7xl px-3 sm:px-4 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 bg-gradient-to-r from-[#9CA3AF] via-[#E5E7EB] to-[#94A3B8] bg-clip-text text-transparent pb-1">
              Simple. Structured. Effective.
            </h2>
            <p className="text-lg text-[#9CA3AF]">
              Practice makes perfect. Four simple steps stand between you and a better interview performance.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#1F1F2A] to-transparent transform -translate-y-1/2 -z-10" />

          {/* Connecting Line (Mobile) */}
          <div className="block md:hidden absolute top-[10%] bottom-[10%] left-[2rem] w-px bg-gradient-to-b from-transparent via-[#1F1F2A] to-transparent transform -translate-x-1/2 -z-10" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative">
            {steps.map((step, index) => (
              <Reveal key={index} delay={index * 0.15}>
                <div className="relative flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-4 md:text-center group">
                  <div className="flex-shrink-0 relative">
                    <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl border border-[#1F1F2A] bg-[#111118] flex items-center justify-center relative z-10 mx-auto transition-colors group-hover:bg-[#1F2937]">
                      <step.icon className="h-6 w-6 md:h-7 md:w-7 text-[#E5E7EB]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-[#F9FAFB] mb-2">{step.title}</h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-[250px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
