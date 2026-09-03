import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, BookmarkCheck, ExternalLink, GraduationCap } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useAudioEffects } from '../hooks/useAudioEffects';

export const AchievementsSection: React.FC = () => {
  const { playClick, playHover } = useAudioEffects();
  const achievements = PORTFOLIO_DATA.achievements;
  const education = PORTFOLIO_DATA.education;

  return (
    <section id="achievements" className="py-24 sm:py-32 relative z-10 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="06 // RECOGNITION & MILESTONES"
          title="HONORS, CERTIFICATIONS & ACADEMICS"
          subtitle="Key milestones, competitive recognitions, and continuous learning achievements along the engineering journey."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Achievements Cards (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-mono text-accent-cyan tracking-widest uppercase flex items-center gap-2 mb-4">
              <Trophy className="w-4 h-4 text-accent-amber" />
              <span>HONORS & RECOGNITION</span>
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {achievements.map((ach, idx) => (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-surface-glass border border-white/10 hover:border-accent-cyan/40 transition-all backdrop-blur-md group flex items-start gap-4 shadow-lg"
                >
                  <div className="p-3 rounded-xl bg-surface-light border border-white/10 text-accent-amber group-hover:scale-110 transition-transform shrink-0">
                    <Award className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30">
                        {ach.category} // {ach.year}
                      </span>
                      {ach.credentialUrl && (
                        <a
                          href={ach.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={playClick}
                          onMouseEnter={playHover}
                          className="text-slate-400 hover:text-accent-cyan transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <h4 className="text-lg font-display font-bold text-white mt-2 group-hover:text-accent-cyan transition-colors">
                      {ach.title}
                    </h4>

                    <p className="text-xs font-mono text-slate-400 mt-0.5">{ach.organization}</p>
                    <p className="text-xs sm:text-sm text-slate-300 font-sans mt-2">{ach.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Academic Foundation (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-sm font-mono text-accent-purple tracking-widest uppercase flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4 text-accent-purple" />
              <span>ACADEMIC FOUNDATION</span>
            </h3>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-6 rounded-2xl bg-surface-glass border border-white/10 backdrop-blur-md space-y-3"
                >
                  <span className="text-xs font-mono text-slate-400">{edu.duration}</span>
                  <h4 className="text-xl font-display font-bold text-white">{edu.degree}</h4>
                  <p className="text-xs font-mono text-accent-cyan">{edu.institution}</p>

                  {edu.details && (
                    <ul className="space-y-1.5 pt-2 border-t border-white/10">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="text-xs text-slate-300 font-sans flex items-start gap-2">
                          <BookmarkCheck className="w-3.5 h-3.5 text-accent-purple shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
