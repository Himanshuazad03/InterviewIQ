import { Button } from "@/components/ui/button";
import { BrainCircuit } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1F1F2A] bg-[#0B0B0F]/80 backdrop-blur-md">
      <div className="container flex h-16 w-full items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex item-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1F2937]">
            <BrainCircuit className="h-5 w-5 text-[#E5E7EB]" />
          </div>
          <span className="text-xl font-heading font-semibold tracking-tight text-[#E5E7EB]">InterviewIQ</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-8 md:flex text-sm font-medium text-[#9CA3AF]">
          <Link href="#features" className="hover:text-[#E5E7EB] transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-[#E5E7EB] transition-colors">How It Works</Link>
          <Link href="#testimonials" className="hover:text-[#E5E7EB] transition-colors">Testimonials</Link>
          <Link href="#pricing" className="hover:text-[#E5E7EB] transition-colors">Pricing</Link>
        </nav>
        <div className="flex items-center gap-6">
          <Link href="/login" className="hidden sm:inline-block text-sm font-medium text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors">
            Login
          </Link>
          <Button className="hidden sm:inline-flex rounded-lg bg-[#1F2937] text-[#F9FAFB] hover:bg-[#374151] border-0">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
