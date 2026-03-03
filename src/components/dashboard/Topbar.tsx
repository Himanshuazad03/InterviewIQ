import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Topbar() {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-[#1F1F2A] bg-[#0B0B0F]/80 px-4 sm:px-8 backdrop-blur-md">
      {/* Left side greeting */}
      <div className="flex items-center">
        <h2 className="text-lg font-heading font-semibold text-[#F9FAFB]">Welcome back, Rahul <span className="text-xl">👋</span></h2>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-4">
        <button className="relative flex h-9 w-9 items-center justify-center rounded-full text-[#9CA3AF] transition-colors hover:bg-[#1F2937] hover:text-[#F9FAFB]">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#0B0B0F]" />
        </button>
        <div className="h-8 w-px bg-[#1F1F2A] hidden sm:block" />
        <Avatar className="h-8 w-8 cursor-pointer border border-[#2D2D3A] hidden sm:block">
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback className="bg-[#1F2937] text-[#E5E7EB]">RM</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
