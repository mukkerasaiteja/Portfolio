import { createContext, useContext, useRef, type RefObject } from 'react'

type SectionRefs = {
  hero: RefObject<HTMLDivElement | null>
  projects: RefObject<HTMLDivElement | null>
  skills: RefObject<HTMLDivElement | null>
  experience: RefObject<HTMLDivElement | null>
  contact: RefObject<HTMLDivElement | null>
}

type ScrollContextType = {
  refs: SectionRefs
  scrollToSection: (section: keyof SectionRefs) => void
}

const ScrollContext = createContext<ScrollContextType | null>(null)

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const refs: SectionRefs = {
    hero: useRef<HTMLDivElement | null>(null),
    projects: useRef<HTMLDivElement | null>(null),
    skills: useRef<HTMLDivElement | null>(null),
    experience: useRef<HTMLDivElement | null>(null),
    contact: useRef<HTMLDivElement | null>(null),
  }

  const scrollToSection = (section: keyof SectionRefs) => {
    refs[section].current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ScrollContext.Provider value={{ refs, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  )
}

export function useScroll() {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }
  return context
}
