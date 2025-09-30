import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface LinkButtonProps {
  href: string
  children: React.ReactNode
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  external?: boolean
}

const getBasePath = () => process.env.NODE_ENV === 'production' ? '/shifa-mehreen-portfolio' : ''

export function LinkButton({ 
  href, 
  children, 
  variant = "default", 
  size = "default", 
  className,
  external = false
}: LinkButtonProps) {
  if (external) {
    return (
      <Button variant={variant} size={size} className={cn(className)} asChild>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </Button>
    )
  }

  const fullHref = href.startsWith('http') ? href : `${getBasePath()}${href}`

  return (
    <Button variant={variant} size={size} className={cn(className)} asChild>
      <Link href={fullHref}>
        {children}
      </Link>
    </Button>
  )
}
