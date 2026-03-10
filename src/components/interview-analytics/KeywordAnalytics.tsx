"use client";

import { useMemo } from "react";
import { Attempt } from "./types";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

export function KeywordAnalytics({ attempts }: { attempts: Attempt[] }) {
  const data = useMemo(() => {
    return attempts.map((a, i) => ({
      name: `Attempt ${i + 1}`,
      match: a.keywordMatch || 0,
    }));
  }, [attempts]);

  if (attempts.length < 2) {
    return (
      <div className="bg-[#111116] border border-[#27272A] rounded-2xl p-6 flex flex-col justify-center items-center text-center h-full min-h-[200px]">
        <p className="text-gray-400 text-sm">Need more attempts to show keyword trend.</p>
      </div>
    );
  }

  const latestMatch = data[data.length - 1].match;
  const previousMatch = data[data.length - 2].match;
  const diff = latestMatch - previousMatch;

  return (
    <div className="bg-[#111116] border border-[#27272A] rounded-2xl p-6 h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Keyword Coverage</h3>
          <p className="text-sm text-gray-400">Industry terms matched</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">{latestMatch}%</div>
          <div className={`text-xs font-medium ${diff >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {diff >= 0 ? '+' : ''}{diff}% vs previous
          </div>
        </div>
      </div>

      <div className="flex-grow w-full h-[120px] -ml-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorMatch" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F1F2A',
                border: '1px solid #3F3F46',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '12px'
              }}
              itemStyle={{ color: '#3B82F6' }}
            />
            <Area 
              type="monotone" 
              dataKey="match" 
              stroke="#3B82F6" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorMatch)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
