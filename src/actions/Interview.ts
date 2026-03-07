"use server";
import { prisma } from "@/lib/prisma";
import { InterviewSchema } from "@/lib/schema";
import { requireUser } from "@/actions/requireUser";

export const CreateInterview = async (data: InterviewSchema) => {
  try {
    const userId = await requireUser();
    const dbUser = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });
    if (!dbUser) {
      throw new Error("User not found");
    }
    if (
      !data.jobRole ||
      data.topics.length === 0 ||
      !data.difficulty ||
      !data.interviewType ||
      !data.experienceLevel ||
      !data.questionCount
    ) {
      throw new Error("Please fill all the fields");
    }
    const interview = await prisma.interview.create({
      data: {
        userId: dbUser.id,
        jobRole: data.jobRole,
        topics: data.topics,
        difficulty: data.difficulty,
        interviewType: data.interviewType,
        experienceLevel: data.experienceLevel,
        questionCount: data.questionCount,
      },
    });
    return interview;
  } catch (error) {
    console.log(error);
  }
};

export const AllInterviews = async () => {
  try {
    const userId = await requireUser();

    const dbUser = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });
    if (!dbUser) {
      throw new Error("User not found");
    }

    const interviews = prisma.interview.findMany({
      where: {
        userId: dbUser.id
      },
    });

    return interviews
  } catch (error) {
    console.log(error)
  }
};
