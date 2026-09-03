import React from 'react';
import { motion } from 'framer-motion';

interface SkillProgressCircleProps {
  name: string;
  percentage: number;
  levelTag?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
}

export const SkillProgressCircle: React.FC<SkillProgressCircleProps> = ({
  name,
  percentage,
  levelTag,
  onClick,
  onMouseEnter,
}) => {
  const radius = 15;
  const strokeWidth = 2.8;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getRingColor = () => {
    if (levelTag === 'Basics') return '#f59e0b';
    if (levelTag === 'Learning') return '#c084fc';
    if (levelTag === 'Core Focus') return '#a855f7';
    return '#00f3ff';
  };

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.15 }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className="flex flex-col items-center justify-center p-2 rounded-xl bg-surface-dark/80 border border-white/10 hover:border-accent-cyan/40 hover:bg-surface-light/40 transition-all cursor-pointer group/circle"
    >
      {/* SVG Circular Progress Ring with Center Percentage */}
      <div className="relative w-10 h-10 flex items-center justify-center mb-1">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 38 38">
          {/* Background Inactive Track */}
          <circle
            cx="19"
            cy="19"
            r={radius}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Active Filled Progress Stroke */}
          <motion.circle
            cx="19"
            cy="19"
            r={radius}
            stroke={getRingColor()}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            strokeLinecap="round"
            fill="transparent"
            className="drop-shadow-[0_0_4px_rgba(0,243,255,0.3)]"
          />
        </svg>

        {/* Center Percentage Display */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[9px] font-mono font-bold text-white group-hover/circle:text-accent-cyan transition-colors">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Technology Name Directly Below Circle */}
      <span className="text-[10px] font-mono font-medium text-slate-300 text-center line-clamp-1 max-w-full group-hover/circle:text-accent-cyan transition-colors leading-tight">
        {name}
      </span>

      {/* Level Tag Badge */}
      {levelTag && (
        <span
          className={`mt-1 text-[7px] font-mono px-1 py-0.2 rounded font-bold uppercase tracking-tight leading-none ${
            levelTag === 'Basics'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              : levelTag === 'Learning'
              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
              : 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30'
          }`}
        >
          {levelTag}
        </span>
      )}
    </motion.div>
  );
};
