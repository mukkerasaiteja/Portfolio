import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { ScrollProvider } from '@/context/scroll-context'
import { Navbar } from '@/components/navbar'
import { HomePage } from '@/pages/home-page'
import { GuestbookPage } from '@/pages/guestbook-page'
import { Footer } from './components/Footer'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ScrollProvider>
          <div className="text-foreground selection:bg-foreground selection:text-background relative min-h-screen font-sans antialiased">
            <div className="fixed inset-0 -z-10 bg-white dark:bg-black">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
              <div className="absolute inset-0 bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
            </div>
            <Analytics />
            <Navbar />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/guestbook" element={<GuestbookPage />} />
            </Routes>

            <Footer />
          </div>
        </ScrollProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
