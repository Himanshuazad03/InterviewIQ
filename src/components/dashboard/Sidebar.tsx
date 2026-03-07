"use client";

import {
  BrainCircuit,
  FileBarChart,
  LayoutDashboard,
  Settings,
  UserRound,
  GraduationCap,
  LogOut,
  Home,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export const navItems = [
  { name: "Overview", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Interviews", icon: GraduationCap, href: "/dashboard/interviews" },
  { name: "Resume Analysis", icon: FileBarChart, href: "/dashboard/resume" },
  { name: "Reports", icon: FileBarChart, href: "/dashboard/reports" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export function Sidebars() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:w-64 flex-col border-r border-[#1F1F2A] bg-[#0B0B0F] h-full">
      {/* Logo Section */}
      <Link href="/" className="flex items-center gap-3 p-4 border-b border-[#1F1F2A]">  
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-black-600 to-gray-600 flex items-center justify-center">
          <BrainCircuit className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-heading font-semibold tracking-tight text-[#E5E7EB]">
          Interview
          <span className="bg-gradient-to-r from-[#E5E7EB] via-[#CBD5F5] to-[#9CA3AF] bg-clip-text text-transparent">
            IQ
          </span>
        </span>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 space-y-4 p-4 mt-10">
        {navItems.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#1F2937] text-[#F9FAFB]"
                  : "text-[#9CA3AF] hover:bg-[#111118] hover:text-[#F9FAFB]"
              }`}
            >
              <item.icon
                className={`h-5 w-5 ${isActive ? "text-[#F9FAFB]" : "text-[#6B7280]"}`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Profile Section */}
      <div className="border-t border-[#1F1F2A] p-4">
        <div className="flex items-center justify-between rounded-xl border border-[#1F1F2A] bg-[#111118] p-3 transition-colors hover:border-[#2D2D3A]">
          <div className="flex items-center gap-3 overflow-hidden">
            <Avatar className="h-9 w-9 border border-[#2D2D3A]">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback className="bg-[#1F2937] text-[#E5E7EB]">
                RM
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col overflow-hidden">
              <span className="truncate text-sm font-heading font-semibold text-[#F9FAFB]">
                Rahul Mehta
              </span>
              <span className="truncate text-xs text-[#6B7280]">
                Free Plan
              </span>
            </div>
          </div>
          <button className="text-[#9CA3AF] hover:text-[#F87171] transition-colors p-1 rounded-md hover:bg-[#1F2937]">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
