import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, Server, Brain, Sparkles, Cloud, Database, Wrench, Search, CheckCircle2, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';
import { useAudioEffects } from '../hooks/useAudioEffects';

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
    <section id="skills" className="py-24 sm:py-32 relative z-10 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="02 // TECHNICAL MATRIX & NETWORK"
          title="INTERACTIVE SYSTEM CAPABILITIES & SKILLS"
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
              ALL SYSTEMS
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
              placeholder="Search skill node..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-surface-dark border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-accent-cyan/50 transition-colors"
            />
          </div>
        </div>

        {/* Skill Category Grid Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredCategories.map((cat) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`bg-surface-glass border rounded-2xl p-5 backdrop-blur-md flex flex-col justify-between shadow-lg group transition-all ${
                  cat.id === 'ai-ml' ? 'border-accent-purple/50 shadow-[0_0_20px_rgba(168,85,247,0.15)]' : 'border-white/10 hover:border-accent-cyan/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg border ${cat.id === 'ai-ml' ? 'bg-accent-purple/20 text-accent-purple border-accent-purple/40' : 'bg-surface-light text-accent-cyan border-white/10'}`}>
                        {categoryIcons[cat.icon]}
                      </div>
                      <div>
                        <h3 className="text-sm font-display font-bold text-white group-hover:text-accent-cyan transition-colors">
                          {cat.name}
                        </h3>
                        {cat.id === 'ai-ml' && (
                          <span className="text-[9px] font-mono text-accent-purple uppercase tracking-tight block">
                            CORE FOUNDATION
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-light text-slate-400">
                      {cat.skills.length} NODES
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 font-sans mb-4">{cat.description}</p>

                  {/* Skills Node Items */}
                  <div className="space-y-3">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        onClick={() => {
                          playClick();
                          setActiveSkill({ ...skill, category: cat.name });
                        }}
                        onMouseEnter={playHover}
                        className="p-2.5 rounded-xl bg-surface-light/30 border border-white/5 hover:border-accent-cyan/40 hover:bg-surface-light/60 transition-all cursor-pointer group/node"
                      >
                        <div className="flex items-center justify-between text-xs font-mono text-slate-200 group-hover/node:text-accent-cyan mb-1.5 gap-2">
                          <span className="font-semibold truncate">{skill.name}</span>
                          {skill.levelTag ? (
                            <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold uppercase tracking-wider shrink-0 ${
                              skill.levelTag === 'Basics'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                : skill.levelTag === 'Learning'
                                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                                : 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/40'
                            }`}>
                              {skill.levelTag}
                            </span>
                          ) : (
                            <span className="text-slate-400 text-[10px] shrink-0">{skill.level}%</span>
                          )}
                        </div>

                        {/* Progress Bar Indicator */}
                        <div className="w-full h-1.5 rounded-full bg-surface-dark overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className={`h-full rounded-full ${
                              skill.levelTag === 'Basics'
                                ? 'bg-amber-400'
                                : skill.levelTag === 'Learning'
                                ? 'bg-purple-400'
                                : 'bg-gradient-to-r from-accent-cyan to-accent-purple'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Skill Node Detail Drawer Modal */}
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
                  <span>INSPECTING NODE // {activeSkill.category.toUpperCase()}</span>
                </div>
                <h4 className="text-xl font-display font-bold text-white">{activeSkill.name}</h4>
                <p className="text-sm text-slate-300 font-sans max-w-2xl">{activeSkill.description}</p>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="text-center px-4 py-2 rounded-xl bg-surface-light border border-white/10">
                  <div className="text-2xl font-display font-bold text-accent-cyan">{activeSkill.level}%</div>
                  <div className="text-[10px] font-mono text-slate-400">PROFICIENCY</div>
                </div>
                <button
                  onClick={() => setActiveSkill(null)}
                  className="px-4 py-2 rounded-lg bg-surface-light text-slate-300 text-xs font-mono hover:text-white border border-white/10"
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
