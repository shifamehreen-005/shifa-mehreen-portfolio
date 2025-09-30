"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LinkButton } from "@/components/link-button"
import { Section } from "@/components/section"
import { socialLinks } from "@/lib/data"

const highlights = [
  {
    title: "Experience",
    description: "ML Engineer at Tata Elxsi, Graduate Assistant at UMD",
    href: "/experience",
    icon: "💼"
  },
  {
    title: "Projects",
    description: "AI systems, multi-agent platforms, and full-stack applications",
    href: "/projects",
    icon: "🚀"
  },
  {
    title: "Awards",
    description: "UMD AI Competition Runner-Up, JPMC CodeForGood Winner",
    href: "/awards",
    icon: "🏆"
  },
  {
    title: "Decode — New",
    description: "AI-powered notebook app for student learning",
    href: "/decode",
    icon: "📚"
  }
]


export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Shifa Mehreen
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
                Data Scientist
              </p>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                I design, deploy, and iterate AI systems end-to-end: research → product.
              </p>
            </motion.div>


            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <LinkButton href="/projects" size="lg" className="text-base px-8 py-3">
                Projects
              </LinkButton>
              <LinkButton href="/experience" variant="outline" size="lg" className="text-base px-8 py-3">
                Experience
              </LinkButton>
              <LinkButton href="/decode" variant="outline" size="lg" className="text-base px-8 py-3">
                Decode (New)
              </LinkButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex justify-center space-x-6"
            >
              <Button variant="ghost" size="icon" asChild>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={`mailto:${socialLinks.email}`}>
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Highlights Section */}
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Explore My Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover my experience, projects, achievements, and latest startup venture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    // href={highlight.href}
                    
                    href = {`${process.env.NODE_ENV === 'production' ? '/shifa-mehreen-portfolio' : ''}${highlight.href}`}
                    className="block h-full hover:no-underline"
                  >
                    <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                            {highlight.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors break-words">
                              {highlight.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed break-words">
                              {highlight.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
