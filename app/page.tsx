"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { EnvelopeIntro } from "@/components/wedding/envelope-intro"
import { HeroSection } from "@/components/wedding/hero-section"
import { InvitationText } from "@/components/wedding/invitation-text"
import { EventDetails } from "@/components/wedding/event-details"
import { Guestbook } from "@/components/wedding/guestbook"
import { Footer } from "@/components/wedding/footer"

export default function WeddingInvitation() {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <main className="min-h-screen">
      {!isOpened && <EnvelopeIntro onOpen={() => setIsOpened(true)} />}

      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <HeroSection />
            <InvitationText />
            <EventDetails />
            <Guestbook />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
