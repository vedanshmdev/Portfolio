"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projectsData = [
  {
    id: 1,
    title: "GitHubFolio.in",
    description: "A GitHub portfolio website with AI-based reviews of your GitHub profile. 1300+ visitors in 2 months.",
    image: "/githubfolio_homepage.png",
    tags: ["TypeScript", "Next.js", "Postgress", "Prisma", "Next-auth", "Gemini", "AWS EC2"],
    demoUrl: "https://githubfolio.in",
    githubUrl: "https://github.com/vedanshmdev/githubfolio",
  },
  {
    id: 2,
    title: "Furnistore",
    description: "A React-based furniture e-commerce frontend built entirely with React.js and Tailwind CSS, developed to deepen my hands-on experience with these technologies.",
    image: "/ecommerce_homepage-1.png",
    tags: ["JavaScript", "React", "Tailwind CSS", "Cloudinary", "Vercel"],
    demoUrl: "https://furnistore-ecommerce.vercel.app/",
    githubUrl: "https://github.com/vedanshmdev/ecommerce",
  },
  {
    id: 3,
    title: "Social Weave",
    description: "A full-featured social media app that includes all core functionalities, along with a real-time chat system.",
    image: "/socialweave.png",
    tags: ["JavaScript", "React", "Node.js", "MongoDB", "Coudinary", "Render"],
    demoUrl: "https://thread-app-initiald-deploy-version.onrender.com/",
    githubUrl: "https://github.com/vedanshmdev/thread-app",
  },
  {
    id: 4,
    title: "Often Events",
    description: "A Next.js website where users can create event invites with custom backgrounds (images/videos) and key details like event name, ticket price, dates, and capacity.",
    image: "/Often.png",
    tags: ["JavaScript", "Next.js", "Tailwind CSS", "Zustand", "Remotion"],
    demoUrl: "https://oftendev.vercel.app/",
    githubUrl: "https://github.com/vedanshmdev/Often",
  },{
    id: 5,
    title: "Unboxing Game",
    description: "A gaming website built with React and Node.js, where users spend coins to run a slider and win prizes based on their ticket value and probability.",
    image: "/Vedansh_spinning.png",
    tags: ["JavaScript", "React", "Node.js", "Tailwind CSS", "AWS Amplify"],
    demoUrl: "https://main.d3rorkfeyy5adx.amplifyapp.com/",
    githubUrl: "https://github.com/vedanshmdev/unboxing",
  },
  {
    id: 6,
    title: "Soshin Dashboard",
    description: "A clean dashboard built using react.js",
    image: "/ShoshinTech.png",
    tags: ["JavaScript", "React", "Tailwind CSS"],
    demoUrl: "https://shoshin-tch.vercel.app/",
    githubUrl: "http://github.com/vedanshmdev/Shoshin-Tech",
  },
  {
    id: 7,
    title: "URL Shortner",
    description: "A MERN stack-based URL shortener that converts long URLs into short, shareable links for easy sharing across platforms.",
    image: "/URL_Shortner1.png",
    tags: ["JavaScript", "React", "Node.js", "MongoDB"],
    demoUrl: "https://urlshortners.vercel.app/",
    githubUrl: "https://github.com/vedanshmdev/URL_Shortner",
  },
  {
    id: 8,
    title: "Guestara",
    description: "Menu Management Backend: A Node.js and Express-based backend API for creating, managing, and retrieving menu categories, subcategories, and items with support for tax calculation, search, and editing.",
    image: "/Guestara.png",
    tags: ["JavaScript", "React", "Node.js", "MongoDB"],
    demoUrl: "https://guestara-eight.vercel.app/",
    githubUrl: "https://github.com/vedanshmdev/Guestara",
  },
]

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(6)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const showMoreProjects = () => {
    setVisibleProjects(projectsData.length)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div ref={ref}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projectsData.slice(0, visibleProjects).map((project) => (
          <motion.div key={project.id} variants={item}>
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={project.demoUrl} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {visibleProjects < projectsData.length && (
        <div className="text-center mt-10">
          <Button onClick={showMoreProjects} variant="outline">
            Show More Projects
          </Button>
        </div>
      )}
    </div>
  )
}

export default Projects
