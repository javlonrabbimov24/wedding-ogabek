"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [floatingHearts, setFloatingHearts] = useState<Array<{ id: number; x: number; delay: number; duration: number }>>([])

  useEffect(() => {
    const hearts = Array.from({ length: 14 }, (_, i) => ({
      id: i,
      x: 4 + i * 6.8,
      delay: i * 0.5,
      duration: 10 + Math.random() * 6,
    }))
    setFloatingHearts(hearts)
  }, [])

  const groomName = process.env.NEXT_PUBLIC_GROOM_NAME || "Javlon"
  const brideName = process.env.NEXT_PUBLIC_BRIDE_NAME || "Nargiza"
  const event1Date = process.env.NEXT_PUBLIC_EVENT1_FULL_DATE || "06.06.2026"
  const event1Place = process.env.NEXT_PUBLIC_EVENT1_PLACE || "Buxoro viloyati"
  const event2Date = process.env.NEXT_PUBLIC_EVENT2_FULL_DATE || "13.06.2026"
  const event2Place = process.env.NEXT_PUBLIC_EVENT2_PLACE || "Navoiy viloyati"

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--cream)] via-white to-[var(--cream)]">
        {/* Floating hearts */}
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-[#c9a050]/18"
            style={{ left: `${heart.x}%`, width: 20, height: 20 }}
            initial={{ y: "110vh" }}
            animate={{ y: "-12vh", rotate: [0, 15, -15, 0] }}
            transition={{ duration: heart.duration, repeat: Infinity, delay: heart.delay, ease: "linear" }}
          >
            <Heart className="w-5 h-5" fill="currentColor" />
          </motion.div>
        ))}

        {/* Decorative rings */}
        <motion.div
          className="absolute top-[12%] left-[6%] w-32 h-32 border border-[#c9a050]/25 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[24%] right-[7%] w-20 h-20 border border-[#c9a050]/25 rounded-full"
          animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-[24%] left-[18%] w-16 h-16 border border-[#c9a050]/25 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-[30%] right-[20%] w-12 h-12 border border-[#c9a050]/25 rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
        />
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
          className="flex items-center justify-center gap-3 mb-9"
        >
          <div className="h-px bg-gradient-to-r from-transparent to-[#c9a050]" style={{ width: "clamp(2.5rem,8vw,8rem)" }} />
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, 360, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="w-6 h-6 text-[#c9a050]" fill="currentColor" />
          </motion.div>
          <div className="h-px bg-gradient-to-l from-transparent to-[#c9a050]" style={{ width: "clamp(2.5rem,8vw,8rem)" }} />
        </motion.div>

        {/* Groom name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="font-serif text-foreground font-semibold"
          style={{ fontSize: "clamp(3.4rem, 13vw, 8.5rem)", lineHeight: 1 }}
        >
          {groomName}
        </motion.h1>

        {/* Ampersand row */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-4 my-4"
        >
          <div className="h-px bg-[#c9a050]" style={{ width: "clamp(2rem,6vw,5rem)" }} />
          <span className="text-[#c9a050] font-serif" style={{ fontSize: "clamp(2rem,6vw,3rem)" }}>&amp;</span>
          <div className="h-px bg-[#c9a050]" style={{ width: "clamp(2rem,6vw,5rem)" }} />
        </motion.div>

        {/* Bride name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="font-serif text-foreground font-semibold mb-8"
          style={{ fontSize: "clamp(3.4rem, 13vw, 8.5rem)", lineHeight: 1 }}
        >
          {brideName}
        </motion.h1>

        {/* Bottom ornament */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="flex items-center justify-center gap-3 mb-7"
        >
          <div className="h-px bg-gradient-to-r from-transparent to-[#c9a050]" style={{ width: "clamp(2.5rem,8vw,8rem)" }} />
          <div className="w-2 h-2 bg-[#c9a050] rotate-45" />
          <div className="h-px bg-gradient-to-l from-transparent to-[#c9a050]" style={{ width: "clamp(2.5rem,8vw,8rem)" }} />
        </motion.div>

        {/* Two event dates */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="flex items-center justify-center flex-wrap gap-x-10 gap-y-3"
        >
          <div className="text-center">
            <div className="font-serif text-foreground" style={{ fontSize: "clamp(1.3rem,4vw,1.9rem)" }}>
              {event1Date}
            </div>
            <div className="text-[#9a7430] uppercase tracking-[0.12em] mt-1" style={{ fontSize: "clamp(0.9rem,2.4vw,1.05rem)" }}>
              {event1Place.split(",")[0]}
            </div>
          </div>
          <div className="w-px h-10 bg-[#c9a050]/50" />
          <div className="text-center">
            <div className="font-serif text-foreground" style={{ fontSize: "clamp(1.3rem,4vw,1.9rem)" }}>
              {event2Date}
            </div>
            <div className="text-[#9a7430] uppercase tracking-[0.12em] mt-1" style={{ fontSize: "clamp(0.9rem,2.4vw,1.05rem)" }}>
              {event2Place.split(",")[0]}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-muted-foreground tracking-widest">Pastga</span>
          <div className="w-6 h-9 border-2 border-[#c9a050]/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-[#c9a050] rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
