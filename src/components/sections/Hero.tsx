import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ParticleSphere from '@/components/three/ParticleSphere';
import FloatingGeometry from '@/components/three/FloatingGeometry';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
            <ParticleSphere />
            <FloatingGeometry />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950/40 via-transparent to-ink-950" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-transparent via-transparent to-ink-950/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-neon-teal" />
          <span className="font-mono text-xs tracking-wider text-slate-400">
            AVAILABLE FOR WORK
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl"
        >
          WAHAB
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-3"
        >
          <h2 className="font-display text-lg font-medium text-slate-300 sm:text-xl md:text-2xl">
            Flutter Full-Stack Developer{' '}
            <span className="text-slate-600">|</span>{' '}
            <span className="neon-text font-semibold">AI-Integrated Mobile Apps</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-6 max-w-xl text-sm text-slate-400 sm:text-base"
        >
          Building intelligent, human-centered apps that feel like they're from
          the future — where beautiful design meets real AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan px-8 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-105"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-slate-200 backdrop-blur-md transition-colors hover:border-neon-blue/50 hover:text-white"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-[0.3em] text-slate-500 uppercase">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-5 w-5 text-neon-blue/60" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
