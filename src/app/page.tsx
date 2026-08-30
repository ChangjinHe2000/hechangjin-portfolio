import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { LatestNotes } from "@/components/sections/latest-notes";
import { Navbar } from "@/components/sections/navbar";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { TechStack } from "@/components/sections/tech-stack";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Experience />
        <Research />
        <LatestNotes />
      </main>
      <Footer />
    </>
  );
}
