import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              <span className="text-slate-800 dark:text-white">Dev</span>
              <span className="text-slate-500">Portfolio</span>
            </Link>
            {/* <p className="text-slate-600 dark:text-slate-400 mt-2"></p> */}
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://github.com/vedanshmdev"
                target="_blank"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/vedanshmdev/"
                target="_blank"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com/vedanshmdev"
                target="_blank"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="mailto:vedanshmdev@gmail.com"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">© {currentYear} Vedansh Mishra. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
