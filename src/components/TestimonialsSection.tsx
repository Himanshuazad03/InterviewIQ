import { Reveal } from "./Reveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer @ TechCorp",
    content:
      "InterviewIQ completely changed how I prep for interviews. The AI feedback was spot-on and helped me identify my weak points in behavioral questions.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "Product Manager @ InnovateX",
    content:
      "The realistic scenarios and instant scoring gave me the confidence I needed. I landed my dream role after practicing here just for a week.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Data Scientist @ DataFlow",
    content:
      "A game-changer! The rubric-based evaluation is incredibly detailed. It felt like I was doing a real mock interview with an industry expert.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-bl from-[#16161D] via-[#0B0B0F] to-[#050507]">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#E5E7EB]">
              Loved by Candidates
            </h2>
            <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
              See what our users have to say about their interview preparation
              experience.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="h-full p-8 rounded-2xl bg-[#0B0B0F] border border-[#1F1F2A] hover:border-[#374151] transition-colors duration-300 relative group flex flex-col">
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                      strokeWidth={1}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#D1D5DB] text-base leading-relaxed mb-8 flex-1">
                  "{testimonial.content}"
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[#1F1F2A]/50">
                  <div className="w-10 h-10 rounded-full bg-[#1F1F2A] flex items-center justify-center text-[#E5E7EB] font-medium shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-[#E5E7EB] font-medium text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#9CA3AF] text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
