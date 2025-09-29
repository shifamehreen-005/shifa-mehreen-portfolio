import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shifa Mehreen - Data Scientist',
  description: 'Data Scientist — turning ideas into usable products. I design, deploy, and iterate AI systems end-to-end: research → product.',
  keywords: ['Machine Learning', 'AI', 'Data Science', 'Full-Stack Development', 'Cloud Computing', 'ML Engineer'],
  authors: [{ name: 'Shifa Mehreen' }],
  creator: 'Shifa Mehreen',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shifamehreen.github.io/shifa-mehreen-portfolio',
    title: 'Shifa Mehreen - Data Scientist',
    description: 'Data Scientist — turning ideas into usable products. I design, deploy, and iterate AI systems end-to-end: research → product.',
    siteName: 'Shifa Mehreen Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shifa Mehreen - Data Scientist',
    description: 'Data Scientist — turning ideas into usable products. I design, deploy, and iterate AI systems end-to-end: research → product.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeToggle />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
