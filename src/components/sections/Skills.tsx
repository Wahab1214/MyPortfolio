import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { skills } from '@/data/portfolio';

/**
 * Skills section with an orbiting constellation of tech icons.
 * Uses CSS 3D transforms + scroll-based rotation for a dynamic feel.
 */
export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const rotateOrbit = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateOrbitReverse = useTransform(scrollYProgress, [0, 1], [360, 0]);
  const rotateOrbitSlow = useTransform(scrollYProgress, [0, 1], [0, 180]);

  // Distribute skills across 3 orbit rings
  const orbits = [
    { skills: skills.slice(0, 3), radius: 120, rotate: rotateOrbit, duration: 20 },
    { skills: skills.slice(3, 6), radius: 190, rotate: rotateOrbitReverse, duration: 25 },
    { skills: skills.slice(6, 8), radius: 260, rotate: rotateOrbitSlow, duration: 30 },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-blue/[0.03] blur-[100px]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-neon-blue/70 uppercase">
            03 — Skills
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            The constellation of tools
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-slate-400">
            Every technology orbits around building better, smarter, faster apps.
          </p>
        </motion.div>

        {/* Orbit visualization */}
        <div className="relative flex items-center justify-center py-12">
          <div className="relative h-[600px] w-full max-w-[600px]">
            {/* Orbit rings */}
            {orbits.map((orbit, oi) => (
              <div
                key={oi}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
                style={{ width: orbit.radius * 2, height: orbit.radius * 2 }}
              />
            ))}

            {/* Center node */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', damping: 15, stiffness: 200 }}
              className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neon-blue/30 bg-ink-800"
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple animate-pulse-glow" />
            </motion.div>

            {/* Orbiting skill icons */}
            {orbits.map((orbit, oi) =>
              orbit.skills.map((skill, si) => {
                const angle = (si / orbit.skills.length) * Math.PI * 2;
                return (
                  <motion.div
                    key={`${oi}-${skill.name}`}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      rotate: orbit.rotate,
                    }}
                  >
                    <div
                      className="absolute flex items-center justify-center"
                      style={{
                        transform: `translate(-50%, -50%) translate(${Math.cos(angle) * orbit.radius}px, ${Math.sin(angle) * orbit.radius}px)`,
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + oi * 0.2 + si * 0.1, type: 'spring', damping: 12 }}
                        whileHover={{ scale: 1.2, zIndex: 30 }}
                        className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-colors hover:border-white/20"
                      >
                        <span
                          className="h-4 w-4 rounded-full"
                          style={{
                            backgroundColor: skill.color,
                            boxShadow: `0 0 16px ${skill.color}80`,
                          }}
                        />
                        {/* Label on hover */}
                        <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-slate-300 opacity-0 transition-opacity group-hover:opacity-100">
                          {skill.name}
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              }),
            )}
          </div>
        </div>

        {/* Skill categories below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4"
        >
          {['Mobile', 'Backend', 'AI', 'DevOps'].map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat);
            return (
              <div key={cat} className="glass-panel p-5">
                <h4 className="mb-3 font-mono text-xs tracking-[0.2em] text-neon-blue/70 uppercase">
                  {cat}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {catSkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="flex items-center gap-1.5 text-sm text-slate-300"
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
