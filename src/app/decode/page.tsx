"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Target, Lightbulb, BookOpen } from "lucide-react"
import { Section } from "@/components/section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Lasso & Check",
    description: "Simply lasso your work area and click 'Check Answers' - no uploading or scanning needed"
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Mistake Detection",
    description: "AI highlights errors and identifies which specific step contains the mistake"
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Smart Hints",
    description: "Provides hints to fix errors rather than direct answers, making it a true educational tool"
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Practice Problems",
    description: "Generates example problems to help reinforce understanding and fix similar errors"
  }
]

const demoSteps = [
  {
    step: "1",
    title: "Lasso your work area",
    description: "Select the specific work area you want to check using the lasso tool"
  },
  {
    step: "2",
    title: "Click 'Check Answers'",
    description: "The system analyzes your work instantly without any need for uploading or scanning"
  },
  {
    step: "3",
    title: "AI highlights errors",
    description: "System highlights mistakes and identifies which specific step contains the error"
  },
  {
    step: "4",
    title: "Get hints & practice",
    description: "Receive hints to fix errors and example problems to reinforce understanding"
  }
]

const whyNow = [
  "Vision-LLMs enable real-time feedback on handwritten work",
  "On-device capture makes the process seamless and private",
  "Strong demand for formative assessment tools in education",
  "AI can provide personalized learning at scale"
]

export default function DecodePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="secondary" className="mb-4">
                  New Startup
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Decode
                </h1>
                <p className="mt-6 text-xl text-muted-foreground">
                  A notebook app that finds mistakes in student work and helps them learn to fix them.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  No uploading or scanning needed. Just lasso your work, click 'Check Answers', and get instant feedback with hints and practice problems - not just direct answers.
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-base px-8 py-3" disabled>
                    Join the Waitlist
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-base px-8 py-3">
                    Learn More
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="h-24 w-24 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Decode</h3>
                    <p className="text-muted-foreground">AI-Powered Learning Companion</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* What it is */}
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
                What is Decode?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                An educational tool that helps students learn by providing hints and practice problems, not just answers. No uploading required - just lasso and check.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Demo Flow */}
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
                How it Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A simple 4-step process that transforms how students learn from their mistakes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {demoSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="h-full">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">
                        {step.step}
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  {index < demoSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Why Now */}
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
                Why Now?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The perfect convergence of technology and educational needs.
              </p>
            </motion.div>

            <div className="space-y-6 max-w-2xl mx-auto">
              {whyNow.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-center space-x-4"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground text-center">{reason}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Transform Learning?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the waitlist to be among the first to experience AI-powered learning assistance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base px-8 py-3" disabled>
                  Join the Waitlist
                </Button>
                <Button variant="outline" size="lg" className="text-base px-8 py-3">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  )
}
