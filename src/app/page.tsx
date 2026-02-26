import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import HomeProjects from "@/components/sections/HomeProjects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Bipin Paudel | Full-Stack Developer & ML Engineer — Nepal",
  description:
    "Hi, I'm Bipin Paudel — a Computer Science student and Full-Stack Developer from Nepal specializing in Python, Django, React, Next.js, FastAPI, and Machine Learning. Explore my portfolio, projects, and experience.",
  alternates: {
    canonical: "https://paudelbipin.com.np",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      <Hero />
      <About />
      <Skills />
      <HomeProjects />
      <Experience />
      <Contact />
    </div>
  );
}
