import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Cpu, Menu, X, Terminal, ExternalLink } from 'lucide-react';
import { useAudioEffects } from '../../hooks/useAudioEffects';
import { QualityLevel } from '../../hooks/use3DQuality';

interface NavbarProps {
  quality: QualityLevel;
  onCycleQuality: () => void;
  name: string;
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Lab', href: '#lab' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ quality, onCycleQuality, name }) => {
  const { isMuted, toggleSound, playHover, playClick } = useAudioEffects();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section tracker
      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-3 bg-surface-glass backdrop-blur-md border-b border-white/5 shadow-2xl' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={playClick}
          onMouseEnter={playHover}
          className="flex items-center gap-2.5 group cursor-pointer text-white font-mono font-semibold tracking-wider text-sm sm:text-base"
        >
          <div className="w-8 h-8 rounded-lg bg-surface-light border border-accent-cyan/40 flex items-center justify-center text-accent-cyan group-hover:border-accent-cyan transition-colors shadow-[0_0_12px_rgba(0,243,255,0.2)]">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="group-hover:text-accent-cyan transition-colors truncate max-w-[160px] sm:max-w-none">
            {name === '[YOUR FULL NAME]' ? 'DEV // ARCHITECT' : name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-light/40 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={playClick}
                onMouseEnter={playHover}
                className={`relative px-3 py-1.5 text-xs font-mono tracking-wide rounded-full transition-colors ${
                  isActive ? 'text-accent-cyan font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-accent-cyan/10 border border-accent-cyan/40 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Utility Controls (Sound + 3D Quality Toggle) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound Synthesizer Toggle */}
          <button
            onClick={() => {
              playClick();
              toggleSound();
            }}
            onMouseEnter={playHover}
            aria-label={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
            className={`p-2 rounded-lg border transition-all text-xs font-mono flex items-center gap-1.5 ${
              isMuted
                ? 'bg-surface-dark border-white/10 text-slate-400 hover:text-white'
                : 'bg-accent-cyan/10 border-accent-cyan/40 text-accent-cyan shadow-[0_0_10px_rgba(0,243,255,0.2)]'
            }`}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span className="hidden sm:inline">{isMuted ? 'AUDIO OFF' : 'AUDIO ON'}</span>
          </button>

          {/* 3D Quality Cycle Toggle */}
          <button
            onClick={() => {
              playClick();
              onCycleQuality();
            }}
            onMouseEnter={playHover}
            aria-label="Toggle 3D Graphics Mode"
            className={`px-2.5 py-2 rounded-lg border transition-all text-xs font-mono flex items-center gap-1.5 ${
              quality === 'high'
                ? 'bg-accent-violet/20 border-accent-violet/50 text-accent-purple shadow-[0_0_12px_rgba(168,85,247,0.2)]'
                : quality === 'performance'
                ? 'bg-amber-500/10 border-amber-500/40 text-amber-400'
                : 'bg-surface-dark border-white/10 text-slate-400'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span className="hidden sm:inline">3D: {quality.toUpperCase()}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-lg bg-surface-light border border-white/10 text-slate-200"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface-dark/95 border-b border-white/10 backdrop-blur-xl px-4 pt-4 pb-6 mt-2"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-3 rounded-lg bg-surface-light/30 text-slate-200 hover:text-accent-cyan hover:bg-surface-light transition-all text-sm font-mono flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
