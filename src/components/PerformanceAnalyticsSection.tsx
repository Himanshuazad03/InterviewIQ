import { Reveal } from "./Reveal";

export function PerformanceAnalyticsSection() {
  return (
    <section
      id="analytics"
      className="py-24 bg-gradient-to-br from-[#050507] via-[#0B0B0F] to-[#16161D]"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Explanation */}
          <Reveal>
            <div className="space-y-6 max-w-lg">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-[#E5E7EB] tracking-tight">
                Track Improvement Over Time
              </h2>
              <p className="text-lg text-[#9CA3AF] leading-relaxed">
                Consistency is key. Monitor your overall performance trajectory,
                identify recurring weak points, and ensure you are actually
                improving with each session.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#E5E7EB]" />
                  <span className="text-[#9CA3AF]">
                    Historical score trends
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#6B7280]" />
                  <span className="text-[#9CA3AF]">
                    Skill-specific progression
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#374151]" />
                  <span className="text-[#9CA3AF]">Custom date ranges</span>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Right: Simple Grayscale Graph Placeholder */}
          <Reveal delay={0.2}>
            <div className="relative aspect-[4/3] w-full rounded-xl border border-[#1F1F2A] bg-[#111118] p-6 shadow-sm overflow-hidden flex flex-col">
              {/* Header/Axis */}
              <div className="flex justify-between items-center border-b border-[#1F1F2A] pb-4 mb-6">
                <div className="text-sm font-medium text-[#E5E7EB]">
                  Average Score
                </div>
                <div className="text-xs text-[#6B7280]">Last 30 Days</div>
              </div>

              {/* Chart Body Simulation */}
              <div className="flex-1 relative flex items-end justify-between gap-2 sm:gap-4 mt-auto">
                {/* Horizontal Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between z-0 pointer-events-none">
                  <div className="w-full h-px bg-[#1F1F2A]/50" />
                  <div className="w-full h-px bg-[#1F1F2A]/50" />
                  <div className="w-full h-px bg-[#1F1F2A]/50" />
                  <div className="w-full h-px bg-[#1F1F2A]/50" />
                </div>

                {/* Bars - Neutral Grayscale */}
                <div
                  className="relative z-10 w-full bg-[#2D2D3A] rounded-t-sm hover:bg-[#374151] transition-colors"
                  style={{ height: "35%" }}
                />
                <div
                  className="relative z-10 w-full bg-[#2D2D3A] rounded-t-sm hover:bg-[#374151] transition-colors"
                  style={{ height: "42%" }}
                />
                <div
                  className="relative z-10 w-full bg-[#2D2D3A] rounded-t-sm hover:bg-[#374151] transition-colors"
                  style={{ height: "55%" }}
                />
                <div
                  className="relative z-10 w-full bg-[#2D2D3A] rounded-t-sm hover:bg-[#374151] transition-colors"
                  style={{ height: "50%" }}
                />
                <div
                  className="relative z-10 w-full bg-[#374151] rounded-t-sm hover:bg-[#4B5563] transition-colors"
                  style={{ height: "70%" }}
                />
                <div
                  className="relative z-10 w-full bg-[#374151] rounded-t-sm hover:bg-[#4B5563] transition-colors"
                  style={{ height: "65%" }}
                />
                <div
                  className="relative z-10 w-full bg-[#4B5563] rounded-t-sm hover:bg-[#6B7280] transition-colors"
                  style={{ height: "85%" }}
                />
              </div>

              {/* X-Axis Labels Simulation */}
              <div className="flex justify-between items-center text-[10px] text-[#6B7280] pt-4 mt-2">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
