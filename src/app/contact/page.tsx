"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react"
import { Section } from "@/components/section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { socialLinks } from "@/lib/data"

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    description: "Get in touch for collaborations, opportunities, or just to say hello",
    value: "shifamehreen.here@gmail.com",
    href: "mailto:shifamehreen.here@gmail.com",
    action: "Send Email"
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    title: "LinkedIn",
    description: "Connect with me professionally and follow my updates",
    value: "linkedin.com/in/shifa-mehreen-8178111b8",
    href: "https://linkedin.com/in/shifa-mehreen-8178111b8/",
    action: "Connect"
  },
  {
    icon: <Github className="h-6 w-6" />,
    title: "GitHub",
    description: "Explore my open-source projects and contributions",
    value: "github.com/shifamehreen525",
    href: "https://github.com/shifamehreen525",
    action: "View Profile"
  }
]

const info = [
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "Maryland, USA"
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Availability",
    value: "Open to opportunities"
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Section className="pt-20 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Get In Touch
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's connect and discuss opportunities, collaborations, or just have a chat about technology and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Contact Methods */}
      <Section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          {method.icon}
                        </div>
                        <CardTitle className="text-xl">{method.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base">
                        {method.description}
                      </CardDescription>
                      <div className="text-sm text-muted-foreground">
                        {method.value}
                      </div>
                      <Button asChild className="w-full">
                        <a href={method.href} target={method.href.startsWith('mailto:') ? '_self' : '_blank'} rel="noopener noreferrer">
                          {method.action}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Additional Info */}
      <Section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                ML Engineer & Builder passionate about turning ideas into usable products.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Current Focus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Graduate Assistant at University of Maryland</li>
                      <li>• Building AI systems for real-world applications</li>
                      <li>• Mentoring 100+ undergraduate students</li>
                      <li>• Developing Decode - AI-powered learning platform</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Let's Collaborate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Machine Learning & AI projects</li>
                      <li>• Full-stack development opportunities</li>
                      <li>• Research collaborations</li>
                      <li>• Speaking engagements</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12"
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {info.map((item, index) => (
                      <div key={item.label} className="flex items-center space-x-3">
                        <div className="text-muted-foreground">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">{item.label}</div>
                          <div className="text-sm text-muted-foreground">{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  )
}
