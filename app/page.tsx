"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { EnvelopeIntro } from "@/components/wedding/envelope-intro"
import { HeroSection } from "@/components/wedding/hero-section"
import { InvitationText } from "@/components/wedding/invitation-text"
import { CountdownTimer } from "@/components/wedding/countdown-timer"
import { EventDetails } from "@/components/wedding/event-details"
import { Guestbook } from "@/components/wedding/guestbook"
import { Footer } from "@/components/wedding/footer"
import { BackgroundMusic } from "@/components/wedding/background-music"

export default function WeddingInvitation() {
  const [isOpened, setIsOpened] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleOpen = () => {
    setIsOpened(true)
    audioRef.current?.play().catch(() => {})
  }

  return (
    <main className="min-h-screen">
      <BackgroundMusic ref={audioRef} />
      {!isOpened && <EnvelopeIntro onOpen={handleOpen} />}

      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <HeroSection />
            <InvitationText />
            <CountdownTimer />
            <EventDetails />
            <Guestbook />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
