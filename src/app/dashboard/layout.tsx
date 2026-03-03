import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | InterviewIQ",
  description: "AI-powered interview performance tracking.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0B0B0F] text-[#E5E7EB] selection:bg-[#1F2937]">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        
        <main className="flex-1 p-4 sm:p-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
        
      </div>
    </div>
  );
}