import { prisma } from "@/lib/prisma";
import VoiceInterview from "@/components/interviewDash/VoiceInterview";
import { getInterview } from "@/actions/Interview";
import { checkRetakeRateLimit } from "@/actions/Interview";
import { useRouter } from "next/navigation";
export default async function InterviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const router = useRouter();
  const rateLimit = await checkRetakeRateLimit();
  if (!rateLimit.success) {
    router.push("/dashboard/interviews");
    return;
  }
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
