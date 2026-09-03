import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 sm:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono tracking-widest uppercase mb-3 shadow-[0_0_15px_rgba(0,243,255,0.15)]`}>
        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
        {badge}
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white max-w-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-slate-400 text-sm sm:text-base max-w-2xl font-sans ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
