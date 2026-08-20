"use client"

import { forwardRef, useState } from "react"
import { motion } from "framer-motion"
import { Music, VolumeX } from "lucide-react"

export const BackgroundMusic = forwardRef<HTMLAudioElement>((_, ref) => {
  const [muted, setMuted] = useState(false)
  const [visible, setVisible] = useState(false)

  return (
    <>
      <audio ref={ref} src="/musiqa.mp3" loop muted={muted} onPlay={() => setVisible(true)} />
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Musiqani yoqish" : "Musiqani o'chirish"}
          className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-[#e0c486]/70 shadow-lg flex items-center justify-center text-[#9a7430] cursor-pointer"
        >
          <motion.span
            animate={{ rotate: muted ? 0 : 360 }}
            transition={{ duration: 6, repeat: muted ? 0 : Infinity, ease: "linear" }}
            className="flex items-center justify-center"
          >
            {muted ? <VolumeX className="w-5 h-5" /> : <Music className="w-5 h-5" />}
          </motion.span>
        </motion.button>
      )}
    </>
  )
})
BackgroundMusic.displayName = "BackgroundMusic"
