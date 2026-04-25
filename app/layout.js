import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BottomMenu from '@/components/BottomMenu'
import VideoAutoplay from '@/components/VideoAutoplay'
import ScrollAnimations from '@/components/ScrollAnimations'
import { I18nProvider } from '@/lib/i18n'

export const metadata = {
  title: 'iBnk – Payments for Humans, Businesses & AI',
  description: 'iBnk is a cross-border payment and digital asset platform built for individuals, businesses, and AI agents. Smart routing across fiat and digital asset rails.',
  icons: {
    icon: '/images/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          <Navbar />
          {children}
          <Footer />
          <BottomMenu />
          <VideoAutoplay />
          <ScrollAnimations />
        </I18nProvider>
      </body>
    </html>
  )
}
