"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/section"
import { Timeline } from "@/components/timeline"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { experiences, skills } from "@/lib/data"

export default function ExperiencePage() {
  const workExperiences = experiences.filter(exp => exp.type === 'work')
  const educationExperiences = experiences.filter(exp => exp.type === 'education')

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
                Experience
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
                My journey in machine learning, software engineering, and data science.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Work Experience Timeline */}
      <Section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Professional Experience
              </h2>
              <p className="text-lg text-muted-foreground">
                Building AI systems and mentoring students across industry and academia.
              </p>
            </motion.div>
            
            <Timeline experiences={workExperiences} />
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Education
              </h2>
              <p className="text-lg text-muted-foreground">
                Academic foundation in Computer Science and Data Science.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationExperiences.map((education, index) => (
                <motion.div
                  key={education.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{education.title}</CardTitle>
                          <CardDescription className="text-base mt-1">
                            {education.company}
                          </CardDescription>
                          <p className="text-sm text-muted-foreground mt-2">
                            {education.period}
                          </p>
                        </div>
                        <Badge variant="secondary">Education</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {education.description.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Technical Skills
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Technologies and tools I work with across machine learning, cloud computing, and full-stack development.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
