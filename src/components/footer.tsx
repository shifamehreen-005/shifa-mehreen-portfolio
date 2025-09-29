import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { socialLinks } from "@/lib/data"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Shifa Mehreen</h3>
            <p className="text-sm text-muted-foreground">
              Data Scientist — turning ideas into usable products.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/experience" className="text-sm text-muted-foreground hover:text-primary">
                Experience
              </Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">
                Projects
              </Link>
              <Link href="/awards" className="text-sm text-muted-foreground hover:text-primary">
                Awards
              </Link>
              <Link href="/decode" className="text-sm text-muted-foreground hover:text-primary">
                Decode
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="text-muted-foreground hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
