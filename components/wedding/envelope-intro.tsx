"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Heart, Sparkles } from "lucide-react"

interface EnvelopeIntroProps {
  onOpen: () => void
}

export function EnvelopeIntro({ onOpen }: EnvelopeIntroProps) {
  const [isOpening, setIsOpening] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 22 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setParticles(newParticles)
  }, [])

  const handleOpen = () => {
    setIsOpening(true)
    setTimeout(() => {
      onOpen()
    }, 1400)
  }

  const groomName = process.env.NEXT_PUBLIC_GROOM_NAME || "Javlon"
  const brideName = process.env.NEXT_PUBLIC_BRIDE_NAME || "Nargiza"
  const event1 = process.env.NEXT_PUBLIC_EVENT1_FULL_DATE || "06.06.2026"
  const event1Place = process.env.NEXT_PUBLIC_EVENT1_PLACE || "Buxoro viloyati"
  const event2 = process.env.NEXT_PUBLIC_EVENT2_FULL_DATE || "13.06.2026"
  const event2Place = process.env.NEXT_PUBLIC_EVENT2_PLACE || "Navoiy viloyati"

  return (
    <AnimatePresence>
      {!isOpening ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        >
          {/* Dark navy background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]">
            {/* Floating particles */}
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-[5px] h-[5px] bg-[#c9a050] rounded-full"
                style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
                animate={{ y: [0, -30, 0], opacity: [0.25, 0.8, 0.25], scale: [1, 1.5, 1] }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Decorative rings */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 border border-[#c9a050]/15 rounded-full"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity } }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-[#c9a050]/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#c9a050]/5 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Content card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.2, 0.7, 0.3, 1] }}
            className="relative z-10 text-center px-6 w-full max-w-[34rem] mx-auto"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-10 border border-[#c9a050]/20 rounded-2xl pointer-events-none" />

            {/* Corner stars */}
            <motion.div
              className="absolute -top-6 -left-6 text-[#c9a050]/45"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -right-6 text-[#c9a050]/45"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>

            {/* Top ornament */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="flex items-center justify-center gap-3 mb-9"
            >
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#c9a050]" />
              <motion.div
                animate={{ scale: [1, 1.3, 1], rotate: [0, 360, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-5 h-5 text-[#c9a050]" fill="currentColor" />
              </motion.div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#c9a050]" />
            </motion.div>

            {/* Kicker */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-[#c9a050]/85 uppercase tracking-[0.38em] text-[0.72rem] font-medium mb-6"
            >
              Nikoh Taklifnomasi
            </motion.p>

            {/* Names */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-serif text-white font-semibold drop-shadow-lg"
              style={{ fontSize: "clamp(2.6rem, 9vw, 4.6rem)", lineHeight: 1.05 }}
            >
              {groomName}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-[#c9a050] font-serif my-1"
              style={{ fontSize: "clamp(1.6rem, 5vw, 2.4rem)" }}
            >
              &amp;
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="font-serif text-white font-semibold drop-shadow-lg mb-10"
              style={{ fontSize: "clamp(2.6rem, 9vw, 4.6rem)", lineHeight: 1.05 }}
            >
              {brideName}
            </motion.h1>

            {/* Bottom ornament */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="flex items-center justify-center gap-3 mb-10"
            >
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#c9a050]" />
              <div className="w-2 h-2 bg-[#c9a050] rotate-45" />
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#c9a050]" />
            </motion.div>

            {/* Open button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              onClick={handleOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="relative inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full overflow-hidden cursor-pointer border-none"
              style={{ boxShadow: "0 0 30px rgba(201,160,80,.45)" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#9a7430] via-[#c9a050] to-[#9a7430]" />
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
              />
              <span className="relative z-10 flex items-center gap-2 text-white font-semibold text-[1.05rem]">
                <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <Heart className="w-4 h-4" fill="currentColor" />
                </motion.span>
                Taklifnomani ochish
              </span>
            </motion.button>

            {/* Both dates */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="flex flex-col items-center gap-2 mt-7"
            >
              <span className="text-white/60 text-[0.98rem] tracking-[0.04em]">{event1} — {event1Place.split(",")[0]}</span>
              <div className="w-10 h-px bg-[#c9a050]/50" />
              <span className="text-white/60 text-[0.98rem] tracking-[0.04em]">{event2} — {event2Place.split(",")[0]}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative"
          >
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                animate={{
                  x: Math.cos((i / 12) * Math.PI * 2) * 150,
                  y: Math.sin((i / 12) * Math.PI * 2) * 150,
                  scale: 1,
                  opacity: 0,
                }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <Heart className="w-7 h-7 text-[#c9a050]" fill="currentColor" />
              </motion.div>
            ))}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 0.8 }}
              className="w-32 h-32 rounded-full bg-gradient-to-br from-[#e0c486] to-[#9a7430] flex items-center justify-center shadow-2xl"
            >
              <Heart className="w-14 h-14 text-white" fill="currentColor" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
