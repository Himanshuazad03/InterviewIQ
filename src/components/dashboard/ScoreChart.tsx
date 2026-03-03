"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

const data = [
  { date: "Jan 10", score: 62 },
  { date: "Jan 15", score: 70 },
  { date: "Jan 22", score: 75 },
  { date: "Feb 01", score: 81 },
  { date: "Feb 10", score: 78 },
  { date: "Feb 18", score: 85 },
];

export function ScoreChart() {
  return (
    <div className="rounded-xl border border-[#1F1F2A] bg-[#111118] p-6 shadow-none">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-heading font-semibold text-[#F9FAFB]">Score Trend</h3>
          <p className="text-sm text-[#9CA3AF] mt-1">Your performance over the last 6 interviews</p>
        </div>
      </div>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1F1F2A" opacity={0.5} />
            <XAxis 
              dataKey="date" 
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              domain={[40, 100]}
              ticks={[40, 60, 80, 100]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#111118', 
                border: '1px solid #2D2D3A',
                borderRadius: '8px',
                boxShadow: 'none'
              }}
              itemStyle={{ color: '#E5E7EB', fontWeight: '500' }}
              labelStyle={{ color: '#9CA3AF', marginBottom: '4px' }}
              cursor={{ stroke: '#2D2D3A', strokeWidth: 1, strokeDasharray: '4 4' }}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#E5E7EB"
              strokeWidth={2}
              dot={{ fill: '#111118', stroke: '#E5E7EB', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#F9FAFB', stroke: '#F9FAFB' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
