"use client"

import { motion } from "framer-motion"
import { Experience } from "@/types"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface TimelineProps {
  experiences: Experience[]
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative flex justify-center">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />
      
      <div className="space-y-8 w-full max-w-2xl">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            className="relative flex items-start justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 h-3 w-3 rounded-full bg-primary md:left-1/2 md:-translate-x-1.5 top-6" />
            
            {/* Content */}
            <div className="ml-12 w-full md:ml-0">
              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{experience.title}</h3>
                    <Badge variant={experience.type === 'work' ? 'default' : 'secondary'}>
                      {experience.type === 'work' ? 'Work' : 'Education'}
                    </Badge>
                  </div>
                  <h4 className="text-base font-medium text-primary">{experience.company}</h4>
                  <p className="text-sm text-muted-foreground">{experience.period}</p>
                </div>
                
                <ul className="mt-4 space-y-2">
                  {experience.description.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
