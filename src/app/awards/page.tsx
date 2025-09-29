"use client"

import { motion } from "framer-motion"
import { Trophy, Award } from "lucide-react"
import Image from "next/image"
import { Section } from "@/components/section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { awards } from "@/lib/data"

export default function AwardsPage() {
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
                Awards & Recognition
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
                Recognition for innovative solutions and impactful contributions to technology and society.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Awards Grid */}
      <Section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {awards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    {award.image && (
                      <div className="relative w-full">
                        <Image
                          src={award.image}
                          alt={`${award.title} - ${award.organization}`}
                          width={400}
                          height={300}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    )}
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            {award.title === 'Winner' ? (
                              <Trophy className="h-8 w-8 text-yellow-500" />
                            ) : (
                              <Award className="h-8 w-8 text-blue-500" />
                            )}
                          </div>
                          <div>
                            <CardTitle className="text-2xl">{award.title}</CardTitle>
                            <CardDescription className="text-lg mt-1">
                              {award.organization}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge 
                          variant={award.title === 'Winner' ? 'default' : 'secondary'}
                          className="text-sm px-3 py-1"
                        >
                          {award.year}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {award.description}
                      </p>
                      {award.project && (
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="text-muted-foreground">Related Project:</span>
                          <Badge variant="outline" className="text-xs">
                            {award.project}
                          </Badge>
                        </div>
                      )}
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
