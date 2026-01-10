import { RESUME } from '@/data/resume'

export function Experience() {
  return (
    <section id="experience" className="space-y-16 py-16 md:py-24">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
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
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Education
        </h2>
        <div className="space-y-6">
          {RESUME.education.map((edu, index) => (
            <div
              key={index}
              className="hover:bg-muted/50 flex flex-col justify-between rounded-lg border-b p-2 pb-4 transition-colors last:border-0"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{edu.school}</h3>
                  <p className="text-muted-foreground text-sm">{edu.degree}</p>
                </div>
                <span className="text-muted-foreground text-sm tabular-nums">
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
