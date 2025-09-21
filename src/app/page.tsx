import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about";
import { ExperienceSection } from "@/components/experience";
import { EducationSection } from "@/components/education";
import { SkillsSection } from "@/components/skills";
import { ProjectsSection } from "@/components/projects";
import { CertificatesSection } from "@/components/certificates";
import { ContactSection } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(76,128,102,0.18),transparent_60%)]" />
        <div className="absolute left-1/2 top-[18%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#4c8066]/18 blur-3xl" />
        <div className="absolute right-[5%] bottom-[-18%] h-[420px] w-[420px] rounded-full bg-[#325344]/18 blur-3xl" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
