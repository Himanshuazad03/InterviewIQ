import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Settings2, BarChart3, FileText, Target, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    title: "Configurable Interview Sessions",
    description:
      "Customize interviews by role, topic, difficulty, and type with a structured session flow.",
    icon: Settings2,
  },
  {
    title: "AI-Based Question Generation",
    description:
      "Questions generated dynamically based on selected role and difficulty level.",
    icon: BrainCircuit,
  },
  {
    title: "Structured Answer Evaluation",
    description:
      "Each answer is scored across technical accuracy, depth, clarity, and confidence.",
    icon: Target,
  },
  {
    title: "Weighted Final Score (Out of 100)",
    description:
      "Deterministic scoring model built on top of AI-generated evaluations.",
    icon: BarChart3,
  },
  {
    title: "Detailed Interview Reports",
    description:
      "Comprehensive feedback with strengths, weak areas, and improvement suggestions.",
    icon: FileText,
  },
  {
    title: "Performance Tracking Dashboard",
    description:
      "Track interview history, score trends, and recurring weak topics over time.",
    icon: TrendingUp,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-bl from-[#16161D] via-[#0B0B0F] to-[#050507]">
      <div className="container mx-auto max-w-7xl px-3 sm:px-4">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 bg-gradient-to-r from-[#9CA3AF] via-[#E5E7EB] to-[#94A3B8] bg-clip-text text-transparent">
              Why Developers Choose InterviewIQ
            </h2>
            <p className="text-lg text-[#9CA3AF]">
              A complete toolkit designed to simulate the rigor of a real interview and provide actionable feedback.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <Card className="bg-[#111118] border-[#1F1F2A] hover:border-slate-500 transition-colors duration-300 shadow-none">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-[#1F2937] flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-[#E5E7EB]" />
                  </div>
                  <CardTitle className="text-xl font-heading font-semibold text-[#E5E7EB]">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#9CA3AF] leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
