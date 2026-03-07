import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { Performance } from "@/components/Performance";
import { PerformanceAnalyticsSection } from "@/components/PerformanceAnalyticsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { createUser } from "@/lib/CheckUser";

export default async function Home() {
  await createUser();
  return (
    <div className="min-h-screen flex flex-col pb-0">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <Performance />
        <PerformanceAnalyticsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
