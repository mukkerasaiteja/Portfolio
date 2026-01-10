import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { RESUME } from '@/data/resume'
import { LuLinkedin } from 'react-icons/lu'
import { FaGithub } from 'react-icons/fa'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
})

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a static site, we usually use a service like Formspree or EmailJS
    // For now, we'll just log or alert
    console.log(values)
    const subject = encodeURIComponent(`New Message from ${values.name}`)
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`
    )
    window.location.href = `mailto:${RESUME.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="space-y-8 py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
        Contact
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-muted-foreground text-lg">
            Have a project in mind or just want to chat? Send me an email or
            connect on social media.
          </p>
          <div className="flex flex-col space-y-4">
            <a
              href={`mailto:${RESUME.email}`}
              className="text-muted-foreground hover:text-foreground flex items-center space-x-2 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>{RESUME.email}</span>
            </a>
            {RESUME.linkedin && (
              <a
                href={RESUME.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground flex items-center space-x-2 transition-colors"
              >
                <LuLinkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            )}
            {RESUME.github && (
              <a
                href={RESUME.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground flex items-center space-x-2 transition-colors"
              >
                <FaGithub className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
        <div className="bg-card/50 rounded-lg border p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
