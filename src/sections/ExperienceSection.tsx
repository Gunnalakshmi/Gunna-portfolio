import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const experiences = PORTFOLIO_DATA.experiences;

  return (
    <section id="experience" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="03 // CAREER CHRONICLE"
          title="ENGINEERING EXPERIENCE & TRACK RECORD"
          subtitle="A timeline of technical leadership, architectural breakthroughs, and high-impact software delivery."
        />

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-accent-cyan/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Glowing Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-background border-2 border-accent-cyan flex items-center justify-center group-hover:scale-125 transition-transform shadow-[0_0_12px_rgba(0,243,255,0.6)]">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
              </div>

              {/* Main Card Content */}
              <div className="bg-surface-glass border border-white/10 hover:border-accent-cyan/40 rounded-2xl p-6 sm:p-8 backdrop-blur-md transition-all shadow-xl space-y-6">
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-accent-cyan tracking-wider uppercase">
                      {exp.company}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5 bg-surface-light px-3 py-1 rounded-full border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-surface-light px-3 py-1 rounded-full border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-accent-purple" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                    CORE RESPONSIBILITIES:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm font-sans">
                        <ChevronRight className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements Highlights */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="p-4 rounded-xl bg-surface-light/40 border border-accent-emerald/30 space-y-2">
                    <h4 className="text-xs font-mono text-accent-emerald uppercase tracking-widest flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      ARCHITECTURAL ACHIEVEMENTS & IMPACT:
                    </h4>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="text-xs sm:text-sm text-slate-200 font-sans flex items-start gap-2">
                          <span className="text-accent-emerald text-base leading-none">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-surface-dark border border-white/10 text-slate-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
