"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const targetDate = new Date(process.env.NEXT_PUBLIC_WEDDING_TARGET_DATETIME || "2026-05-16T18:00:00")

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: "Kun", value: timeLeft.days },
    { label: "Soat", value: timeLeft.hours },
    { label: "Daqiqa", value: timeLeft.minutes },
    { label: "Soniya", value: timeLeft.seconds },
  ]

  return (
    <section id="countdown" className="relative py-16 sm:py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[var(--cream)] to-white" />
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--gold) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4">
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
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 relative"
          >
            <motion.div 
              className="absolute inset-0 border-2 border-[var(--gold)] rotate-45"
              animate={{ rotate: [45, 135, 45] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute inset-2 border border-[var(--gold-light)] rotate-45"
              animate={{ rotate: [45, -45, 45] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold)]" fill="currentColor" />
            </div>
          </motion.div>
          
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 sm:mb-4 text-balance">
            Baxtli kunimizga qoldi
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6"
        >
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-[72px] h-[88px] sm:w-20 sm:h-24 md:w-24 md:h-28 lg:w-28 lg:h-32 rounded-lg sm:rounded-xl overflow-hidden"
              >
                {/* Card background */}
                <div className="absolute inset-0 bg-white shadow-lg border border-[var(--gold-light)]/50" />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--gold)]/10 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
                />
                
                {/* Number */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <motion.span
                    key={mounted ? unit.value : 0}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground"
                  >
                    {mounted ? String(unit.value).padStart(2, "0") : "00"}
                  </motion.span>
                </div>
                
                {/* Decorative corners */}
                <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-[var(--gold)] rounded-tr-lg sm:rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-[var(--gold)] rounded-bl-lg sm:rounded-bl-xl" />
              </motion.div>
              
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="block mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-[var(--gold-dark)] tracking-wide font-medium text-center"
              >
                {unit.label}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
