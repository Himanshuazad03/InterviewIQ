import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Frontend Developer",
    content: "Helped me identify gaps in React fundamentals before my final round interview.",
    initials: "AS",
  },
  {
    name: "Priya Patel",
    role: "Computer Science Student",
    content: "The performance tracking feature kept me accountable and consistent.",
    initials: "PP",
  },
  {
    name: "Rahul Mehta",
    role: "Backend Engineer",
    content: "Clear scoring and structured feedback made preparation more focused.",
    initials: "RM",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-bl from-[#16161D] via-[#0B0B0F] to-[#050507] border-t border-[#1F1F2A]">
      <div className="container mx-auto max-w-7xl px-3 sm:px-4">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 bg-gradient-to-r from-[#9CA3AF] via-[#E5E7EB] to-[#94A3B8] bg-clip-text text-transparent pb-1">
              Trusted by Developers & Students
            </h2>
            <p className="text-lg text-[#9CA3AF]">
              Thousands of candidates use InterviewIQ to approach their interviews with confidence.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <Card className="bg-[#111118] border-[#1F1F2A] h-full p-2 hover:border-slate-500 transition-colors rounded-xl shadow-none">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12 border border-[#2D2D3A]">
                      <AvatarFallback className="bg-[#1F2937] text-[#E5E7EB] font-medium">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-heading font-semibold text-[#E5E7EB]">{testimonial.name}</h4>
                      <p className="text-sm text-[#6B7280]">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-[#9CA3AF] leading-relaxed relative">
                    <span className="text-4xl text-[#1F1F2A] font-serif absolute -top-4 -left-2 select-none">&ldquo;</span>
                    <span className="relative z-10">{testimonial.content}</span>
                  </blockquote>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
