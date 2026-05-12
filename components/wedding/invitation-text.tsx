"use client"

import { motion } from "framer-motion"
import { Quote, Heart } from "lucide-react"

export function InvitationText() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--cream)] via-white to-[var(--cream)]" />
      
      {/* Decorative side ornaments - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-32 sm:w-24 sm:h-48 md:w-32 md:h-64 hidden sm:block"
      >
        <div className="w-full h-full border-l-2 border-t-2 border-b-2 border-[var(--gold)] rounded-l-full" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-32 sm:w-24 sm:h-48 md:w-32 md:h-64 hidden sm:block"
      >
        <div className="w-full h-full border-r-2 border-t-2 border-b-2 border-[var(--gold)] rounded-r-full" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-3xl">
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
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-6 sm:mb-8 rounded-full bg-[var(--gold)]/10 flex items-center justify-center"
          >
            <Quote className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[var(--gold)]" />
          </motion.div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6 text-balance">
            Hurmatli Mehmon!
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 sm:w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mx-auto mb-6 sm:mb-8 md:mb-10"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-5 sm:mb-6 md:mb-8 text-balance"
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
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8 md:mb-10 text-balance"
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
            className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
          >
            <div className="w-12 sm:w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--gold)]" fill="currentColor" />
            <div className="w-12 sm:w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-[var(--gold)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative inline-block"
          >
            <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[var(--gold-dark)] italic text-balance">
              Hurmat bilan, Sardorjon va Fotima
            </span>
            {/* Decorative underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-2 left-0 right-0 h-px bg-[var(--gold)]/30"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
