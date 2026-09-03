import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, Send, Check, Copy, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useAudioEffects } from '../hooks/useAudioEffects';

export const ContactSection: React.FC = () => {
  const { playClick, playHover } = useAudioEffects();
  const profile = PORTFOLIO_DATA.profile;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playClick();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="07 // INITIATE COLLABORATION"
          title="HAVE AN IDEA WORTH BUILDING?"
          subtitle="Whether you have a complex engineering project, an AI architecture concept, or high-performance 3D web experience, let's turn it into reality."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Contact Card & Direct Info (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-surface-glass border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between shadow-2xl space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono uppercase">
                <Sparkles className="w-3.5 h-3.5" /> DIRECT CHANNELS
              </div>

              <h3 className="text-2xl font-display font-bold text-white">Let's build something exceptional together.</h3>
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Available for high-impact engineering contracts, architectural consulting, and full-stack innovation projects.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-surface-dark border border-white/10 flex items-center justify-between gap-3">
                <div className="truncate">
                  <div className="text-[10px] font-mono text-slate-400">DIRECT EMAIL:</div>
                  <div className="text-xs sm:text-sm font-mono text-accent-cyan truncate">{profile.email}</div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={playHover}
                  className="px-3 py-2 rounded-lg bg-surface-light border border-white/10 text-xs font-mono text-slate-200 hover:text-white hover:border-accent-cyan/40 transition-all flex items-center gap-1.5 shrink-0"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-accent-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">CONNECT ACROSS PLATFORMS:</div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="px-3.5 py-2 rounded-xl bg-surface-light/40 border border-white/10 text-slate-300 hover:text-white hover:border-accent-cyan/40 text-xs font-mono flex items-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="px-3.5 py-2 rounded-xl bg-surface-light/40 border border-white/10 text-slate-300 hover:text-white hover:border-accent-cyan/40 text-xs font-mono flex items-center gap-2 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href={profile.socials.resume}
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="px-3.5 py-2 rounded-xl bg-accent-purple/10 border border-accent-purple/40 text-accent-purple hover:bg-accent-purple/20 text-xs font-mono flex items-center gap-2 transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Contact Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-surface-glass border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent-emerald/20 border border-accent-emerald text-accent-emerald flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">Message Transmitted!</h3>
                <p className="text-slate-300 text-sm font-sans max-w-md mx-auto">
                  Thank you for reaching out. Your transmission has been logged into the queue. I will respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-surface-light border border-white/10 text-xs font-mono text-slate-300 hover:text-white"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-dark border border-white/10 text-sm font-mono text-white placeholder-slate-600 focus:outline-none focus:border-accent-cyan transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">YOUR EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-dark border border-white/10 text-sm font-mono text-white placeholder-slate-600 focus:outline-none focus:border-accent-cyan transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">PROJECT DETAILS & TRANSMISSION *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, technical goals, or collaboration idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface-dark border border-white/10 text-sm font-mono text-white placeholder-slate-600 focus:outline-none focus:border-accent-cyan transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="w-full py-4 rounded-xl bg-accent-cyan text-background font-mono font-bold text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(0,243,255,0.3)] hover:shadow-[0_0_35px_rgba(0,243,255,0.5)] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING MESSAGE...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Global Footer */}
        <footer className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent-cyan" />
            <span>© {new Date().getFullYear()} {profile.name === '[YOUR FULL NAME]' ? 'CREATIVE DEVELOPER' : profile.name}. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">BUILT WITH REACT • THREE.JS • TAILWIND</span>
          </div>
        </footer>
      </div>
    </section>
  );
};
