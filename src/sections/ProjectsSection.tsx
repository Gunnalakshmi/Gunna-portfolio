import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, ArrowUpRight, Sparkles, Code2, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { useAudioEffects } from '../hooks/useAudioEffects';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const { playClick, playHover } = useAudioEffects();
  const projects = PORTFOLIO_DATA.projects;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'AI / Systems', '3D / Creative'];

  const filteredProjects = projects.filter(
    (p) => selectedCategory === 'All' || p.category === selectedCategory
  );

  return (
    <section id="projects" className="py-24 sm:py-32 relative z-10 bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="04 // FEATURED PRODUCTS & ENGINEERING"
          title="FEATURED PROJECTS & CASE STUDIES"
          subtitle="Explore deep-dive technical implementations engineered for performance, scale, and high-fidelity user experiences."
        />

        {/* Category Filter Chips */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClick();
                setSelectedCategory(cat);
              }}
              onMouseEnter={playHover}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-accent-cyan text-background font-bold shadow-[0_0_20px_rgba(0,243,255,0.4)]'
                  : 'bg-surface-light/40 border border-white/10 text-slate-300 hover:text-white hover:bg-surface-light'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-surface-glass border border-white/10 hover:border-accent-cyan/50 rounded-2xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Glow Backdrop Highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-accent-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="space-y-6 z-10">
                  {/* Top Badge & Category */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-[11px] font-mono uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[10px] font-mono text-accent-purple bg-accent-purple/10 border border-accent-purple/30 px-2.5 py-0.5 rounded-full">
                        <Sparkles className="w-3 h-3" /> FEATURED
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">{project.tagline}</p>
                  </div>

                  {/* Problem & Solution Quick Highlights */}
                  <div className="space-y-3 p-4 rounded-xl bg-surface-dark/70 border border-white/5 font-sans text-xs">
                    <div>
                      <strong className="text-accent-cyan font-mono block mb-0.5">PROBLEM:</strong>
                      <p className="text-slate-300 line-clamp-2">{project.problem}</p>
                    </div>
                    <div className="pt-2 border-t border-white/5">
                      <strong className="text-accent-emerald font-mono block mb-0.5">SOLUTION:</strong>
                      <p className="text-slate-300 line-clamp-2">{project.solution}</p>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-surface-light border border-white/10 text-slate-300 text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2.5 py-1 rounded-md bg-surface-light text-slate-400 text-[11px] font-mono">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between z-10">
                  {/* Case Study Trigger Button */}
                  <button
                    onClick={() => {
                      playClick();
                      onSelectProject(project);
                    }}
                    onMouseEnter={playHover}
                    className="px-4 py-2 rounded-xl bg-accent-cyan/10 border border-accent-cyan/40 text-accent-cyan hover:bg-accent-cyan hover:text-background transition-all text-xs font-mono font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,243,255,0.15)]"
                  >
                    <span>CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playClick}
                        onMouseEnter={playHover}
                        className="p-2 rounded-lg bg-surface-light border border-white/10 text-slate-400 hover:text-white transition-colors"
                        aria-label="View Source Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playClick}
                        onMouseEnter={playHover}
                        className="p-2 rounded-lg bg-surface-light border border-white/10 text-slate-400 hover:text-accent-cyan transition-colors"
                        aria-label="Live Demo Link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
