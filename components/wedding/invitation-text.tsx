"use client"

import { motion } from "framer-motion"
import { Quote, Heart } from "lucide-react"

export function InvitationText() {
  const groomName = process.env.NEXT_PUBLIC_GROOM_NAME || "Javlon"
  const brideName = process.env.NEXT_PUBLIC_BRIDE_NAME || "Nargiza"

  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 overflow-hidden">
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

      <div className="relative z-10 mx-auto px-4 sm:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Quote icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-[3.8rem] h-[3.8rem] mx-auto mb-8 rounded-full bg-[#c9a050]/10 flex items-center justify-center"
          >
            <Quote className="w-8 h-8 text-[#c9a050]" />
          </motion.div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Hurmatli Mehmon!
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#c9a050] to-transparent mx-auto mb-10"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-7"
          >
            Sizni hayotimizning eng muhim va quvonchli kuniga taklif qilishdan
            mamnunmiz. Bu baxtli kunimizni siz bilan birga nishonlash biz uchun
            katta sharafdir.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
          >
            Sizning ishtirokingiz bizning to&apos;yimizni yanada unutilmas qiladi.
            Siz bilan bo&apos;lishgan har bir lahza qalbimizda abadiy xotira bo&apos;lib
            qoladi.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#c9a050]" />
            <Heart className="w-4 h-4 text-[#c9a050]" fill="currentColor" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#c9a050]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative inline-block"
          >
            <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[#9a7430] italic">
              Hurmat bilan, {groomName} va {brideName}
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-2 left-0 right-0 h-px bg-[#c9a050]/30"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
