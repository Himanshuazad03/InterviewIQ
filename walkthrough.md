# InterviewIQ: Full Stack AI Mock Interview Platform

## Executive Summary
InterviewIQ is a Next.js-based SaaS application designed to help job seekers practice interviews using an AI-driven, interactive platform. It features real-time dynamic questioning, detailed post-interview analytics, and a modern, high-performance UI tailored for a premium user experience.

---

## 1. System Architecture & Tech Stack Overview

### Frontend (Client-Side)
- **Framework**: Next.js 16 (App Router)
- **Core Library**: React 19 (Hooks, Context, Server Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4, Shadcn UI, Radix UI (for accessible components)
- **Animations**: Framer Motion (page transitions, micro-interactions)
- **Visualization**: Recharts (for analytics and progress tracking)
- **Forms & Validation**: React Hook Form, Zod

### Backend (Server-Side)
- **Architecture**: Next.js Server Actions & API Routes
- **Database**: PostgreSQL (neon.tech / supabase compatible)
- **ORM**: Prisma Client
- **Security & Middleware**: Arcjet (for rate limiting, bot protection, routing)
- **Authentication**: Clerk (provides complete user management, sign-in/sign-up flows, social auth)

### AI & Integrations
- **AI Providers**: `@google/generative-ai` (Gemini model integration)
- **AI SDK**: Vercel AI SDK (`ai`, `@ai-sdk/google`) for structured data generation and streaming.
- **Speech Processing**: `wavesurfer.js` for audio visualization and browser Speech-to-Text APIs for capturing voice responses.

---

## 2. Deep Dive: Database Schema design

The system manages structured relational data via **Prisma** targeting a PostgreSQL backend:

1. **User Model**: Integrates closely with Clerk. Stores `clerkId`, `email`, `name`, `imageUrl`, and subscription `plan` (Free default).
2. **Interview Model**: The core entity defining the parameters of a mock interview (`jobRole`, `topics`, `difficulty`, `experienceLevel`, `questionCount`). It links directly to a User.
3. **Question Model**: Belongs to an Interview. Stores the specific dynamically AI-generated questions and their specific `order`.
4. **Attempt Model**: Allows for infinite retries of the same interview. It stores the `score` and `feedback` (as a JSON blob containing granular AI feedback per question, sample answers, strengths, etc.). Unique constraints exist on `[interviewId, userId, attemptNo]`.

---

## 3. Deep Dive: The AI Connection

The AI intelligence layer is powered by **Google's Gemini** wrapped in the **Vercel AI SDK**.

### Prompt Engineering & Question Generation
The backend service handles the initial generation.
- **Input**: The frontend passes parameters: target Role, Topics (e.g., React, Node.js), Difficulty level, and total question count.
- **Processing**: The system uses structured output generation via the AI SDK. The prompt instructs the Gemini model to behave as an expert interviewer and formulate concise, challenging, and relevant technical or behavioral questions.
- **Output Validation**: Zod schemas are used to enforce the shape of the AI response, ensuring the backend receives a strict array of questions before inserting them into the Prisma `Question` table.

### Answer Evaluation & Feedback Loop
After the user completes the interview (either typing answers or speaking them via voice-to-text integration), the payload of answers is sent to the Vercel AI SDK.
- The AI is prompted to compare the user's transcript against an "ideal" answer.
- Structural extraction forces the AI to provide:
  1. A quantitative score out of 10 for each answer.
  2. Identified strengths.
  3. Actionable areas for improvement.
  4. An ideal sample response.
- This feedback JSON is saved to the `Attempt` table to render the analytics dashboard.

---

## 4. Application Flow & User Journey

1. **Authentication**: Users hit the landing page and are prompted to sign up/in using Clerk.
2. **Dashboard**: Post-login, they land on a dashboard showing previous interview attempts, average scores, and recent activity.
3. **Creation Setup**: Users click "Create Interview". A wizard-like form asks for job specifics.
4. **AI Generation Phase**: A skeleton loader displays while Next.js Server Actions fetch generated questions from Gemini and save the new Interview record in PostgreSQL.
5. **The Interview Room**: Users enter the mock interview interface. The UI presents questions sequentially. They can use the microphone (visualized by wavesurfer.js) to speak their answer or type it.
6. **Submission & Processing**: The completed transcript is submitted. The AI evaluates the answers.
7. **Feedback & Analytics**: The user is redirected to a comprehensive feedback page showing their cumulative score, Recharts graphs of their historical attempts, and question-by-question breakdowns with AI advice.

---

## 5. UI/UX & Design Philosophy
The system follows a modern SaaS design language:
- **Dark Mode First**: Supported natively via `next-themes`.
- **Glassmorphism**: Translucent cards with blurred backgrounds to give a premium feel.
- **Dynamic Elements**: Conditional coloring for scores (e.g., Green for 7-10, Orange for 4-7, Red for <4).
- **Responsive Animations**: Elements mount and unmount gracefully leveraging `framer-motion`.

## (For the PPT Generator AI)
**Instructions to generate PPT:** 
1. Use the "Executive Summary" for the Intro slide.
2. Create an "Architecture Overview" slide from Section 1.
3. Create a slide for "Database Architecture" (Section 2).
4. Dedicate 2 slides to the "AI Brain" (Section 3).
5. Explain the "User Journey" in a step-by-step flowchart slide (Section 4).
6. Highlight the premium design and modern tooling on a final "Features & UX" slide.
