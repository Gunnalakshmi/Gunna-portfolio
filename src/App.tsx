import React, { useState } from 'react';
import { use3DQuality } from './hooks/use3DQuality';
import { CanvasContainer } from './components/3d/CanvasContainer';
import { Navbar } from './components/ui/Navbar';
import { CustomCursor } from './components/ui/CustomCursor';
import { CaseStudyModal } from './components/ui/CaseStudyModal';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { InnovationLabSection } from './sections/InnovationLabSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { ContactSection } from './sections/ContactSection';
import { PORTFOLIO_DATA, Project } from './data/portfolioData';

export function App() {
  const { quality, cycleQuality } = use3DQuality();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const profileName = PORTFOLIO_DATA.profile.name;

  return (
    <div className="relative bg-background text-slate-100 min-h-screen selection:bg-accent-cyan/30 selection:text-white">
      {/* Magnetic Custom Pointer Ring */}
      <CustomCursor />

      {/* Floating Glass Navigation Header */}
      <Navbar quality={quality} onCycleQuality={cycleQuality} name={profileName} />

      {/* R3F 3D Scene / 2D Matrix Canvas Container */}
      <CanvasContainer quality={quality} />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <InnovationLabSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Fullscreen Cinematic Case Study Presentation Modal */}
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
