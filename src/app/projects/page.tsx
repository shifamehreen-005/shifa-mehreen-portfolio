"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/section"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/data"

const categories = ['All', 'ML/AI', 'Full-Stack'] as const
type Category = typeof categories[number]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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
                Projects
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
                AI systems, multi-agent platforms, and full-stack applications that solve real-world problems.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Filter Tabs */}
      <Section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {category}
                  {category !== 'All' && (
                    <span className="ml-2 text-xs opacity-70">
                      ({projects.filter(p => p.category === category).length})
                    </span>
                  )}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-muted-foreground text-lg">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </Section>

    </div>
  )
}
