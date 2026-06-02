"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function InvitationText() {
  const groomName = process.env.NEXT_PUBLIC_GROOM_NAME || "Javlon"
  const brideName = process.env.NEXT_PUBLIC_BRIDE_NAME || "Nargiza"

  return (
    <section className="relative pt-0 pb-20 sm:pb-28 overflow-hidden">
      {/* Seamless gradient from hero's cream color */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--cream)] via-white to-[var(--cream)]" />

      {/* Side ornaments */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-64 hidden sm:block"
      >
        <div className="w-full h-full border-l-2 border-t-2 border-b-2 border-[#c9a050] rounded-l-full" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-64 hidden sm:block"
      >
        <div className="w-full h-full border-r-2 border-t-2 border-b-2 border-[#c9a050] rounded-r-full" />
      </motion.div>

      {/* Decorative top divider — bridges hero and this section */}
      <div className="relative z-10 flex flex-col items-center pt-2 pb-10">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-px h-14 bg-gradient-to-b from-transparent to-[#c9a050]/60"
        />
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="my-1"
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="15" y="0" width="6" height="6" rx="1" fill="#c9a050" transform="rotate(45 18 3)" />
            <rect x="15" y="27" width="6" height="6" rx="1" fill="#c9a050" transform="rotate(45 18 30)" />
            <rect x="0" y="15" width="6" height="6" rx="1" fill="#c9a050" transform="rotate(45 3 18)" />
            <rect x="27" y="15" width="6" height="6" rx="1" fill="#c9a050" transform="rotate(45 30 18)" />
            <circle cx="18" cy="18" r="4" fill="#c9a050" />
            <line x1="18" y1="6" x2="18" y2="13" stroke="#c9a050" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="18" y1="23" x2="18" y2="30" stroke="#c9a050" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="6" y1="18" x2="13" y2="18" stroke="#c9a050" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="23" y1="18" x2="30" y2="18" stroke="#c9a050" strokeWidth="1" strokeOpacity="0.5" />
          </svg>
        </motion.div>
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-px h-10 bg-gradient-to-b from-[#c9a050]/60 to-transparent"
        />
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 max-w-2xl">
        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9 }}
          className="relative text-center border border-[#c9a050]/20 rounded-2xl px-6 sm:px-12 py-10 sm:py-14 bg-white/60 backdrop-blur-sm"
          style={{ boxShadow: "0 8px 40px rgba(154,116,48,.08)" }}
        >
          {/* Corner accents */}
          <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c9a050]/50 rounded-tl-2xl" />
          <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#c9a050]/50 rounded-tr-2xl" />
          <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#c9a050]/50 rounded-bl-2xl" />
          <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c9a050]/50 rounded-br-2xl" />

          {/* Kicker */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-[#c9a050]/80 uppercase text-xs font-medium mb-5"
          >
            Nikoh Taklifnomasi
          </motion.p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Hurmatli Mehmon!
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9a050]/50" />
            <Heart className="w-3.5 h-3.5 text-[#c9a050]" fill="currentColor" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c9a050]/50" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-5"
          >
            Sizni hayotimizning eng muhim va quvonchli kuniga taklif qilishdan
            mamnunmiz. Bu baxtli kunimizni siz bilan birga nishonlash biz uchun
            katta sharafdir.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10"
          >
            Sizning ishtirokingiz bizning to&apos;yimizni yanada unutilmas qiladi.
            Siz bilan bo&apos;lishgan har bir lahza qalbimizda abadiy xotira bo&apos;lib
            qoladi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative inline-block"
          >
            <span className="font-serif text-xl sm:text-2xl text-[#9a7430] italic">
              Hurmat bilan, {groomName} va {brideName}
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-2 left-0 right-0 h-px bg-[#c9a050]/30"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
