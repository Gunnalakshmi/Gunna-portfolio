import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, Server, Brain, Sparkles, Cloud, Database, Wrench, Search, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useAudioEffects } from '../hooks/useAudioEffects';
import { SkillProgressCircle } from '../components/ui/SkillProgressCircle';

const categoryIcons: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-3.5 h-3.5" />,
  Layout: <Layout className="w-3.5 h-3.5" />,
  Server: <Server className="w-3.5 h-3.5" />,
  Brain: <Brain className="w-3.5 h-3.5" />,
  Sparkles: <Sparkles className="w-3.5 h-3.5" />,
  Cloud: <Cloud className="w-3.5 h-3.5" />,
  Database: <Database className="w-3.5 h-3.5" />,
  Wrench: <Wrench className="w-3.5 h-3.5" />,
};

export const SkillsSection: React.FC = () => {
  const { playClick, playHover } = useAudioEffects();
  const categories = PORTFOLIO_DATA.skills;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSkill, setActiveSkill] = useState<{
    name: string;
    level: number;
    levelTag?: string;
    description: string;
    category: string;
  } | null>(null);

  // Filter skills based on selected category & search query
  const filteredCategories = categories
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter(
        (s) =>
          (selectedCategory === 'all' || cat.id === selectedCategory) &&
          (s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.description.toLowerCase().includes(searchQuery.toLowerCase()))
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-16 sm:py-24 relative z-10 bg-surface/30">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="02 // TECHNICAL MATRIX & NETWORK"
          title="TECHNICAL SKILLS MATRIX"
          subtitle="AI/ML is my engineering foundation, with strong interests in frontend development, web experiences, and creative technology."
        />

        {/* Search & Category Filter Bar */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => {
                playClick();
                setSelectedCategory('all');
              }}
              onMouseEnter={playHover}
              className={`px-3 py-1 rounded-lg text-[11px] font-mono whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-accent-cyan text-background font-bold shadow-[0_0_12px_rgba(0,243,255,0.4)]'
                  : 'bg-surface-light/40 border border-white/10 text-slate-300 hover:text-white hover:bg-surface-light'
              }`}
            >
              ALL DOMAINS
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  playClick();
                  setSelectedCategory(cat.id);
                }}
                onMouseEnter={playHover}
                className={`px-3 py-1 rounded-lg text-[11px] font-mono whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-accent-cyan/20 border border-accent-cyan text-accent-cyan font-bold'
                    : 'bg-surface-light/40 border border-white/10 text-slate-400 hover:text-slate-200 hover:bg-surface-light'
                }`}
              >
                {categoryIcons[cat.icon]}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Skill Live Search Box */}
          <div className="relative w-full md:w-56">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-surface-dark border border-white/10 text-[11px] font-mono text-white placeholder-slate-500 focus:outline-none focus:border-accent-cyan/50 transition-colors"
            />
          </div>
        </div>

        {/* 8 Domains in 2 Rows of 4 Cards on Desktop (grid-cols-4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredCategories.map((cat) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className={`bg-surface-glass border rounded-xl p-3.5 sm:p-4 backdrop-blur-md flex flex-col justify-between shadow-lg transition-all ${
                  cat.id === 'ai-ml'
                    ? 'border-accent-purple/50 shadow-[0_0_20px_rgba(168,85,247,0.15)]'
                    : 'border-white/10 hover:border-accent-cyan/30'
                }`}
              >
                <div>
                  {/* Minimal Domain Card Header */}
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div
                        className={`p-1.5 rounded-lg border ${
                          cat.id === 'ai-ml'
                            ? 'bg-accent-purple/20 text-accent-purple border-accent-purple/40'
                            : 'bg-surface-light text-accent-cyan border-white/10'
                        }`}
                      >
                        {categoryIcons[cat.icon]}
                      </div>
                      <div>
                        <h3 className="text-xs font-display font-bold text-white tracking-wide uppercase">
                          {cat.name}
                        </h3>
                        {cat.id === 'ai-ml' && (
                          <span className="text-[8px] font-mono text-accent-purple uppercase tracking-tighter block font-bold">
                            ★ CORE FOUNDATION
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-surface-light border border-white/10 text-slate-400">
                      {cat.skills.length}
                    </span>
                  </div>

                  {/* Compact Grid of Small Circular Progress Rings (2 or 3 per row) */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {cat.skills.map((skill) => (
                      <SkillProgressCircle
                        key={skill.name}
                        name={skill.name}
                        percentage={skill.level}
                        levelTag={skill.levelTag}
                        onClick={() => {
                          playClick();
                          setActiveSkill({ ...skill, category: cat.name });
                        }}
                        onMouseEnter={playHover}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Skill Node Detail Drawer Inspector */}
        <AnimatePresence>
          {activeSkill && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="mt-6 p-5 rounded-xl bg-surface-dark border border-accent-cyan/40 shadow-[0_0_25px_rgba(0,243,255,0.15)] flex flex-col md:flex-row items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[11px] font-mono text-accent-cyan">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>INSPECTING TECHNOLOGY // {activeSkill.category.toUpperCase()}</span>
                </div>
                <h4 className="text-lg font-display font-bold text-white">{activeSkill.name}</h4>
                <p className="text-xs text-slate-300 font-sans max-w-2xl">{activeSkill.description}</p>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="text-center px-4 py-2 rounded-xl bg-surface-light border border-white/10">
                  <div className="text-xl font-display font-bold text-accent-cyan">{activeSkill.level}%</div>
                  <div className="text-[9px] font-mono text-slate-400">PROFICIENCY</div>
                </div>
                <button
                  onClick={() => setActiveSkill(null)}
                  className="px-3.5 py-2 rounded-lg bg-surface-light text-slate-300 text-[11px] font-mono hover:text-white border border-white/10"
                >
                  Close Inspector
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
