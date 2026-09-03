import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, Server, Brain, Sparkles, Cloud, Database, Wrench, Search, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useAudioEffects } from '../hooks/useAudioEffects';
import { SkillProgressCircle } from '../components/ui/SkillProgressCircle';

const categoryIcons: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-4 h-4" />,
  Layout: <Layout className="w-4 h-4" />,
  Server: <Server className="w-4 h-4" />,
  Brain: <Brain className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
  Cloud: <Cloud className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  Wrench: <Wrench className="w-4 h-4" />,
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
    <section id="skills" className="py-20 sm:py-28 relative z-10 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="02 // TECHNICAL MATRIX & NETWORK"
          title="INTERACTIVE TECHNICAL SKILLS MATRIX"
          subtitle="AI/ML is my engineering foundation, with strong interests in frontend development, web experiences, and creative technology."
        />

        {/* Search & Category Filter Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => {
                playClick();
                setSelectedCategory('all');
              }}
              onMouseEnter={playHover}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-accent-cyan text-background font-bold shadow-[0_0_15px_rgba(0,243,255,0.4)]'
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
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all flex items-center gap-1.5 ${
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
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-surface-dark border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-accent-cyan/50 transition-colors"
            />
          </div>
        </div>

        {/* 8 Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredCategories.map((cat) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className={`bg-surface-glass border rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between shadow-xl transition-all ${
                  cat.id === 'ai-ml'
                    ? 'border-accent-purple/50 shadow-[0_0_25px_rgba(168,85,247,0.15)]'
                    : 'border-white/10 hover:border-accent-cyan/30'
                }`}
              >
                <div>
                  {/* Domain Card Header */}
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl border ${
                          cat.id === 'ai-ml'
                            ? 'bg-accent-purple/20 text-accent-purple border-accent-purple/40 shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                            : 'bg-surface-light text-accent-cyan border-white/10'
                        }`}
                      >
                        {categoryIcons[cat.icon]}
                      </div>
                      <div>
                        <h3 className="text-base font-display font-bold text-white tracking-wide">
                          {cat.name}
                        </h3>
                        {cat.id === 'ai-ml' && (
                          <span className="text-[9px] font-mono text-accent-purple uppercase tracking-wider block font-bold">
                            ★ CORE ENGINEERING FOUNDATION
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-surface-light border border-white/10 text-slate-400">
                      {cat.skills.length} ITEMS
                    </span>
                  </div>

                  {/* Compact Grid of Small Circular Progress Indicators */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
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
              className="mt-8 p-6 rounded-2xl bg-surface-dark border border-accent-cyan/40 shadow-[0_0_30px_rgba(0,243,255,0.15)] flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>INSPECTING TECHNOLOGY // {activeSkill.category.toUpperCase()}</span>
                </div>
                <h4 className="text-xl font-display font-bold text-white">{activeSkill.name}</h4>
                <p className="text-sm text-slate-300 font-sans max-w-2xl">{activeSkill.description}</p>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="text-center px-5 py-2.5 rounded-xl bg-surface-light border border-white/10">
                  <div className="text-2xl font-display font-bold text-accent-cyan">{activeSkill.level}%</div>
                  <div className="text-[10px] font-mono text-slate-400">PROFICIENCY</div>
                </div>
                <button
                  onClick={() => setActiveSkill(null)}
                  className="px-4 py-2.5 rounded-xl bg-surface-light text-slate-300 text-xs font-mono hover:text-white border border-white/10"
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
