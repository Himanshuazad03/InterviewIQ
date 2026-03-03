import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function StatCard({ title, value, icon: Icon, trend }: StatCardProps) {
  return (
    <Card className="bg-[#111118] border-[#1F1F2A] shadow-none rounded-xl transition-all hover:border-[#2D2D3A]">
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1F2937] text-[#E5E7EB]">
            <Icon className="w-6 h-6" />
          </div>
          {trend && (
            <div className={`text-xs font-medium px-2 py-1 rounded-full ${trend.isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
              {trend.isPositive ? '+' : ''}{trend.value}%
            </div>
          )}
        </div>
        
        <div className="mt-4">
          <h3 className="text-3xl font-heading font-semibold text-[#F9FAFB] tracking-tight">{value}</h3>
          <p className="text-sm font-medium text-[#9CA3AF] mt-1">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
}
