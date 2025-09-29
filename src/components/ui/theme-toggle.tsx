"use client"

import * as React from "react"

export function ThemeToggle() {
  React.useEffect(() => {
    // Always set to dark mode
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  return null
}
