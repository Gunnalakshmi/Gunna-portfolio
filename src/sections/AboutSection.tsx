import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Lightbulb, Zap, Layers, Terminal, CheckCircle } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6 text-accent-cyan" />,
  Lightbulb: <Lightbulb className="w-6 h-6 text-accent-amber" />,
  Zap: <Zap className="w-6 h-6 text-accent-purple" />,
  Layers: <Layers className="w-6 h-6 text-accent-emerald" />,
};

const stats = [
  { label: 'Engineering Experience', value: '5+ YRS' },
  { label: 'Production Products Built', value: '20+' },
  { label: 'System Uptime Target', value: '99.9%' },
  { label: 'Innovation Passions', value: '∞' },
];

export const AboutSection: React.FC = () => {
  const profile = PORTFOLIO_DATA.profile;

  return (
    <section id="about" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="01 // ABOUT THE ENGINEER"
          title="ENGINEERING MINDSET & INNOVATION ARCHITECTURE"
          subtitle="Bridging core computer science rigor with creative visual design to engineer resilient digital products."
        />

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Storytelling Narrative Box (Left 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-surface-glass border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 text-slate-800 opacity-20 pointer-events-none">
              <Terminal className="w-32 h-32" />
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans z-10">
              <div className="flex items-center gap-2 font-mono text-accent-cyan text-xs uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                SYSTEM PHILOSOPHY & BACKGROUND
              </div>
              {profile.aboutBio.map((paragraph, index) => (
                <p key={index} className="text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Live Stats Row */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 z-10">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-3 rounded-xl bg-surface-dark/50 border border-white/5">
                  <div className="text-xl sm:text-2xl font-display font-bold text-accent-cyan">{stat.value}</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-1 uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy Pillars Cards (Right 5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {profile.philosophyPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-surface-light/40 border border-white/10 hover:border-accent-cyan/40 transition-all hover:bg-surface-light/70 group flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-surface-dark border border-white/10 group-hover:border-accent-cyan/40 transition-colors shrink-0">
                  {iconMap[pillar.icon] || <Cpu className="w-6 h-6 text-accent-cyan" />}
                </div>
                <div>
                  <h3 className="text-base font-display font-semibold text-white group-hover:text-accent-cyan transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-normal font-sans">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
