import React from "react";
import { Sparkles, FileText, ArrowRight, Zap, Target, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ResumeBuilderPage() {
  return (
    <ScrollArea className="h-full">
      <div className="min-h-[calc(100vh-4rem)] bg-[#050507] text-white flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#E0D4FF]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-4xl w-full flex flex-col items-center text-center z-10 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F1F2A] border border-white/10 text-sm font-medium text-[#E0D4FF] shadow-xl">
          <Sparkles className="w-4 h-4 animate-pulse text-amber-300" />
          <span>Next-Gen Feature in Development</span>
        </div>

        {/* Hero Copy */}
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            The Ultimate AI <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0D4FF] via-white to-blue-200">
              Resume Builder
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
            We're putting the finishing touches on our groundbreaking resume generator. 
            Soon, you'll be able to instantly craft ATS-beating resumes tailored perfectly to your target roles using AI.
          </p>
        </div>

        {/* Feature Teasers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-10">
          <FeatureCard 
            icon={<Zap className="w-6 h-6 text-amber-400" />}
            title="Instant Generation"
            description="Turn your raw experience into professional bullet points in seconds."
          />
          <FeatureCard 
            icon={<Target className="w-6 h-6 text-rose-400" />}
            title="ATS Optimized"
            description="Scientifically formatted to pass through Applicant Tracking Systems."
          />
          <FeatureCard 
            icon={<Briefcase className="w-6 h-6 text-emerald-400" />}
            title="Role Targeted"
            description="Dynamic keywords mapped perfectly to the specific job you want."
          />
        </div>

        {/* CTA / Waitlist Placeholder */}
        <div className="pt-12 flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <Link href="/dashboard/interviews">
            <Button size="lg" variant="outline" className="border-white/10 text-white font-medium bg-black/20 hover:bg-white/5 rounded-full px-8 h-14">
              Practice Interviews Instead
            </Button>
          </Link>
          <Button size="lg" className="bg-[#E0D4FF] hover:bg-white text-black font-bold rounded-full px-8 h-14 shadow-[0_0_30px_-5px_#E0D4FF] transition-all hover:scale-105">
            <FileText className="w-5 h-5 mr-2" />
            Notify Me When It's Live
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

      </div>
      </div>
    </ScrollArea>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="bg-[#111118] border-white/5 shadow-xl hover:border-white/10 transition-colors group">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
        <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
