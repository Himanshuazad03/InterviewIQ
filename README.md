# 🧠 InterviewIQ (AI Interview Assistant)

InterviewIQ is an advanced AI-powered mock interview platform designated to help job seekers practice, improve, and ace their interviews. It features real-time dynamic questioning tailored to a specific job role, experience level, and topic mix, coupled with detailed performance analytics, actionable feedback, and a premium SaaS-like user experience.

---

## ✨ Key Features

- **Tailored Mock Interviews**: Generate highly relevant interview questions based on Job Role, Selected Topics, Difficulty, and Experience Level.
- **Interactive Voice/Text Mode**: Practice answering questions via real-time speech-to-text integration or type your answers.
- **AI-Powered Feedback**: Get immediate post-interview analysis, including an overall score, strengths, areas for improvement, and an ideal sample answer.
- **Comprehensive Analytics Dashboard**: Track your performance trend over multiple attempts with beautiful charts and insights. 
- **Attempt History**: Re-take interviews to improve your score and track your progress over time.
- **Modern UI/UX**: Premium aesthetic featuring dark mode, animations, glassmorphism, responsive design, and smooth user interactions.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Actions)
- **Frontend Core**: [React 19](https://react.dev/), TypeScript
- **Styling & UI**: [Tailwind CSS 4](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/) (Radix)
- **Authentication**: [Clerk](https://clerk.com/)
- **Database Architecture**: PostgreSQL + [Prisma ORM](https://www.prisma.io/)
- **AI Engine**: Google Generative AI (Gemini) + Vercel AI SDK
- **Data Visualization**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📂 Project Structure

```text
Ai Interview/
├── .env                 # Environment variables (DB connection, API keys, Clerk config)
├── prisma/
│   └── schema.prisma    # Database schema for Users, Interviews, Questions, and Attempts
├── public/              # Static assets and images
├── src/
│   ├── actions/         # Next.js Server Actions (Database queries & mutation logic)
│   ├── app/             # Application Router Pages & Layouts
│   │   ├── (auth)/      # Clerk authentication routes (Sign In / Sign Up)
│   │   ├── dashboard/   # Authenticated user dashboard & analytics
│   │   └── api/         # Next.js API Routes (if applicable)
│   ├── components/      # Reusable React UI Components
│   │   ├── dashboard/   # Dashboard structure, Sidebars, StatCards
│   │   ├── interviewDash/# Core interview creation and active session flows
│   │   ├── interview-analytics/ # Recharts components, progress tracking
│   │   ├── interview-feedback/  # Post-interview feedback cards
│   │   ├── landing/     # Landing page sections, animations (Framer Motion)
│   │   └── ui/          # Low-level Shadcn UI primitives (Buttons, Inputs, Dialogs)
│   ├── lib/             # Shared utilities (Prisma client singleton, schemas)
│   └── services/        # Third-party integrations (e.g., AI prompt generation/fetching)
├── package.json         # Project dependencies and scripts
└── next.config.mjs      # Next.js configuration
```

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### 1. Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** or **pnpm**
- A **PostgreSQL** Database URL (Supabase, Neon, or local install)
- A **Clerk** account for Authentication
- A **Google Gemini API Key**

### 2. Clone the Repository
```bash
git clone https://github.com/Himanshuazad03/InterviewIQ.git
cd "Ai Interview"
```

### 3. Install Dependencies
```bash
npm install
# or
yarn install
```

### 4. Set Up Environment Variables
Create a `.env` file in the root directory and add the following keys:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# PostgreSQL Connection Strings
DATABASE_URL="your_postgresql_database_url"
DIRECT_URL="your_postgresql_direct_url" # (If using Supabase/Neon)

# AI Service
GEMINI_API_KEY=your_google_gemini_api_key
```

### 5. Setup Database
Run Prisma migrations to create the required tables in your database.
```bash
npx prisma generate
npx prisma db push
```

### 6. Run the Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 💡 How It Works
1. **Sign Up/In**: User authenticates via Clerk.
2. **Create Interview**: The user inputs details about the role they are targeting. AI generates an ordered list of questions.
3. **Take Interview**: The user answers the questions using voice (browser speech-to-text) or typing.
4. **Get Feedback**: Answers are evaluated against the ideal rubric. The AI engine generates an overall score, highlights missing keywords, and provides actionable improvements.
5. **Analyze**: Performance charts update automatically to show progression across all past attempts.

---

**Built by Himanshu Azad** | Elevating your interview prep through AI.
