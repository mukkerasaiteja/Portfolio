import { ReactIcon } from '../Icons/ReactIcon'
import { SpringIcon } from '../Icons/SpringIcon'
import { NodeIcon } from '../Icons/NodeIcon'
import { TypeScriptIcon } from '../Icons/TypeScriptIcon'
import {
  gitHubLink,
  gitLinkForJobRadar,
  gitLinkForPortfolio,
  jobRadarLink,
  linkedInLink,
  portfolioLink,
  twitterLink,
} from '@/lib/static-links'

export const RESUME = {
  name: 'Sai Teja Mukkera',
  about: 'Currently shipping with',
  currentTechStack: [
    { tech: 'React', icon: <ReactIcon /> },
    { tech: 'Spring Boot', icon: <SpringIcon /> },
    { tech: 'Node.js', icon: <NodeIcon /> },
    { tech: 'TypeScript', icon: <TypeScriptIcon /> },
  ],
  summary:
    ' Full Stack Developer with a passion for building scalable and efficient web applications.',
  location: 'United States',
  email: 'mukkerasaiteja@gmail.com',
  github: gitHubLink,
  linkedin: linkedInLink,
  twitter: twitterLink,
  projects: [
    {
      title: 'Job Radar',
      description:
        'A job search platform that helps users find job opportunities based on their skills and experience.',
      tech: ['React', 'Javascript', 'Node.js', 'Tailwind CSS', 'Shadcn UI'],
      link: jobRadarLink,
      github: gitLinkForJobRadar,
      image: '/Job-Radar.jpg',
    },
    {
      title: 'Portfolio Website',
      description:
        'A portfolio website built with React, Typescript, Shadcn UI and Tailwind CSS.',
      tech: ['React', 'Typescript', 'Shadcn UI', 'Tailwind CSS'],
      link: portfolioLink,
      github: gitLinkForPortfolio,
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
      school: 'University of Central Missouri',
      degree: 'Master of Science in Computer Science',
      period: 'Jan,2024 - Dec,2025',
      location: 'Warrensburg, Missouri',
    },
    {
      school: 'Guru Nanak Institute of Technology',
      degree:
        'Bachelor of Technology in Electronics and Communication Engineering',
      period: 'Aug,2015 - May,2019',
      location: 'Hyderabad, India',
    },
  ],
  skills: {
    languages: ['Java', 'JavaScript', 'TypeScript', 'Python'],
    frontend: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    backend: [
      'Spring Boot',
      'Node.js',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'Prisma ORM',
    ],
    tools: ['Git', 'Docker', 'AWS'],
  },
}
