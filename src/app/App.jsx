import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { navItems } from '../shared/config/navigation'
import { portfolioData } from '../shared/data/portfolioData'
import { useActiveSection } from '../shared/hooks/useActiveSection'
import Navbar from '../shared/ui/Navbar'
import ScrollProgress from '../shared/ui/ScrollProgress'
import EnhancedHeroSection from '../sections/EnhancedHeroSection'
import EnhancedAboutSection from '../sections/EnhancedAboutSection'
import EnhancedSkillsSection from '../sections/EnhancedSkillsSection'
import EnhancedProjectsSection from '../sections/EnhancedProjectsSection'
import EnhancedExperienceSection from '../sections/EnhancedExperienceSection'
import EnhancedContactSection from '../sections/EnhancedContactSection'
import EnhancedFooter from '../sections/EnhancedFooter'

function App() {
  const activeSection = useActiveSection(navItems)
  const [manualActiveSection, setManualActiveSection] = useState('')
  const projects = portfolioData.projects
  const skills = portfolioData.skills
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }

    const storedTheme = window.localStorage.getItem('theme')
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })
  const manualActiveTimeoutRef = useRef(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const scrollToSection = (id) => {
    setManualActiveSection(id)

    if (manualActiveTimeoutRef.current) {
      window.clearTimeout(manualActiveTimeoutRef.current)
    }

    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    manualActiveTimeoutRef.current = window.setTimeout(() => {
      setManualActiveSection('')
      manualActiveTimeoutRef.current = null
    }, 900)
  }

  useEffect(() => {
    return () => {
      if (manualActiveTimeoutRef.current) {
        window.clearTimeout(manualActiveTimeoutRef.current)
      }
    }
  }, [])

  const resolvedActiveSection = manualActiveSection || activeSection

  return (
    <div className="app-shell">
      <motion.div className="glow glow-left" aria-hidden="true" />
      <motion.div className="glow glow-right" aria-hidden="true" />
      <ScrollProgress />

      <Navbar
        navItems={navItems}
        activeSection={resolvedActiveSection}
        onNavigate={scrollToSection}
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
      />

      <main>
        <EnhancedHeroSection profile={portfolioData.profile} data={portfolioData} />
        <EnhancedAboutSection profile={portfolioData.profile} summary={portfolioData.summary} data={portfolioData} />
        <EnhancedSkillsSection skills={skills} />
        <EnhancedProjectsSection projects={projects} />
        <EnhancedExperienceSection
          experience={portfolioData.experience}
          education={portfolioData.education}
          certificates={Array.isArray(portfolioData.certificates) ? portfolioData.certificates : []}
        />
        <EnhancedContactSection profile={portfolioData.profile} data={portfolioData} />
        <EnhancedFooter data={portfolioData} />
      </main>
    </div>
  )
}

export default App
