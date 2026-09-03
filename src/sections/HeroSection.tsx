import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Sparkles, Terminal, Mail, FolderGit2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useAudioEffects } from '../hooks/useAudioEffects';

export const HeroSection: React.FC = () => {
  const { playClick, playHover } = useAudioEffects();
  const profile = PORTFOLIO_DATA.profile;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-accent-violet/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Live Availability Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-glass border border-accent-cyan/30 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,243,255,0.15)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-cyan"></span>
          </span>
          <span className="text-xs font-mono tracking-widest text-slate-200 uppercase">
            {profile.title}
          </span>
        </motion.div>

        {/* Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[1.1]"
        >
          {profile.heroHeadline.split(' ').map((word, i) => (
            <span key={i} className={word === 'REALITY.' || word === 'IDEAS' ? 'text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-blue-400 to-accent-purple inline-block' : 'inline-block mr-3'}>
              {word}{' '}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle / Mindset */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 sm:mt-8 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-sans leading-relaxed"
        >
          {profile.heroSubtext}
        </motion.p>

        {/* Primary Interactive CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#projects"
            onClick={playClick}
            onMouseEnter={playHover}
            className="px-6 py-3.5 rounded-xl bg-accent-cyan text-background font-mono font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(0,243,255,0.4)] hover:shadow-[0_0_35px_rgba(0,243,255,0.6)] hover:scale-105 flex items-center gap-2"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>View Projects</span>
          </a>

          <a
            href="#lab"
            onClick={playClick}
            onMouseEnter={playHover}
            className="px-6 py-3.5 rounded-xl bg-surface-glass border border-accent-purple/50 text-slate-200 font-mono font-semibold text-sm tracking-wider uppercase transition-all hover:bg-accent-purple/20 hover:border-accent-purple hover:text-white flex items-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          >
            <Sparkles className="w-4 h-4 text-accent-purple" />
            <span>Explore Innovation Lab</span>
          </a>

          <a
            href="#contact"
            onClick={playClick}
            onMouseEnter={playHover}
            className="px-6 py-3.5 rounded-xl bg-surface-light/40 border border-white/10 text-slate-300 font-mono font-medium text-sm tracking-wider uppercase transition-all hover:bg-white/10 hover:text-white flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Scroll Prompt Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-2 text-slate-500 font-mono text-xs"
        >
          <span className="tracking-widest uppercase text-[10px]">SCROLL TO EXPLORE SYSTEM</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="p-2 rounded-full border border-white/10 bg-surface-light/30"
          >
            <ArrowDown className="w-4 h-4 text-accent-cyan" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
