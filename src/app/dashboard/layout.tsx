"use client";
import { Sidebars } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";
import { useUser } from "@clerk/nextjs";
import { Suspense } from "react";
import Skeleton from "@/components/dashboard/Skeleton";
import { usePathname } from "next/navigation";
import SideBarSkeleton from "@/components/dashboard/SideBarSkeleton";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoaded } = useUser();
  const pathname = usePathname();

  // Hide Topbar and Sidebar while actively taking an interview
  // e.g., `/dashboard/interview/123` but NOT `/dashboard/interviews`
  const isInterviewPage = pathname.match(/^\/dashboard\/interview\/[^\/]+$/);

  if (isInterviewPage) {
    return (
      <div className="flex h-screen overflow-hidden bg-[#050507] text-[#E5E7EB] selection:bg-[#1F2937]">
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#0B0B0F] text-[#E5E7EB] selection:bg-[#1F2937]">
      <Suspense fallback={<SideBarSkeleton />}>
        <Sidebars />
      </Suspense>

      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />

        <main className="flex-1 overflow-hidden">
          <div className="mx-auto max-w-7xl h-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
