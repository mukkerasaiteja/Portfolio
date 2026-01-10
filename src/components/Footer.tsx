import { RESUME } from '@/data/resume'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

export const Footer = () => {
  return (
    <footer className="mx-auto mt-10 w-full max-w-2xl border-t py-6 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <p className="text-sm font-medium text-zinc-400">
            &copy; {new Date().getFullYear()} {RESUME.name}
          </p>
        </div>

        <div className="flex gap-4">
          {RESUME.github && (
            <a
              href={RESUME.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          )}
          {RESUME.twitter && (
            <a
              href={RESUME.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="X(Twitter)"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>
          )}
          {RESUME.linkedin && (
            <a
              href={RESUME.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-blue-700"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          )}
          {RESUME.email && (
            <a
              href={`mailto:${RESUME.email}`}
              className="text-muted-foreground transition-colors hover:text-[#EA4335]"
              aria-label="Email"
            >
              <SiGmail className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
