"use client"

import { motion } from "framer-motion"
import { Heart, MessageCircle } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { supabase } from "@/lib/supabase"

const ROTATIONS = [-2.5, 1.2, -1, 2, -1.8, 0.8, -2, 1.5, -0.5, 2.2]

interface GuestEntry {
  id: number
  name: string
  msg: string
  t: number
}

export function Guestbook() {
  const [name, setName] = useState("")
  const [msg, setMsg] = useState("")
  const [entries, setEntries] = useState<GuestEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const latestT = useRef(0)

  useEffect(() => {
    fetchAll()
    const interval = setInterval(fetchNew, 2000)
    return () => clearInterval(interval)
  }, [])

  async function fetchAll() {
    try {
      const { data, error } = await supabase
        .from("guestbook")
        .select("*")
        .order("t", { ascending: false })
      if (error) {
        console.error("Guestbook fetchAll xatosi:", error)
      } else if (data && data.length > 0) {
        setEntries(data)
        latestT.current = data[0].t
      }
    } catch (err) {
      console.error("Guestbook fetchAll xatosi:", err)
    } finally {
      setLoading(false)
    }
  }

  async function fetchNew() {
    try {
      const { data, error } = await supabase
        .from("guestbook")
        .select("*")
        .gt("t", latestT.current)
        .order("t", { ascending: false })
      if (error) {
        console.error("Guestbook fetchNew xatosi:", error)
      } else if (data && data.length > 0) {
        setEntries((prev) => [...data, ...prev])
        latestT.current = data[0].t
      }
    } catch (err) {
      console.error("Guestbook fetchNew xatosi:", err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !msg.trim() || submitting) return
    setSubmitting(true)
    setError(null)
    try {
      const entry = { name: name.trim(), msg: msg.trim(), t: Date.now() }
      const { error } = await supabase.from("guestbook").insert(entry)
      if (error) {
        console.error("Guestbook insert xatosi:", error)
        setError("Tilak saqlanmadi. Birozdan so'ng qayta urinib ko'ring.")
      } else {
        setName("")
        setMsg("")
      }
    } catch (err) {
      console.error("Guestbook insert xatosi:", err)
      setError("Tilak saqlanmadi. Birozdan so'ng qayta urinib ko'ring.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--cream)] via-white to-[var(--cream)]" />

      <div className="relative z-10 mx-auto px-4 sm:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-14"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <MessageCircle className="w-8 h-8 mx-auto text-[#c9a050]" />
          </motion.div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Yaxshi Tilaklar
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-4">
            Bizga eng chiroyli tilaklaringizni qoldiring
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c9a050] to-transparent mx-auto" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-lg mx-auto mb-10"
          autoComplete="off"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={40}
            placeholder="Ismingiz"
            required
            className="w-full font-sans text-lg text-foreground bg-white border border-[#e0c486]/70 rounded-xl px-4 py-3 outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/18 transition-all"
          />
          <textarea
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            maxLength={240}
            placeholder="Tilak va tabriklaringiz..."
            required
            rows={4}
            className="w-full font-sans text-lg text-foreground bg-white border border-[#e0c486]/70 rounded-xl px-4 py-3 outline-none focus:border-[#c9a050] focus:ring-2 focus:ring-[#c9a050]/18 transition-all resize-y"
          />
          <motion.button
            type="submit"
            disabled={submitting}
            whileHover={{ scale: submitting ? 1 : 1.02 }}
            whileTap={{ scale: submitting ? 1 : 0.98 }}
            className="relative w-full py-4 rounded-xl overflow-hidden border-none cursor-pointer disabled:opacity-70"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#9a7430] via-[#c9a050] to-[#9a7430]" />
            {!submitting && (
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 0 }}
              />
            )}
            <span className="relative z-10 flex items-center justify-center gap-2 text-white font-semibold text-base">
              <Heart className="w-4 h-4" fill="currentColor" />
              {submitting ? "Saqlanmoqda..." : "Tilak qoldirish"}
            </span>
          </motion.button>
          {error && (
            <p className="text-center text-sm text-red-500">{error}</p>
          )}
        </motion.form>

        {loading ? (
          <div className="text-center text-muted-foreground opacity-60">Yuklanmoqda...</div>
        ) : entries.length === 0 ? (
          <p className="text-muted-foreground text-center opacity-80">
            Hozircha tilaklar yo&apos;q — birinchi bo&apos;lib yozing! 💛
          </p>
        ) : (
          <div className="columns-2 sm:columns-3 gap-3">
            {entries.map((entry, i) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: Math.min(i * 0.04, 0.4) }}
                className="break-inside-avoid mb-3 inline-block w-full"
                style={{ rotate: `${ROTATIONS[i % ROTATIONS.length]}deg` }}
              >
                <div className="bg-white border border-[#e0c486]/50 rounded-lg px-3 py-3 shadow-sm text-left hover:shadow-md transition-shadow">
                  <div className="font-serif text-[#9a7430] text-sm mb-1 flex items-center gap-1.5">
                    <Heart className="w-3 h-3 flex-shrink-0" fill="currentColor" />
                    <span className="truncate">{entry.name}</span>
                  </div>
                  <div className="text-muted-foreground text-sm leading-snug">{entry.msg}</div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
