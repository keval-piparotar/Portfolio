import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import AiPlayground from "@/sections/AiPlayground";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";
import ScrollColorManager from "@/components/ScrollColorManager";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ScrollColorManager>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AiPlayground />
        <Experience />
        <Contact />
      </ScrollColorManager>
    </main>
  );
}
