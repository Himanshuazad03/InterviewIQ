import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle } from "lucide-react";

interface KeywordMatchCardProps {
  keywordMatch: {
    matched: string[];
    missed: string[];
  };
}

export const KeywordMatchCard = ({ keywordMatch }: KeywordMatchCardProps) => {
  const { matched, missed } = keywordMatch;
  const totalKeywords = matched.length + missed.length;
  const matchPercentage =
    totalKeywords > 0 ? Math.round((matched.length / totalKeywords) * 100) : 0;

  return (
    <Card className="bg-[#111118] border-white/5 rounded-xl shadow-lg border h-full">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium text-[#F9FAFB]">
            Role-Specific Keywords
          </CardTitle>
          {totalKeywords > 0 && (
            <span
              className={`text-sm font-semibold px-2 py-1 rounded-md ${
                matchPercentage >= 70
                  ? "bg-emerald-500/10 text-emerald-400"
                  : matchPercentage >= 40
                    ? "bg-amber-500/10 text-amber-400"
                    : "bg-rose-500/10 text-rose-400"
              }`}
            >
              {matchPercentage}% Match
            </span>
          )}
        </div>
        <p className="text-xs text-white/50 mt-1">
          Based on standard industry requirements for this role.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {/* Matched Keywords */}
          {matched.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium text-white/80">
                  Mentioned ({matched.length})
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {matched.map((keyword, index) => (
                  <Badge
                    key={`matched-${index}`}
                    variant="outline"
                    className="bg-emerald-500/5 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/10 transition-colors"
                  >
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Missed Keywords */}
          {missed.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-4 h-4 text-rose-500" />
                <span className="text-sm font-medium text-white/80">
                  Missed ({missed.length})
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {missed.map((keyword, index) => (
                  <Badge
                    key={`missed-${index}`}
                    variant="outline"
                    className="bg-white/5 text-white/50 border-white/10 hover:bg-white/10 transition-colors"
                  >
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {totalKeywords === 0 && (
            <p className="text-sm text-white/50 italic py-4 text-center">
              No role-specific keyword data available.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
