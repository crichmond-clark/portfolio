import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { About } from "@/components/about";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getProjects } from "@/lib/content";

export default function Home() {
  const projects = getProjects();

  return (
    <>
      <div className="grain-overlay"></div>
      <div className="geometric-bg"></div>

      <NavBar />

      <Hero />
      <ProjectsSection projects={projects} />
      <About />

      <Footer />
    </>
  );
}