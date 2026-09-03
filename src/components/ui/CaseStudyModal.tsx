import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Layers, Cpu, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../../data/portfolioData';
import { useAudioEffects } from '../../hooks/useAudioEffects';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

type TabType = 'problem' | 'research' | 'idea' | 'architecture' | 'implementation' | 'innovation' | 'results';

const tabs: { id: TabType; label: string }[] = [
  { id: 'problem', label: '01. Problem' },
  { id: 'research', label: '02. Research' },
  { id: 'idea', label: '03. Idea' },
  { id: 'architecture', label: '04. Architecture' },
  { id: 'implementation', label: '05. Implementation' },
  { id: 'innovation', label: '06. Innovation' },
  { id: 'results', label: '07. Results' },
];

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const { playClick, playHover } = useAudioEffects();
  const [activeTab, setActiveTab] = useState<TabType>('problem');

  if (!project || !project.caseStudy) return null;

  const cs = project.caseStudy;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playClick();
            onClose();
          }}
          className="fixed inset-0 bg-background/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-surface-dark border border-accent-cyan/30 rounded-2xl shadow-[0_0_50px_rgba(0,243,255,0.15)] overflow-hidden z-10 my-auto"
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-surface/80">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono uppercase">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white truncate max-w-md">
                {project.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="p-2 rounded-lg bg-surface-light border border-white/10 text-slate-300 hover:text-accent-cyan transition-colors"
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
                  className="p-2 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/20 transition-colors"
                  aria-label="Live Demo Link"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <button
                onClick={() => {
                  playClick();
                  onClose();
                }}
                onMouseEnter={playHover}
                className="p-2 rounded-lg bg-surface-light border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-1 px-6 py-3 border-b border-white/10 bg-surface-light/30 overflow-x-auto scrollbar-none">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    playClick();
                    setActiveTab(tab.id);
                  }}
                  onMouseEnter={playHover}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/40 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content Display Area */}
          <div className="p-6 sm:p-8 min-h-[380px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {activeTab === 'problem' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-accent-cyan font-mono text-sm">
                      <Layers className="w-4 h-4" />
                      <span>THE CORE PROBLEM & CHALLENGE</span>
                    </div>
                    <p className="text-slate-200 text-lg leading-relaxed">{cs.problem}</p>
                    <div className="p-4 rounded-xl bg-surface-light/40 border border-white/10 text-slate-400 text-sm font-mono">
                      <strong className="text-white block mb-1">Impact of Problem:</strong>
                      Affected core user retention, system bandwidth efficiency, and real-time computation scalability.
                    </div>
                  </div>
                )}

                {activeTab === 'research' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-accent-purple font-mono text-sm">
                      <Cpu className="w-4 h-4" />
                      <span>RESEARCH & ARCHITECTURAL DISCOVERY</span>
                    </div>
                    <p className="text-slate-200 text-lg leading-relaxed">{cs.research}</p>
                  </div>
                )}

                {activeTab === 'idea' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-accent-emerald font-mono text-sm">
                      <Zap className="w-4 h-4" />
                      <span>THE CORE CONCEPTUAL SOLUTION</span>
                    </div>
                    <p className="text-slate-200 text-lg leading-relaxed">{cs.idea}</p>
                  </div>
                )}

                {activeTab === 'architecture' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-accent-cyan font-mono text-sm">
                      <Layers className="w-4 h-4" />
                      <span>SYSTEM ARCHITECTURE DIAGRAM</span>
                    </div>
                    <p className="text-slate-200 text-base leading-relaxed">{cs.architecture}</p>

                    {/* Interactive Architecture Flow Preview */}
                    <div className="mt-4 p-5 rounded-xl bg-surface-dark border border-accent-cyan/20 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-surface-light border border-white/10 text-accent-cyan w-full text-center">
                        UI / Client Layer (R3F/React)
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 hidden md:block" />
                      <div className="p-3 rounded-lg bg-surface-light border border-white/10 text-accent-purple w-full text-center">
                        API Gateway & Router
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 hidden md:block" />
                      <div className="p-3 rounded-lg bg-surface-light border border-white/10 text-accent-emerald w-full text-center">
                        Microservices / Database Layer
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'implementation' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-amber-400 font-mono text-sm">
                      <Cpu className="w-4 h-4" />
                      <span>TECHNICAL IMPLEMENTATION DETAILS</span>
                    </div>
                    <p className="text-slate-200 text-lg leading-relaxed">{cs.implementation}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-md bg-surface-light border border-white/10 text-slate-300 text-xs font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'innovation' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-accent-cyan font-mono text-sm">
                      <Zap className="w-4 h-4" />
                      <span>KEY TECHNICAL INNOVATION</span>
                    </div>
                    <p className="text-slate-200 text-lg leading-relaxed">{cs.innovation}</p>
                  </div>
                )}

                {activeTab === 'results' && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-accent-emerald font-mono text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>VERIFIED RESULTS & MEASURABLE METRICS</span>
                    </div>

                    {/* Key Metrics Grid */}
                    {cs.metrics && cs.metrics.length > 0 && (
                      <div className="grid grid-cols-3 gap-4">
                        {cs.metrics.map((m, idx) => (
                          <div key={idx} className="p-4 rounded-xl bg-surface-light/50 border border-accent-emerald/30 text-center">
                            <div className="text-2xl sm:text-3xl font-display font-bold text-accent-emerald">{m.value}</div>
                            <div className="text-xs font-mono text-slate-400 mt-1">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <ul className="space-y-2">
                      {cs.results.map((res, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-200 text-sm font-sans">
                          <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Footer Action */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <div className="text-xs font-mono text-slate-400">
                Phase {tabs.findIndex((t) => t.id === activeTab) + 1} of 7
              </div>
              <div className="flex items-center gap-3">
                {activeTab !== 'results' ? (
                  <button
                    onClick={() => {
                      playClick();
                      const currentIndex = tabs.findIndex((t) => t.id === activeTab);
                      if (currentIndex < tabs.length - 1) {
                        setActiveTab(tabs[currentIndex + 1].id);
                      }
                    }}
                    onMouseEnter={playHover}
                    className="px-4 py-2 rounded-lg bg-accent-cyan/10 border border-accent-cyan/40 text-accent-cyan hover:bg-accent-cyan/20 transition-all text-xs font-mono flex items-center gap-1.5"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      playClick();
                      onClose();
                    }}
                    onMouseEnter={playHover}
                    className="px-4 py-2 rounded-lg bg-surface-light border border-white/20 text-white hover:bg-white/10 transition-all text-xs font-mono"
                  >
                    Close Presentation
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
