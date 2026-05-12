"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-12 sm:py-14 md:py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]" />
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c9a050 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      {/* Floating sparkles - hidden on mobile */}
      <motion.div
        className="absolute top-8 left-[10%] text-[var(--gold)]/30 hidden sm:block"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { duration: 15, repeat: Infinity }, scale: { duration: 3, repeat: Infinity } }}
      >
        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
      </motion.div>
      <motion.div
        className="absolute bottom-8 right-[10%] text-[var(--gold)]/30 hidden sm:block"
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { duration: 18, repeat: Infinity }, scale: { duration: 3.5, repeat: Infinity, delay: 1 } }}
      >
        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Names */}
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6">
            {process.env.NEXT_PUBLIC_GROOM_NAME || "Sardorjon"} & {process.env.NEXT_PUBLIC_BRIDE_NAME || "Fotima"}
          </h3>
          
          {/* Heart divider */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-5 sm:mb-6 md:mb-8">
            <div className="w-10 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[var(--gold)]" fill="currentColor" />
            </motion.div>
            <div className="w-10 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-[var(--gold)]" />
          </div>

          {/* Date and location */}
          <p className="text-[var(--gold)] text-lg sm:text-xl mb-1 sm:mb-2 font-medium">{process.env.NEXT_PUBLIC_WEDDING_DATE_FORMATTED || "16 May, 2026"}</p>
          <p className="text-white/60 text-base sm:text-lg">
            {process.env.NEXT_PUBLIC_WEDDING_CITY || "Buxoro, O'zbekiston"}
          </p>

          {/* Bottom text */}
          <motion.div 
            className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-white/40 text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2">
              Muhabbat bilan yaratildi <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" fill="currentColor" />
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
