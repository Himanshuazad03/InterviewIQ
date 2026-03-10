import React from "react";
import { Clock, Calendar, Briefcase, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

import Link from "next/link";

interface FeedbackHeaderProps {
  role: string;
  date: string;
  retakeHref: string;
}

export const FeedbackHeader = ({ role, date, retakeHref }: FeedbackHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-white">Interview Feedback Report</h1>
        <p className="text-muted-foreground">AI analysis of your interview performance</p>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/70 mt-4">
          <div className="flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-primary" />
            <span>{role}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{date}</span>
          </div>
        </div>
      </div>
      
      <Link href={retakeHref}>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full shrink-0">
          <RefreshCw className="mr-2 w-4 h-4" />
          Retake Interview
        </Button>
      </Link>
    </div>
  );
};
