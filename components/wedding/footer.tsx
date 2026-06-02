"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles } from "lucide-react"

export function Footer() {
  const groomName = process.env.NEXT_PUBLIC_GROOM_NAME || "Javlon"
  const brideName = process.env.NEXT_PUBLIC_BRIDE_NAME || "Nargiza"
  const event1 = process.env.NEXT_PUBLIC_EVENT1_FULL_DATE || "06.06.2026"
  const event1Place = process.env.NEXT_PUBLIC_EVENT1_PLACE || "Buxoro viloyati"
  const event2 = process.env.NEXT_PUBLIC_EVENT2_FULL_DATE || "13.06.2026"
  const event2Place = process.env.NEXT_PUBLIC_EVENT2_PLACE || "Navoiy viloyati"

  return (
    <footer className="relative py-12 sm:py-14 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #c9a050 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Sparkles */}
      <motion.div
        className="absolute top-8 left-[10%] text-[#c9a050]/30 hidden sm:block"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { duration: 15, repeat: Infinity }, scale: { duration: 3, repeat: Infinity } }}
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>
      <motion.div
        className="absolute bottom-8 right-[10%] text-[#c9a050]/30 hidden sm:block"
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { duration: 18, repeat: Infinity }, scale: { duration: 3.5, repeat: Infinity, delay: 1 } }}
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Names */}
          <h3 className="font-serif text-white mb-6" style={{ fontSize: "clamp(1.9rem,6vw,3rem)" }}>
            {groomName} &amp; {brideName}
          </h3>

          {/* Heart divider */}
          <div className="flex items-center justify-center gap-4 mb-7">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c9a050]" />
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 text-[#c9a050]" fill="currentColor" />
            </motion.div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c9a050]" />
          </div>

          {/* Both dates */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[#c9a050] font-semibold" style={{ fontSize: "clamp(1rem,2.8vw,1.25rem)" }}>
            <span>{event1} · {event1Place.split(",")[0]}</span>
            <span className="w-[5px] h-[5px] bg-[#c9a050] rounded-full opacity-60 hidden sm:inline-block" />
            <span>{event2} · {event2Place.split(",")[0]}</span>
          </div>
          <p className="text-white/60 mt-2" style={{ fontSize: "clamp(.95rem,2.4vw,1.1rem)" }}>
            O&apos;zbekiston
          </p>

          {/* Bottom rule */}
          <motion.div
            className="mt-10 pt-7 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-white/40 text-sm flex items-center justify-center gap-2">
              {groomName[0]} <Heart className="w-3 h-3 text-red-400" fill="currentColor" /> {brideName[0]}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
