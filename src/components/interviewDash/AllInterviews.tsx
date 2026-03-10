import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Star } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CircleCheck } from "lucide-react";

export interface InterviewData {
  id: string;
  jobRole: string;
  topics: string[];
  difficulty: string;
  interviewType: string;
  experienceLevel: string;
  questionCount: number;
  createdAt: Date | string;
  status: string;
  score: number | null;
}

interface AllInterviewProps {
  interview?: InterviewData;
}

// Helper to get a consistent color and initials based on jobRole
function getLogoInfo(role: string) {
  const hash = role
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const colors = [
    "bg-[#FFB800]", // Amazon yellow
    "bg-[#7C3AED]", // Hashnode purple
    "bg-[#10B981]", // Emerald
    "bg-[#EF4444]", // Red
    "bg-[#3B82F6]", // Blue
  ];
  const color = colors[hash % colors.length];
  const initial = role.charAt(0).toUpperCase();
  return { color, initial };
}

export default function AllInterview({ interview }: AllInterviewProps) {
  // If no interview is passed, we show a sleek empty/placeholder state or a fallback.
  // We'll provide a fallback for previewing if undefined.

  const data = interview || {
    id: "fallback",
    jobRole: "Software Engineer",
    topics: ["React", "TypeScript", "Node.js"],
    difficulty: "Medium",
    interviewType: "Mixed",
    experienceLevel: "Mid",
    questionCount: 10,
    createdAt: new Date(),
    status: "pending",
    score: 80,
  };

  const formattedDate = new Date(data.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const { color, initial } = getLogoInfo(data.jobRole);

  const isCompleted = data.status === "completed";
  const score = isCompleted ? data.score : "---";

  // Format "Mixed" to roughly match the image "Mix Between Behavioral And Technical"
  const formattedType =
    data.interviewType.toLowerCase() === "mixed"
      ? "Mix Between Behavioral And Technical"
      : data.interviewType + " Interview";

  return (
    <Card className="relative bg-[#111116] border-[#27272A] hover:border-[#3F3F46] transition-all duration-300 flex flex-col h-full rounded-2xl overflow-hidden group">
      {/* Top Right Ribbon */}
      <div className="absolute top-0 -right-2 px-4 py-2 bg-[#424254] text-[#E4E4E7] text-[10px] font-semibold tracking-wide rounded-b-md z-10 shadow-sm">
        {formattedType}
      </div>

      <div className="px-6 pt-3 flex flex-col h-full">
        {/* Logo Section */}
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 ${color} shadow-lg`}
        >
          <span className="text-white text-2xl font-bold">{initial}</span>
        </div>

        {/* Title */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg lg:text-xl font-bold text-white leading-tight tracking-tight">
            {data.jobRole}
          </h3>
          {isCompleted && <CircleCheck className="w-6 h-6 text-green-500" />}
        </div>

        {/* Metadata Row */}
        <div className="flex items-center lg:gap-5 gap-2 text-[#A1A1AA] text-sm mb-4">
          <div className="flex items-center gap-1.5 font-medium">
            <Calendar className="w-4 h-4" />
            {formattedDate}
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Star className="w-4 h-4 fill-[#FDE047] text-[#FDE047]" />
            {score}/100
          </div>
        </div>

        {/* Description */}
        <p className="text-[#A1A1AA] text-sm leading-relaxed flex-grow font-medium">
          {isCompleted
            ? "Congratulations, You have completed this interview"
            : "You haven't taken this interview yet. Take it now to improve your skills"}
        </p>

        {/* Footer (Topics + Button) */}
        <div className="flex flex-wrap items-center gap-2 py-4">
          {/* Overlapping topic pills */}
          {data.topics.length > 3 ? (
            <>
              {data.topics.slice(0, 3).map((topic, i) => (
                <Badge key={i} variant="secondary">
                  {topic}
                </Badge>
              ))}
              <Badge variant="secondary">+{data.topics.length - 3}</Badge>
            </>
          ) : (
            data.topics.map((topic, i) => (
              <Badge key={i} variant="secondary">
                {topic}
              </Badge>
            ))
          )}
        </div>
        {isCompleted ? (
          <Link href={`/dashboard/interview/${data.id}/attempts`}>
            <Button className="bg-[#E0D4FF] w-full hover:bg-[#D4C3FF] text-[#1E114D] font-bold rounded-md px-5 transition-colors shadow-sm cursor-pointer">
              View Interview
            </Button>
          </Link>
        ) : (
          <Link href={`/dashboard/interview/${data.id}`}>
            <Button className="bg-[#E0D4FF] w-full hover:bg-[#D4C3FF] text-[#1E114D] font-bold rounded-md px-5 transition-colors shadow-sm cursor-pointer">
              Start Interview
            </Button>
          </Link>
        )}
      </div>
    </Card>
  );
}
