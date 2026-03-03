"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jan", score: 55 },
  { name: "Feb", score: 62 },
  { name: "Mar", score: 58 },
  { name: "Apr", score: 68 },
  { name: "May", score: 74 },
  { name: "Jun", score: 76 }
];

export function MiniScoreChart() {
  return (
    <Card className="bg-[#111118] border-[#1F1F2A] shadow-none h-full flex flex-col rounded-xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-heading font-semibold text-[#F9FAFB]">Performance Trend</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-4 px-2 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#374151" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#374151" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              stroke="#6B7280" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
              dy={10}
            />
            <YAxis 
              stroke="#6B7280" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
              dx={-10}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#111118",
                border: "1px solid #1F1F2A",
                borderRadius: "8px",
                color: "#E5E7EB",
                boxShadow: "none"
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Area
              type="monotone"
              dataKey="score"
              stroke="#6B7280"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorScore)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
