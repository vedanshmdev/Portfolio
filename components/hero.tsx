"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const Hero = () => {
  const [typedText, setTypedText] = useState("")
  const fullText = "Full Stack Developer"
  const typingSpeed = 100

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-slate-700 dark:text-slate-300">Vedansh Mishra</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-400 mb-6 h-8">
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
            I build exceptional digital experiences with modern technologies. Passionate about creating efficient,
            scalable, and user-friendly applications.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button asChild size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/vedanshmdev"
              target="_blank"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/vedanshmdev/"
              target="_blank"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://twitter.com/vedanshmdev"
              target="_blank"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-700 shadow-lg">
            <img
              src="/photo.jpg"
              alt="Developer Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.2,
          }}
        >
          <Link
            href="#about"
            className="flex flex-col items-center text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
