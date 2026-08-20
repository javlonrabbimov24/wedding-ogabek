import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-serif',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin", "cyrillic"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const groomName = process.env.NEXT_PUBLIC_GROOM_NAME || "Javlon"
const brideName = process.env.NEXT_PUBLIC_BRIDE_NAME || "Nargiza"
const event1Date = process.env.NEXT_PUBLIC_EVENT1_FULL_DATE || "06.06.2026"
const event1Place = (process.env.NEXT_PUBLIC_EVENT1_PLACE || "Buxoro viloyati").split(",")[0]
const event2Date = process.env.NEXT_PUBLIC_EVENT2_FULL_DATE || "13.06.2026"
const event2Place = (process.env.NEXT_PUBLIC_EVENT2_PLACE || "Navoiy viloyati").split(",")[0]

const siteTitle = `${groomName} & ${brideName} | Nikoh Taklifnomasi`
const siteDescription = `Sizni to'yimizga taklif qilamiz! ${event1Date} — ${event1Place} | ${event2Date} — ${event2Place}`

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  generator: 'v0.app',
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    locale: 'uz_UZ',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#c9a050',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" className={`${playfair.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
