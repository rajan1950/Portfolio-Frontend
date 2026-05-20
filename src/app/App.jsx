import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { navItems } from '../shared/config/navigation'
import { portfolioData } from '../shared/data/portfolioData'
import { useActiveSection } from '../shared/hooks/useActiveSection'
import { fetchProjects, fetchSkills } from '../shared/api/portfolioApi'
import Navbar from '../shared/ui/Navbar'
import ScrollProgress from '../shared/ui/ScrollProgress'
import EnhancedHeroSection from '../widgets/sections/EnhancedHeroSection'
import EnhancedAboutSection from '../widgets/sections/EnhancedAboutSection'
import EnhancedSkillsSection from '../widgets/sections/EnhancedSkillsSection'
import EnhancedProjectsSection from '../widgets/sections/EnhancedProjectsSection'
import EnhancedExperienceSection from '../widgets/sections/EnhancedExperienceSection'
import EnhancedContactSection from '../widgets/sections/EnhancedContactSection'
import EnhancedFooter from '../widgets/sections/EnhancedFooter'

function App() {
  const activeSection = useActiveSection(navItems)
  const [manualActiveSection, setManualActiveSection] = useState('')
  const [projects, setProjects] = useState(portfolioData.projects)
  const [skills, setSkills] = useState(portfolioData.skills)
  const manualActiveTimeoutRef = useRef(null)

  useEffect(() => {
    let isMounted = true

    const loadPortfolioData = async () => {
      try {
        const [projectsResponse, skillsResponse] = await Promise.all([
          fetchProjects(),
          fetchSkills(),
        ])

        if (!isMounted) {
          return
        }

        // Update state if API returns data
        if (Array.isArray(projectsResponse?.data) && projectsResponse.data.length > 0) {
          setProjects(projectsResponse.data)
        }

        if (Array.isArray(skillsResponse?.data) && skillsResponse.data.length > 0) {
          setSkills(skillsResponse.data)
        }
      } catch (error) {
        console.warn('Using fallback static portfolio data:', error.message)
      }
    }

    loadPortfolioData()

    return () => {
      isMounted = false
    }
  }, [])

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
      />

      <main>
        <EnhancedHeroSection profile={portfolioData.profile} data={portfolioData} />
        <EnhancedAboutSection profile={portfolioData.profile} summary={portfolioData.summary} />
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
