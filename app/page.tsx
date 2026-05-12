"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { EnvelopeIntro } from "@/components/wedding/envelope-intro"
import { HeroSection } from "@/components/wedding/hero-section"
import { CountdownTimer } from "@/components/wedding/countdown-timer"
import { InvitationText } from "@/components/wedding/invitation-text"
import { EventDetails } from "@/components/wedding/event-details"
import { Footer } from "@/components/wedding/footer"

export default function WeddingInvitation() {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <main className="min-h-screen">
      {/* Envelope Intro - shown initially */}
      {!isOpened && <EnvelopeIntro onOpen={() => setIsOpened(true)} />}

      {/* Main content - shown after opening */}
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <HeroSection />
            <CountdownTimer />
            <InvitationText />
            <EventDetails />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
