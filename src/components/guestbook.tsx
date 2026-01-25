import Giscus from '@giscus/react'
import { motion } from 'framer-motion'
import { useTheme } from '@/components/theme-provider'

export function Guestbook() {
  const { theme } = useTheme()

  return (
    <section id="guestbook" className="space-y-10">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Guestbook
        </h1>
        <p className="text-muted-foreground max-w-[600px] pb-4 text-lg md:text-xl">
          Leave a permanent mark. Share thoughts, feedback, or just say hi.
        </p>
      </motion.div>

      {/* Main Giscus Widget Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="giscus-wrapper border-border/60 bg-card/50 min-h-[200px] rounded-2xl border-2 border-dashed p-4 backdrop-blur-sm sm:p-8"
      >
        <Giscus
          id="comments"
          repo="mukkerasaiteja/portfolio"
          repoId="R_kgDOQwUjzw"
          category="Show and tell"
          categoryId="DIC_kwDOQwUjz84C0poa"
          mapping="pathname"
          strict="0"
          reactionsEnabled="0"
          emitMetadata="0"
          inputPosition="bottom"
          theme={theme === 'dark' ? 'transparent_dark' : 'light'}
          lang="en"
          loading="eager"
        />
      </motion.div>
    </section>
  )
}
