'use client'

import { useEffect } from 'react'

export default function ThemeInitializer() {
  useEffect(() => {
    // Set theme to dark by default to prevent hydration mismatch
    if (typeof window !== 'undefined') {
      document.documentElement.classList.add('dark')
      document.documentElement.style.colorScheme = 'dark'
    }
  }, [])

  return null
}
