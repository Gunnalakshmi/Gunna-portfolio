import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, FlaskConical, Play, RefreshCw, Cpu, ExternalLink, Github } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useAudioEffects } from '../hooks/useAudioEffects';

// Live Interactive Canvas Experiment: Quantum Particle Matrix Sandbox
const InteractiveParticleMatrix: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [speed, setSpeed] = useState<number>(1);
  const [particleCount, setParticleCount] = useState<number>(70);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 320);

    const particles: { x: number; y: number; vx: number; vy: number; radius: number; color: string }[] = [];
    const colors = ['#00f3ff', '#7928ca', '#a855f7', '#38bdf8'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed * 1.5,
        vy: (Math.random() - 0.5) * speed * 1.5,
        radius: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.fillStyle = 'rgba(5, 5, 12, 0.25)';
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx * speed;
        p.y += p.vy * speed;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Attract toward cursor
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 140) {
          p.x += (dx / dist) * 0.8;
          p.y += (dy / dist) * 0.8;
        }

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [speed, particleCount]);

  return (
    <div className="space-y-4">
      <div className="relative rounded-xl border border-accent-cyan/30 overflow-hidden bg-surface-dark">
        <canvas ref={canvasRef} className="w-full h-72 block cursor-crosshair" />
        <div className="absolute top-3 right-3 px-3 py-1 rounded bg-surface-light/80 border border-white/10 text-[10px] font-mono text-accent-cyan">
          LIVE INTERACTIVE MATRIX
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-surface-light/30 border border-white/10 text-xs font-mono">
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-slate-300">
            <span>SPEED:</span>
            <input
              type="range"
              min="0.2"
              max="3"
              step="0.2"
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              className="accent-accent-cyan"
            />
            <span className="text-accent-cyan font-bold">{speed}x</span>
          </label>

          <label className="flex items-center gap-2 text-slate-300">
            <span>DENSITY:</span>
            <input
              type="range"
              min="30"
              max="120"
              step="10"
              value={particleCount}
              onChange={(e) => setParticleCount(parseInt(e.target.value))}
              className="accent-accent-purple"
            />
            <span className="text-accent-purple font-bold">{particleCount}</span>
          </label>
        </div>

        <span className="text-slate-400">Move cursor over canvas to exert quantum force field</span>
      </div>
    </div>
  );
};

export const InnovationLabSection: React.FC = () => {
  const { playClick, playHover } = useAudioEffects();
  const experiments = PORTFOLIO_DATA.experiments;
  const [activeExpId, setActiveExpId] = useState<string>(experiments[0].id);

  const currentExp = experiments.find((e) => e.id === activeExpId) || experiments[0];

  return (
    <section id="lab" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="05 // R&D EXPERIMENTAL SANDBOX"
          title="INNOVATION LAB & FUTURE CONCEPTS"
          subtitle="A dedicated digital laboratory showcasing experimental prototypes, shader algorithms, and AI research concepts."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Experiments Selector List (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-dark border border-white/10 text-xs font-mono text-slate-400">
              <FlaskConical className="w-4 h-4 text-accent-cyan" />
              <span>ACTIVE RESEARCH PROTOTYPES</span>
            </div>

            {experiments.map((exp) => {
              const isActive = exp.id === activeExpId;
              return (
                <div
                  key={exp.id}
                  onClick={() => {
                    playClick();
                    setActiveExpId(exp.id);
                  }}
                  onMouseEnter={playHover}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-surface-glass border-accent-cyan text-white shadow-[0_0_20px_rgba(0,243,255,0.15)]'
                      : 'bg-surface-light/30 border-white/10 text-slate-400 hover:text-slate-200 hover:bg-surface-light/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan uppercase">
                      {exp.status}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">{exp.category}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2 font-sans">{exp.description}</p>
                </div>
              );
            })}
          </div>

          {/* Right Live Interactive Prototype Display (8 Cols) */}
          <motion.div
            key={currentExp.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-8 bg-surface-glass border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-accent-purple tracking-widest uppercase">
                  EXPERIMENT // {currentExp.category}
                </span>
                <h3 className="text-2xl font-display font-bold text-white mt-1">{currentExp.title}</h3>
              </div>

              <div className="flex items-center gap-2">
                {currentExp.githubUrl && (
                  <a
                    href={currentExp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    onMouseEnter={playHover}
                    className="p-2 rounded-lg bg-surface-light border border-white/10 text-slate-300 hover:text-accent-cyan transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-sans">{currentExp.description}</p>

            {/* Render Interactive Particle Canvas */}
            <InteractiveParticleMatrix />

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {currentExp.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-md bg-surface-dark border border-white/10 text-slate-300 text-xs font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
