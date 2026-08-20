"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Clock, Heart, Navigation } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"

interface EventCardProps {
  num: string
  tag: string
  date: string
  year: string
  time: string
  venue: string
  place: string
  mapsUrl: string
  calDate: string
  delay?: number
}

function toCalDate(fullDate: string) {
  const [day, month, year] = fullDate.split(".")
  return `${year}${month}${day}`
}

function addHours(time: string, hours: number) {
  const [h, m] = time.split(":").map(Number)
  const total = h * 60 + m + hours * 60
  const endH = Math.floor(total / 60) % 24
  const endM = total % 60
  return `${String(endH).padStart(2, "0")}${String(endM).padStart(2, "0")}`
}

function EventCard({ num, tag, date, year, time, venue, place, mapsUrl, calDate, delay = 0 }: EventCardProps) {
  const openMaps = () => window.open(mapsUrl, "_blank")

  const downloadIcs = () => {
    const title = `${process.env.NEXT_PUBLIC_GROOM_NAME || "Javlon"} & ${process.env.NEXT_PUBLIC_BRIDE_NAME || "Nargiza"} — ${venue}`
    const startTime = time.replace(":", "") + "00"
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Wedding//UZ",
      "BEGIN:VEVENT",
      `UID:${calDate}-wedding@toy`,
      `DTSTART:${calDate}T${startTime}`,
      `DTEND:${calDate}T${addHours(time, 3)}00`,
      `SUMMARY:${title}`,
      `LOCATION:${venue}, ${place}`,
      "DESCRIPTION:Nikoh marosimiga taklif",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n")

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `toy-${calDate}.ics`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative bg-white rounded-[1.2rem] border border-[#e0c486]/55 overflow-hidden flex flex-col items-center text-center"
        style={{
          padding: "clamp(1.6rem,4vw,2.6rem) clamp(1.4rem,4vw,2.4rem)",
          boxShadow: "0 18px 44px rgba(154,116,48,.12)",
        }}
      >
        {/* Corner accents */}
        <span className="absolute top-0 left-0 w-[4.5rem] h-[4.5rem] border-t-2 border-l-2 border-[#c9a050] rounded-tl-[1.2rem]" />
        <span className="absolute bottom-0 right-0 w-[4.5rem] h-[4.5rem] border-b-2 border-r-2 border-[#c9a050] rounded-br-[1.2rem]" />

        {/* Event number */}
        <div className="w-12 h-12 rounded-full border-[1.5px] border-[#c9a050] flex items-center justify-center mb-4 font-serif text-[#9a7430] text-xl">
          {num}
        </div>

        <div className="text-[#9a7430] uppercase tracking-[0.26em] text-[0.72rem] font-semibold mb-4">
          {tag}
        </div>

        <div className="font-serif text-foreground" style={{ fontSize: "clamp(2rem,7vw,2.9rem)", lineHeight: 1 }}>
          {date}
          <span className="block text-[#9a7430] tracking-[0.3em] mt-2" style={{ fontSize: "0.42em" }}>
            {year}
          </span>
        </div>

        <div className="text-[#9a7430] flex items-center gap-1.5 justify-center mt-3 font-medium" style={{ fontSize: "clamp(1rem,2.6vw,1.15rem)" }}>
          <Clock className="w-4 h-4 flex-shrink-0" />
          {time}
        </div>

        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c9a050] to-transparent my-5" />

        <div className="font-serif text-foreground mb-1" style={{ fontSize: "clamp(1.3rem,3.6vw,1.7rem)" }}>
          {venue}
        </div>

        <div className="text-muted-foreground flex items-center gap-1 justify-center mb-6" style={{ fontSize: "clamp(1rem,2.6vw,1.15rem)" }}>
          <MapPin className="w-4 h-4 flex-shrink-0 text-[#c9a050]" />
          {place}
        </div>

        {/* QR kod */}
        <div className="mb-2 p-3 border border-[#e0c486]/70 rounded-xl bg-white">
          <QRCodeSVG
            value={mapsUrl}
            size={120}
            bgColor="#ffffff"
            fgColor="#16213e"
            level="M"
          />
        </div>
        <p className="text-muted-foreground text-xs tracking-wide mb-5">
          Manzilni QR orqali oching
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full mt-auto">
          <motion.button
            onClick={openMaps}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full py-4 rounded-[.8rem] overflow-hidden border-none cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#9a7430] via-[#c9a050] to-[#9a7430]" />
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 0 }}
            />
            <span className="relative z-10 flex items-center justify-center gap-2 text-white font-semibold text-base">
              <Navigation className="w-4 h-4" />
              Google xaritada ko&apos;rish
            </span>
          </motion.button>

          <motion.button
            onClick={downloadIcs}
            whileHover={{ backgroundColor: "#c9a050", color: "#fff" }}
            className="w-full py-[.85rem] rounded-[.8rem] border-[1.5px] border-[#c9a050] bg-transparent text-[#9a7430] font-semibold text-base flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200"
          >
            <Calendar className="w-4 h-4" />
            Kalendarga qo&apos;shish
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function EventDetails() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[var(--cream)] to-white" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #c9a050 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative circles */}
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 border border-[#c9a050]/10 rounded-full hidden sm:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 border border-[#c9a050]/10 rounded-full hidden sm:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <Heart className="w-8 h-8 mx-auto text-[#c9a050]" fill="currentColor" />
          </motion.div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            To&apos;y Marosimlari
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-4">
            To&apos;yimiz ikki shaharda — ikki marosimda nishonlanadi
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c9a050] to-transparent mx-auto" />
        </motion.div>

        {/* Two event cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <EventCard
            num="I"
            tag="Birinchi marosim"
            date={process.env.NEXT_PUBLIC_EVENT1_DATE || "06.06"}
            year={process.env.NEXT_PUBLIC_EVENT1_YEAR || "2026-yil"}
            time={process.env.NEXT_PUBLIC_EVENT1_TIME || "18:00"}
            venue={process.env.NEXT_PUBLIC_EVENT1_VENUE || "Oqsaroy to'yxonasi"}
            place={process.env.NEXT_PUBLIC_EVENT1_PLACE || "Buxoro viloyati, Romitan tumani"}
            mapsUrl={process.env.NEXT_PUBLIC_EVENT1_MAPS_URL || "https://www.google.com/maps/search/?api=1&query=Romitan+Buxoro"}
            calDate={toCalDate(process.env.NEXT_PUBLIC_EVENT1_FULL_DATE || "06.06.2026")}
            delay={0.2}
          />
          <EventCard
            num="II"
            tag="Ikkinchi marosim"
            date={process.env.NEXT_PUBLIC_EVENT2_DATE || "13.06"}
            year={process.env.NEXT_PUBLIC_EVENT2_YEAR || "2026-yil"}
            time={process.env.NEXT_PUBLIC_EVENT2_TIME || "18:00"}
            venue={process.env.NEXT_PUBLIC_EVENT2_VENUE || "Shohsaroy to'yxonasi"}
            place={process.env.NEXT_PUBLIC_EVENT2_PLACE || "Navoiy viloyati, Karmana tumani"}
            mapsUrl={process.env.NEXT_PUBLIC_EVENT2_MAPS_URL || "https://www.google.com/maps/search/?api=1&query=Karmana+Navoiy"}
            calDate={toCalDate(process.env.NEXT_PUBLIC_EVENT2_FULL_DATE || "13.06.2026")}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}
