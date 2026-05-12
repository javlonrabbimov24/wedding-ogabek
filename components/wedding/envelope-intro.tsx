"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { Heart, Sparkles } from "lucide-react"

interface EnvelopeIntroProps {
  onOpen: () => void
}

export function EnvelopeIntro({ onOpen }: EnvelopeIntroProps) {
  const [isOpening, setIsOpening] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio("/audio/wedding-music.mp3")
    audioRef.current.loop = true
    audioRef.current.volume = 0.4

    // Generate particles only on client
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setParticles(newParticles)

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const handleOpen = () => {
    setIsOpening(true)
    
    if (audioRef.current) {
      audioRef.current.play().catch(() => {})
    }

    setTimeout(() => {
      onOpen()
    }, 2500)
  }

  return (
    <AnimatePresence>
      {!isOpening ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]">
            {/* Floating particles */}
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[var(--gold)] rounded-full"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
            
            {/* Golden decorative circles */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 border border-[var(--gold)]/20 rounded-full"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity } }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 border border-[var(--gold)]/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[var(--gold)]/5 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10 text-center px-4 sm:px-6 w-full max-w-lg mx-auto"
          >
            {/* Decorative frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -inset-6 sm:-inset-10 md:-inset-16 border border-[var(--gold)]/20 rounded-2xl pointer-events-none"
            />

            {/* Sparkle icons */}
            <motion.div
              className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 text-[var(--gold)]/40"
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ rotate: { duration: 10, repeat: Infinity }, scale: { duration: 2, repeat: Infinity } }}
            >
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 text-[var(--gold)]/40"
              animate={{ rotate: -360, scale: [1, 1.2, 1] }}
              transition={{ rotate: { duration: 12, repeat: Infinity }, scale: { duration: 2.5, repeat: Infinity, delay: 0.5 } }}
            >
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6" />
            </motion.div>

            {/* Top ornament */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-10"
            >
              <div className="w-12 sm:w-20 md:w-28 h-px bg-gradient-to-r from-transparent to-[var(--gold)]" />
              <motion.div
                animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold)]" fill="currentColor" />
              </motion.div>
              <div className="w-12 sm:w-20 md:w-28 h-px bg-gradient-to-l from-transparent to-[var(--gold)]" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-[var(--gold)]/80 tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-4 sm:mb-6"
            >
              Nikoh Taklifnomasi
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-2 drop-shadow-lg"
            >
              {process.env.NEXT_PUBLIC_GROOM_NAME || "Sardorjon"}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-[var(--gold)] text-2xl sm:text-3xl md:text-4xl my-2 sm:my-4 font-serif"
            >
              &amp;
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 sm:mb-10 drop-shadow-lg"
            >
              {process.env.NEXT_PUBLIC_BRIDE_NAME || "Fotima"}
            </motion.h1>

            {/* Bottom ornament */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
            >
              <div className="w-12 sm:w-20 md:w-28 h-px bg-gradient-to-r from-transparent to-[var(--gold)]" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--gold)] rotate-45" />
              <div className="w-12 sm:w-20 md:w-28 h-px bg-gradient-to-l from-transparent to-[var(--gold)]" />
            </motion.div>

            {/* Open button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              onClick={handleOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 sm:px-10 md:px-12 py-3 sm:py-4 overflow-hidden cursor-pointer"
            >
              {/* Button background with glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-dark)] rounded-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-dark)] rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Shimmer effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
              />
              
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-white font-medium tracking-wide text-sm sm:text-base">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
                </motion.span>
                Taklifnomani ochish
              </span>
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="text-white/50 text-xs sm:text-sm mt-6 sm:mt-8"
            >
              {process.env.NEXT_PUBLIC_WEDDING_DATE || "16 May 2026"} | {process.env.NEXT_PUBLIC_WEDDING_CITY_SHORT || "Buxoro"}
            </motion.p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]"
        >
          {/* Opening animation with hearts */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="relative"
          >
            {/* Exploding hearts */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                animate={{ 
                  x: Math.cos((i / 12) * Math.PI * 2) * 150, 
                  y: Math.sin((i / 12) * Math.PI * 2) * 150,
                  scale: 1,
                  opacity: 0
                }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <Heart className="w-6 h-6 text-[var(--gold)]" fill="currentColor" />
              </motion.div>
            ))}
            
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 1.5 }}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold-dark)] flex items-center justify-center shadow-2xl"
            >
              <Heart className="w-10 h-10 sm:w-14 sm:h-14 text-white" fill="currentColor" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
