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
  const radius = 20;
  const strokeWidth = 3.5;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Determine stroke color based on tag or default cyan/purple theme
  const getRingColor = () => {
    if (levelTag === 'Basics') return '#f59e0b'; // Amber
    if (levelTag === 'Learning') return '#c084fc'; // Purple
    if (levelTag === 'Core Focus') return '#a855f7'; // Violet
    return '#00f3ff'; // Accent Cyan
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-surface-dark/70 border border-white/10 hover:border-accent-cyan/40 hover:bg-surface-light/40 transition-all cursor-pointer group/circle relative"
    >
      {/* SVG Circular Progress Ring with Center Percentage */}
      <div className="relative w-14 h-14 flex items-center justify-center mb-2">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 52 52">
          {/* Background Inactive Track */}
          <circle
            cx="26"
            cy="26"
            r={radius}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Active Filled Progress Stroke */}
          <motion.circle
            cx="26"
            cy="26"
            r={radius}
            stroke={getRingColor()}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            strokeLinecap="round"
            fill="transparent"
            className="drop-shadow-[0_0_5px_rgba(0,243,255,0.3)]"
          />
        </svg>

        {/* Center Percentage Display */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[11px] font-mono font-bold text-white group-hover/circle:text-accent-cyan transition-colors">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Technology Name Directly Below Circle */}
      <span className="text-xs font-mono font-semibold text-slate-200 text-center line-clamp-1 max-w-full group-hover/circle:text-accent-cyan transition-colors">
        {name}
      </span>

      {/* Optional Level Tag Badge (Basics / Learning) */}
      {levelTag && (
        <span
          className={`mt-1.5 text-[8px] font-mono px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
            levelTag === 'Basics'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
              : levelTag === 'Learning'
              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
              : 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/40'
          }`}
        >
          {levelTag}
        </span>
      )}
    </motion.div>
  );
};
