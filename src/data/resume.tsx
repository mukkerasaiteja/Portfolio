import { ReactIcon } from '../Icons/ReactIcon'
import { SpringIcon } from '../Icons/SpringIcon'
import { NodeIcon } from '../Icons/NodeIcon'
import { TypeScriptIcon } from '../Icons/TypeScriptIcon'

export const RESUME = {
  name: 'Sai Teja Mukkera',
  initials: 'STM',
  role: 'Software Engineer',
  about: 'Currently shipping with',
  currentTechStack: [
    { tech: 'React', icon: <ReactIcon /> },
    { tech: 'Spring Boot', icon: <SpringIcon /> },
    { tech: 'Node.js', icon: <NodeIcon /> },
    { tech: 'TypeScript', icon: <TypeScriptIcon /> },
  ],
  summary:
    ' Full Stack Developer with a passion for building clean, efficient, and user-centric web applications. Experienced in React, Node.js, and modern web technologies.',
  location: 'United States', // Update this
  email: 'contact@example.com', // Update this
  github: 'https://github.com/mukkerasaiteja', // Inferred from workspace path/user
  linkedin: 'https://linkedin.com/in/sai-teja-mukkera', // Inferred
  projects: [
    {
      title: 'Job Radar',
      description:
        'A job search platform that helps users find job opportunities based on their skills and experience.',
      tech: ['React', 'Javascript', 'Node.js', 'Tailwind CSS', 'Shadcn UI'],
      link: 'https:job-radar.vercel.app',
      github: 'https://github.com/mukkerasaiteja/job-radar',
      image: '/Job-Radar.jpg',
    },
    {
      title: 'Portfolio Website',
      description:
        'A portfolio website built with React, Typescript, Shadcn UI and Tailwind CSS.',
      tech: ['React', 'Typescript', 'Shadcn UI', 'Tailwind CSS'],
      link: 'https:saiteja-dev-portfolio.vercel.app',
      github: 'https://github.com/mukkerasaiteja/portfolio',
      image: '/portfolio.jpg',
    },
  ],
  experience: [
    {
      company: 'Tech Company Is Better',
      role: 'Senior Software Engineer',
      period: '2023 - Present',
      description:
        'Leading frontend development and mentoring junior developers.',
    },
    {
      company: 'Startup Inc',
      role: 'Full Stack Developer',
      period: '2021 - 2023',
      description: 'Built and shipped multiple features for the core product.',
    },
  ],
  education: [
    {
      school: 'University Name',
      degree: 'Master of Science in Computer Science',
      period: '2019 - 2021',
    },
  ],
  skills: {
    languages: ['JavaScript', 'TypeScript', 'Python', 'Java'],
    frontend: ['React', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Django', 'PostgreSQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'AWS', 'Figma'],
  },
}
