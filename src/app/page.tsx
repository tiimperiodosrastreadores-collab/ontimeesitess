import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { CTA } from "@/components/CTA";
import { Differentials } from "@/components/Differentials";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Stats />
        <Benefits />
        <HowItWorks />
        <Differentials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
