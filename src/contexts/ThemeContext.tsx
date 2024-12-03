
'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme

    if(savedTheme && ['light', 'dark'].includes(savedTheme)) {
       setTheme(savedTheme) 
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  const toggleTheme = () => {      
      setTheme(prev => prev === 'light' ? 'dark' : 'light')   
    }
    
  return (
    
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`${theme} transition-colors duration-300`}>
                {children}
            </div>
        </ThemeContext.Provider>
   
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}