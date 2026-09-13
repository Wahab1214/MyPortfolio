import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
  show: boolean;
}

export default function LoadingScreen({ show }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950"
        >
          {/* Grid backdrop */}
          <div className="absolute inset-0 bg-grid opacity-30" />

          {/* Central glow */}
          <div className="absolute h-96 w-96 rounded-full bg-neon-blue/10 blur-[100px] animate-pulse-glow" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Animated ring */}
            <div className="relative h-24 w-24">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-neon-blue/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-2 rounded-full border-t-2 border-neon-blue"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-5 rounded-full border-r-2 border-neon-purple"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-8 rounded-full bg-neon-blue/20"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {/* Name reveal */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-display text-3xl font-bold tracking-widest text-white"
              >
                WAHAB
              </motion.h1>
            </div>

            {/* Loading bar */}
            <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-teal"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-xs tracking-[0.3em] text-slate-500 uppercase"
            >
              Initializing experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
