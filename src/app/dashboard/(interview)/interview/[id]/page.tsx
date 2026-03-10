import { prisma } from "@/lib/prisma";
import VoiceInterview from "@/components/interviewDash/VoiceInterview";
import { getInterview } from "@/actions/Interview";

export default async function InterviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const interview = await getInterview(id);
  if (!interview) {
    return <div>Interview not found.</div>;
  }

  return (
    <VoiceInterview
      questions={interview.questions}
      role = {interview.jobRole}
      skills = {interview.topics}
      interviewId={interview.id}
    />
  );
}
