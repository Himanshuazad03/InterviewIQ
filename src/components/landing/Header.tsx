import { Button } from "@/components/ui/button";
import { BrainCircuit } from "lucide-react";
import Link from "next/link";
import {
  UserButton,
  SignInButton,
  SignedIn,
  SignedOut,
  SignUpButton,
} from "@clerk/nextjs";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <div className="absolute inset-0 bg-[#050507]/40 backdrop-blur-xl" />

      <div className="relative container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-black-600 to-gray-600 flex items-center justify-center">
            <BrainCircuit className="h-5 w-5 text-white" />
          </div>

          <span className="text-2xl font-heading font-semibold tracking-tight text-[#E5E7EB]">
            Interview
            <span className="bg-gradient-to-r from-[#E5E7EB] via-[#CBD5F5] to-[#9CA3AF] bg-clip-text text-transparent">
              IQ
            </span>
          </span>
        </Link>

        {/* Navigation */}
        <SignedIn>
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-400">
            {["Features", "How It Works", "Testimonials", "Pricing"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-gray-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </Link>
              ),
            )}
          </nav>
        </SignedIn>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button className="rounded bg-[#111113] border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-200 hover:bg-[#1a1a1d] transition cursor-pointer">
                Login
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>

      {/* bottom subtle highlight */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
    </header>
  );
}
