import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Play, ArrowUpRight, MessageCircle } from 'lucide-react';
import { contactLinks, whatsappUrl } from '@/data/portfolio';

const iconMap: Record<string, typeof Mail> = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  play: Play,
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden py-24"
    >
      {/* Animated gradient mesh background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-neon-blue/10 blur-[120px] animate-pulse-glow" />
        <div
          className="absolute right-1/4 bottom-1/3 h-96 w-96 rounded-full bg-neon-purple/10 blur-[120px] animate-pulse-glow"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-teal/10 blur-[100px] animate-pulse-glow"
          style={{ animationDelay: '0.8s' }}
        />
      </div>

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-12 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.3em] text-neon-blue/70 uppercase"
        >
          04 — Contact
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl md:text-6xl"
        >
          Let's build something{' '}
          <span className="neon-text">intelligent</span> together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-lg text-sm text-slate-400 sm:text-base"
        >
          Have an idea that needs AI, mobile, or both? I'm always open to
          interesting conversations and ambitious projects.
        </motion.p>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid w-full gap-4 sm:grid-cols-2"
        >
          {contactLinks.map((link) => {
            const Icon = iconMap[link.icon] ?? Mail;
            const isDisabled = link.disabled;
            return (
              isDisabled ? (
                <div
                  key={link.label}
                  className="flex cursor-not-allowed items-center justify-between rounded-2xl border border-white/5 bg-white/[0.01] p-5 opacity-50"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-700/20 text-slate-500">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="text-left">
                      <div className="text-xs text-slate-600">{link.label}</div>
                      <div className="text-sm font-medium text-slate-500">
                        {link.value}
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-700/30 px-2.5 py-1 text-[10px] font-medium tracking-wide text-slate-500 uppercase">
                    Soon
                  </span>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all hover:border-neon-blue/30 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neon-blue/10 text-neon-blue transition-colors group-hover:bg-neon-blue/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="text-left">
                      <div className="text-xs text-slate-500">{link.label}</div>
                      <div className="text-sm font-medium text-slate-200">
                        {link.value}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-600 transition-all group-hover:text-neon-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )
            );
          })}
        </motion.div>

        {/* CTA button — WhatsApp */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-12 flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-teal px-10 py-4 text-sm font-semibold text-ink-950 transition-transform hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Start a conversation
          </span>
          <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
        </motion.a>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <p className="mt-3 font-mono text-xs text-slate-600">
            Designed & built by Wahab · {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
