import { useState } from 'react'
import {
  SiAmazonwebservices,
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import {
  LuCode,
  LuLayers,
  LuServer,
  LuWrench,
  LuLayoutGrid,
} from 'react-icons/lu'
import { RESUME } from '@/data/resume'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

// Map skills to their icons and brand colors
const skillsData: Record<string, { icon: React.ElementType; color: string }> = {
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  Python: { icon: SiPython, color: '#4B8BBE' },
  Java: { icon: FaJava, color: '#ED8B00' },
  React: { icon: SiReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#FFFFFF' },
  'Vue.js': { icon: SiVuedotjs, color: '#42B883' },
  HTML5: { icon: SiHtml5, color: '#E34F26' },
  CSS3: { icon: SiCss3, color: '#1572B6' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38BDF8' },
  'Node.js': { icon: SiNodedotjs, color: '#68A063' },
  Express: { icon: SiExpress, color: '#FFFFFF' },
  Django: { icon: SiDjango, color: '#44B78B' },
  PostgreSQL: { icon: SiPostgresql, color: '#4169E1' },
  MongoDB: { icon: SiMongodb, color: '#4DB33D' },
  Git: { icon: SiGit, color: '#F05032' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  AWS: { icon: SiAmazonwebservices, color: '#FF9900' },
  Figma: { icon: SiFigma, color: '#A259FF' },
}

type Category = 'all' | 'languages' | 'frontend' | 'backend' | 'tools'

const categories: { id: Category; label: string; icon: React.ElementType }[] = [
  { id: 'all', label: 'All Skills', icon: LuLayoutGrid },
  { id: 'languages', label: 'Languages', icon: LuCode },
  { id: 'frontend', label: 'Frontend', icon: LuLayers },
  { id: 'backend', label: 'Backend', icon: LuServer },
  { id: 'tools', label: 'Tools', icon: LuWrench },
]

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const getSkillsByCategory = (category: Category): string[] => {
    if (category === 'all') {
      return [
        ...RESUME.skills.languages,
        ...RESUME.skills.frontend,
        ...RESUME.skills.backend,
        ...RESUME.skills.tools,
      ]
    }
    return RESUME.skills[category] || []
  }

  const getCountByCategory = (category: Category): number => {
    return getSkillsByCategory(category).length
  }

  const currentSkills = getSkillsByCategory(activeCategory)

  return (
    <section id="skills" className="container px-24 py-16 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-10 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
      >
        Skills
      </motion.h2>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-8 flex flex-wrap gap-2"
      >
        {categories.map((category) => {
          const Icon = category.icon
          const count = getCountByCategory(category.id)
          const isActive = activeCategory === category.id

          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300',
                isActive
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card hover:border-primary/50 hover:bg-primary/10'
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{category.label}</span>
              <span
                className={cn(
                  'rounded-full px-2 py-0.5 text-xs',
                  isActive
                    ? 'bg-primary-foreground/20 text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                )}
              >
                {count}
              </span>
            </button>
          )
        })}
      </motion.div>

      {/* Skills Grid */}
      <motion.div layout className="flex flex-wrap gap-3">
        <AnimatePresence mode="popLayout">
          {currentSkills.map((skill) => {
            const data = skillsData[skill]
            if (!data) return null
            const Icon = data.icon

            return (
              <motion.div
                key={skill}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="border-border bg-card hover:border-primary/50 hover:bg-primary/5 flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300"
              >
                <div className="bg-background/50 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  <Icon className="h-4 w-4" style={{ color: data.color }} />
                </div>
                <span className="cursor-default pr-1">{skill}</span>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
