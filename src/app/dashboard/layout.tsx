"use client";
import { Sidebars } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";
import { useUser } from "@clerk/nextjs";
import { Suspense } from "react";
import Skeleton from "@/components/dashboard/Skeleton";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <Skeleton />;
  }
  return (
    <div className="flex h-screen overflow-hidden bg-[#0B0B0F] text-[#E5E7EB] selection:bg-[#1F2937]">
      <Sidebars />

      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />

        <Suspense fallback={<Skeleton />}>
          <main className="flex-1 overflow-hidden">
            <div className="mx-auto max-w-7xl h-full">{children}</div>
          </main>
        </Suspense>
      </div>
    </div>
  );
}
