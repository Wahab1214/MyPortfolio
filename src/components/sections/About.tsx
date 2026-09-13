import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles, Code2 } from 'lucide-react';
import { aboutBio } from '@/data/portfolio';

const skillBadges = [
  { name: 'Flutter', color: '#02569B' },
  { name: 'Dart', color: '#0175C2' },
  { name: 'FastAPI', color: '#009688' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'AI/ML', color: '#00D4FF' },
  { name: 'Play Store', color: '#34A853' },
];

export default function About() {
  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden py-24">
      {/* Background accents */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-neon-purple/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-72 w-72 rounded-full bg-neon-blue/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-neon-blue/70 uppercase">
            01 — About
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            The developer behind the code
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg leading-relaxed text-slate-300">
              {aboutBio.short}
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              {aboutBio.long}
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neon-blue/10 text-neon-blue">
                  <GraduationCap className="h-4 w-4" />
                </span>
                Computer Science Graduate
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neon-teal/10 text-neon-teal">
                  <MapPin className="h-4 w-4" />
                </span>
                Based in Pakistan
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neon-purple/10 text-neon-purple">
                  <Sparkles className="h-4 w-4" />
                </span>
                AI-First Mobile Development
              </div>
            </div>
          </motion.div>

          {/* Skill badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
              <Code2 className="h-4 w-4 text-neon-blue" />
              Core Tech Stack
            </div>
            <div className="flex flex-wrap gap-3">
              {skillBadges.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="group relative flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-md transition-colors hover:border-white/20"
                >
                  <span
                    className="h-3 w-3 rounded-full transition-transform group-hover:scale-125"
                    style={{
                      backgroundColor: skill.color,
                      boxShadow: `0 0 12px ${skill.color}80`,
                    }}
                  />
                  <span className="text-sm font-medium text-slate-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 grid grid-cols-3 gap-4"
            >
              {[
                { value: '3+', label: 'AI Apps' },
                { value: '15+', label: 'Technologies' },
                { value: '∞', label: 'Ideas' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-panel p-4 text-center"
                >
                  <div className="font-display text-2xl font-bold neon-text">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
