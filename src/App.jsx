import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import FloatingNav from './components/common/FloatingNav'
import HomeSection from './components/sections/HomeSection'
import LinksSection from './components/sections/LinksSection'
import ProjectsSection from './components/sections/ProjectsSection'
import SkillsSection from './components/sections/SkillsSection'
import SummarySection from './components/sections/SummarySection'
import { navItems } from './constants/navigation'
import { portfolioData } from './data/portfolioData'
import { useActiveSection } from './hooks/useActiveSection'
import { fetchProjects, fetchSkills } from './services/portfolioApi'

const LEVEL_TO_SCORE = {
  beginner: 35,
  intermediate: 60,
  advanced: 85,
  expert: 95,
}

function mapBackendProjects(projects) {
  return projects.map((project) => {
    const techStack = Array.isArray(project.techStack) ? project.techStack : []

    return {
      title: project.title,
      subtitle: project.subtitle || 'Backend-managed portfolio project',
      description: project.description,
      objective:
        project.objective ||
        'Deliver a polished, production-ready project experience with clear business value.',
      features:
        Array.isArray(project.features) && project.features.length > 0
          ? project.features
          : ['Scalable API architecture', 'Data-driven portfolio content', 'Clean code structure'],
      techStack,
      skillsUsed: techStack,
      links: {
        live: project.liveLink || '#',
        github: project.githubLink || '#',
      },
    }
  })
}

function mapBackendSkills(skills) {
  const categorySet = new Set()
  const tools = []
  const languages = []

  skills.forEach((skill) => {
    tools.push(skill.name)

    if (skill.category) {
      categorySet.add(skill.category)
    }

    const normalizedLevel = String(skill.level || 'intermediate').toLowerCase()

    languages.push({
      name: skill.name,
      level: LEVEL_TO_SCORE[normalizedLevel] || 60,
    })
  })

  return {
    highlights: categorySet.size > 0 ? [...categorySet] : portfolioData.skills.highlights,
    tools,
    languages,
  }
}

function App() {
  const activeSection = useActiveSection(navItems)
  const [manualActiveSection, setManualActiveSection] = useState('')
  const [projects, setProjects] = useState(portfolioData.projects)
  const [skills, setSkills] = useState(portfolioData.skills)
  const manualActiveTimeoutRef = useRef(null)

  const summaryCards = useMemo(() => {
    return [
      {
        title: 'Education',
        items: portfolioData.education.map(
          (item) => `${item.program} - ${item.institution} (${item.years})`,
        ),
      },
      {
        title: 'Experience',
        items: portfolioData.experience.map(
          (item) => `${item.role} - ${item.company} (${item.duration})`,
        ),
      },
      {
        title: 'Certificates',
        items: portfolioData.certificates,
      },
    ]
  }, [])

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

        const apiProjects = Array.isArray(projectsResponse?.data)
          ? projectsResponse.data
          : []

        const apiSkills = Array.isArray(skillsResponse?.data) ? skillsResponse.data : []

        if (apiProjects.length > 0) {
          setProjects(mapBackendProjects(apiProjects))
        }

        if (apiSkills.length > 0) {
          setSkills(mapBackendSkills(apiSkills))
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

      <main className="container page-grid">
        <HomeSection profile={portfolioData.profile} />
        <SummarySection summary={portfolioData.summary} summaryCards={summaryCards} />
        <ProjectsSection projects={projects} />
        <SkillsSection
          skills={skills}
          education={portfolioData.education}
          experience={portfolioData.experience}
          certificates={portfolioData.certificates}
        />
        <LinksSection
          links={portfolioData.links}
          profile={portfolioData.profile}
          footer={portfolioData.footer}
        />
      </main>

      <FloatingNav
        items={navItems}
        activeSection={resolvedActiveSection}
        onNavigate={scrollToSection}
      />
    </div>
  )
}

export default App
