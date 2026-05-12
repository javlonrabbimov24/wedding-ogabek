"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [floatingHearts, setFloatingHearts] = useState<Array<{ id: number; x: number; delay: number; duration: number }>>([])

  useEffect(() => {
    const hearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: 5 + (i * 6.5),
      delay: i * 0.5,
      duration: 10 + Math.random() * 5,
    }))
    setFloatingHearts(hearts)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--cream)] via-white to-[var(--cream)]" />
        
        {/* Floating hearts */}
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-[var(--gold)]/20"
            style={{ left: `${heart.x}%` }}
            initial={{ y: "110vh" }}
            animate={{ y: "-10vh", rotate: [0, 15, -15, 0] }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay,
              ease: "linear",
            }}
          >
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor" />
          </motion.div>
        ))}
        
        {/* Golden decorative circles */}
        <motion.div
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border border-[var(--gold)]/20 rounded-full"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-20 sm:top-40 right-5 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border border-[var(--gold)]/30 rounded-full"
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-20 sm:bottom-40 left-[15%] sm:left-1/4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border border-[var(--gold)]/25 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 right-[20%] w-8 h-8 sm:w-10 sm:h-10 border border-[var(--gold)]/20 rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
        />

        {/* Sparkles decoration */}
        <motion.div
          className="absolute top-1/3 left-[10%] text-[var(--gold)]/30"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ rotate: { duration: 15, repeat: Infinity }, scale: { duration: 3, repeat: Infinity } }}
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-[10%] text-[var(--gold)]/30"
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ rotate: { duration: 18, repeat: Infinity }, scale: { duration: 3.5, repeat: Infinity, delay: 1 } }}
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center w-full max-w-4xl mx-auto"
      >
        {/* Top ornament */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10"
        >
          <div className="w-10 sm:w-16 md:w-24 lg:w-32 h-px bg-gradient-to-r from-transparent to-[var(--gold)]" />
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[var(--gold)]" fill="currentColor" />
          </motion.div>
          <div className="w-10 sm:w-16 md:w-24 lg:w-32 h-px bg-gradient-to-l from-transparent to-[var(--gold)]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[var(--gold-dark)] tracking-[0.25em] sm:tracking-[0.35em] md:tracking-[0.4em] uppercase text-[10px] sm:text-xs md:text-sm mb-4 sm:mb-6"
        >
          Biz turmush quramiz
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground mb-1 sm:mb-2 drop-shadow-sm"
        >
          Sardorjon
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 my-4 sm:my-5 md:my-6"
        >
          <div className="w-8 sm:w-12 md:w-16 lg:w-20 h-px bg-[var(--gold)]" />
          <span className="text-[var(--gold)] text-3xl sm:text-4xl md:text-5xl font-serif">&amp;</span>
          <div className="w-8 sm:w-12 md:w-16 lg:w-20 h-px bg-[var(--gold)]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground mb-6 sm:mb-8 drop-shadow-sm"
        >
          Fotima
        </motion.h1>

        {/* Bottom ornament */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 mb-4 sm:mb-6"
        >
          <div className="w-10 sm:w-16 md:w-24 lg:w-32 h-px bg-gradient-to-r from-transparent to-[var(--gold)]" />
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--gold)] rotate-45" />
          <div className="w-10 sm:w-16 md:w-24 lg:w-32 h-px bg-gradient-to-l from-transparent to-[var(--gold)]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="text-muted-foreground text-lg sm:text-xl md:text-2xl tracking-wide"
        >
          16 May 2026
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="text-[var(--gold-dark)] text-base sm:text-lg mt-1 sm:mt-2"
        >
          Shanba | Soat 18:00
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 sm:gap-2"
        >
          <span className="text-xs sm:text-sm text-muted-foreground tracking-wider">Pastga</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[var(--gold)]/50 rounded-full flex justify-center pt-1.5 sm:pt-2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[var(--gold)] rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
