import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function CTASection() {
  return (
    <section className="pt-24 pb-0 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-[#16161D] via-[#0B0B0F] to-[#050507] -z-20" />

      <div className="w-full text-center">
        <Reveal>
          <div className=" bg-[#111118]/80 p-10 md:p-16 backdrop-blur-md relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6 bg-gradient-to-r from-[#9CA3AF] via-[#E5E7EB] to-[#94A3B8] bg-clip-text text-transparent pb-2">
              Ready to Improve Your Interview Skills?
            </h2>
            <p className="text-lg md:text-xl text-[#9CA3AF] mb-10 max-w-2xl mx-auto">
              Start practicing today and track measurable, structured improvement across technical and behavioral interviews.
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <Button size="lg" className="h-14 px-10 text-lg rounded-lg bg-[#1F2937] text-[#F9FAFB] hover:bg-[#374151] border-0 transition-colors w-full sm:w-auto">
                Create Free Interview
              </Button>
              <p className="text-sm text-[#6B7280]">No credit card required.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
