"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Calendar, Navigation, Heart } from "lucide-react"

export function EventDetails() {
  const openGoogleMaps = () => {
    window.open(
      "https://maps.google.com/?q=Afrosiyob+restoran+Kogon+Buxoro",
      "_blank"
    )
  }

  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[var(--cream)] to-white" />
      
      {/* Decorative circles - hidden on mobile */}
      <motion.div
        className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 border border-[var(--gold)]/10 rounded-full hidden sm:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 border border-[var(--gold)]/10 rounded-full hidden sm:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 sm:mb-6"
          >
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-[var(--gold)]" fill="currentColor" />
          </motion.div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 sm:mb-4 text-balance">
            To&apos;y Ma&apos;lumotlari
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {/* Date & Time Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-white p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-[var(--gold-light)]/50 overflow-hidden"
            >
              {/* Card decoration */}
              <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border-t-2 border-l-2 border-[var(--gold)] rounded-tl-xl sm:rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border-b-2 border-r-2 border-[var(--gold)] rounded-br-xl sm:rounded-br-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 md:gap-5 mb-5 sm:mb-6 md:mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] flex items-center justify-center shadow-md flex-shrink-0"
                  >
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-foreground">Sana</h3>
                    <p className="text-base sm:text-lg text-muted-foreground">16 May, 2026-yil</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -10 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] flex items-center justify-center shadow-md flex-shrink-0"
                  >
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-foreground">Vaqti</h3>
                    <p className="text-base sm:text-lg text-muted-foreground">18:00 dan boshlab</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-white p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-lg border border-[var(--gold-light)]/50 overflow-hidden h-full flex flex-col"
            >
              {/* Card decoration */}
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border-t-2 border-r-2 border-[var(--gold)] rounded-tr-xl sm:rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border-b-2 border-l-2 border-[var(--gold)] rounded-bl-xl sm:rounded-bl-2xl" />
              
              <div className="relative z-10 flex-1">
                <div className="flex items-start gap-3 sm:gap-4 md:gap-5 mb-5 sm:mb-6 md:mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold)] flex items-center justify-center shadow-md flex-shrink-0"
                  >
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-foreground">Manzil</h3>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      Afrosiyob restorani, Kogon shahri, Buxoro viloyati
                    </p>
                  </div>
                </div>
              </div>

              <motion.button
                onClick={openGoogleMaps}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full py-3 sm:py-4 rounded-lg sm:rounded-xl overflow-hidden group cursor-pointer"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-dark)]" />
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2 text-white font-medium text-sm sm:text-base">
                  <Navigation className="w-4 h-4 sm:w-5 sm:h-5" />
                  Google xaritada ko&apos;rish
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
