import { RESUME } from '@/data/resume'
import { LocationIcon } from '@/Icons/LocationIcon'

export function Experience() {
  return (
    <section id="experience" className="space-y-16 py-16 md:py-24">
      <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
          Experience
        </h2>
        <div className="space-y-8">
          {RESUME.experience.map((exp, index) => (
            <div
              key={index}
              className="border-muted relative flex flex-col gap-2 border-l-2 pl-6 md:flex-row md:justify-between md:gap-8"
            >
              <div className="bg-background border-primary absolute top-0 -left-[9px] h-4 w-4 rounded-full border-2" />
              <div className="flex flex-col space-y-1">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-muted-foreground font-medium">
                  {exp.company}
                </p>
              </div>
              <div className="flex flex-col space-y-1 md:items-end">
                <span className="text-muted-foreground text-sm tabular-nums">
                  {exp.period}
                </span>
                <p className="text-muted-foreground/90 max-w-lg text-sm leading-relaxed md:text-right">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
          Education
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {RESUME.education.map((edu, index) => (
            <div
              key={index}
              className="group border-border bg-card hover:border-primary/50 dark:border-border/50 dark:bg-card/50 relative overflow-hidden rounded-xl border p-4 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-6"
            >
              {/* Subtle gradient accent */}
              <div className="from-primary/5 absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative space-y-4">
                {/* Header with school name */}
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {edu.school}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {edu.degree}
                  </p>
                </div>

                {/* Divider */}
                <div className="bg-border/50 h-px w-full" />

                {/* Footer with period and location */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground tabular-nums">
                    {edu.period}
                  </span>
                  <div className="text-muted-foreground flex items-center gap-1.5">
                    <LocationIcon className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
