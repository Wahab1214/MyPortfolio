import { useState, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Github, X, ChevronRight, Film } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: -dy * 12, y: dx * 12 });
    setGlow({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlow({ x: 50, y: 50 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="perspective-1000"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onOpen}
        className="group relative preserve-3d cursor-pointer transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <div className="glass-panel relative overflow-hidden p-6 transition-all duration-300 group-hover:border-white/20">
          {/* Radial glow following cursor */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,255,255,0.06), transparent 50%)`,
            }}
          />

          {/* Video / demo placeholder */}
          <div className="relative mb-5 aspect-video overflow-hidden rounded-xl border border-white/10 bg-ink-800">
            {project.videoUrl ? (
              <video
                src={project.videoUrl}
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.04]`}
                />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${project.gradient} bg-opacity-10`}
                  >
                    <Film className="h-5 w-5 text-white/40" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">
                    Demo Video Placeholder
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Project info */}
          <div className="relative z-10 space-y-3" style={{ transform: 'translateZ(40px)' }}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {project.name}
                </h3>
                <p className="mt-0.5 text-sm text-slate-400">{project.tagline}</p>
              </div>
              <span
                className={`mt-1 h-3 w-3 rounded-full bg-gradient-to-r ${project.gradient}`}
              />
            </div>

            <p className="text-sm leading-relaxed text-slate-400 line-clamp-2">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] tracking-wide text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-medium text-neon-blue group-hover:text-neon-cyan">
                View Details
              </span>
              <ChevronRight className="h-4 w-4 text-neon-blue transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/80 p-4 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel relative max-h-[85vh] w-full max-w-2xl overflow-y-auto p-8"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Demo area */}
          <div className="relative mb-6 aspect-video overflow-hidden rounded-xl border border-white/10 bg-ink-800">
            {project.videoUrl ? (
              <video
                src={project.videoUrl}
                muted
                loop
                autoPlay
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.06]`} />
                <Film className="h-8 w-8 text-white/30" />
                <span className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">
                  Demo Video Placeholder
                </span>
              </div>
            )}
          </div>

          <h3 className="font-display text-3xl font-bold text-white">{project.name}</h3>
          <p className="mt-1 text-sm text-slate-400">{project.tagline}</p>

          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            {project.longDescription}
          </p>

          {/* Features */}
          <div className="mt-6">
            <h4 className="mb-3 font-mono text-xs tracking-[0.2em] text-neon-blue/70 uppercase">
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="mt-6">
            <h4 className="mb-3 font-mono text-xs tracking-[0.2em] text-neon-blue/70 uppercase">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-8 flex gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-neon-blue/50 hover:text-white"
              >
                {link.icon === 'play' ? <Play className="h-3.5 w-3.5" /> : <Github className="h-3.5 w-3.5" />}
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative min-h-screen w-full overflow-hidden py-24">
      {/* Background */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-neon-blue/5 blur-[150px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-neon-purple/5 blur-[150px]" />

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
            02 — Projects
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Things I've built
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-slate-400">
            Three AI-powered apps that push the boundaries of what mobile can do.
            Click any card to dive deeper.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
