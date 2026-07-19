import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiEye } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import HeroOrbsCanvas from '../shared/ui/HeroOrbsCanvas'

function EnhancedHeroSection({ profile, data }) {
  const [displayedText, setDisplayedText] = useState('')
  const roles = ['MERN Stack Developer', 'Full-Stack Engineer', 'Problem Solver']
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const featuredProject = Array.isArray(data?.projects) ? data.projects[0] : null

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    let index = 0

    const typingTimer = setInterval(() => {
      if (index < currentRole.length) {
        setDisplayedText(currentRole.substring(0, index + 1))
        index++
      } else {
        clearInterval(typingTimer)
        setTimeout(() => {
          setDisplayedText('')
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }, 2000)
      }
    }, 60)

    return () => clearInterval(typingTimer)
  }, [currentRoleIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HeroOrbsCanvas />
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#ffbd13] via-[#7a3c1d] to-transparent rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 -left-32 w-64 h-64 bg-gradient-to-br from-[#48424f] to-transparent rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div className="text-center lg:text-left">
            {profile.openToWork && (
              <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[rgba(255,189,19,0.1)] to-[rgba(255,189,19,0.05)] border border-[rgba(255,189,19,0.3)] backdrop-blur-md">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-medium text-[#ffbd13]">Open to Work</span>
                </div>
              </motion.div>
            )}

            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#f8f7f5] mb-4 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-[#ffbd13] to-[#ffde76] bg-clip-text text-transparent">{profile.name}</span>
              </h1>
              <div className="min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] mb-6 flex items-center justify-center lg:justify-start">
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#ffbd13] leading-tight">
                  {displayedText}
                  <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="ml-1 inline-block">
                    |
                  </motion.span>
                </p>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-[#d7d3cc] max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {profile.tagline}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <motion.a href="mailto:rajandobariya6@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ffbd13] to-[#ffde76] text-[#101017] rounded-lg font-semibold hover:shadow-xl hover:shadow-[rgba(255,189,19,0.4)] transition-all duration-300" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                Contact Me
                <FiArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a href="#projects" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[#f8f7f5] rounded-lg font-semibold border border-transparent hover:border-[rgba(255,255,255,0.25)] hover:text-[#ffbd13] transition-all duration-300" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                View Projects
                <FiArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
              {[
                { icon: FaLinkedin, url: data?.profile?.linkedin, label: 'LinkedIn' },
                { icon: FaGithub, url: data?.links?.github, label: 'GitHub', isPrimary: true },
                { icon: FaInstagram, url: data?.links?.instagram, label: 'Instagram' },
              ].map((social, idx) => {
                const Icon = social.icon
                return (
                  <motion.a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label} className={`p-3 rounded-lg bg-[rgba(255,255,255,0.1)] text-[#f8f7f5] border transition-all duration-300 hover:text-[#ffbd13] hover:bg-[rgba(255,189,19,0.12)] hover:border-[#ffbd13] hover:shadow-lg hover:shadow-[rgba(255,189,19,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffbd13]/60 ${social.isPrimary ? 'border-[#ffbd13]/70 text-[#ffbd13]' : 'border-[rgba(255,255,255,0.2)]'}`} whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.9 }}>
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#ffbd13]/20 via-transparent to-[#7a3c1d]/20 blur-3xl opacity-70" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(255,255,255,0.16)] bg-[rgba(10,10,16,0.72)] backdrop-blur-2xl shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#d7d3cc]">Featured Project</span>
              </div>
              <div className="p-5 sm:p-6 lg:p-7">
                <div className="rounded-[1.5rem] p-5 sm:p-6 border border-[rgba(255,255,255,0.12)] bg-gradient-to-br from-[rgba(255,189,19,0.14)] via-[rgba(255,255,255,0.04)] to-[rgba(122,60,29,0.2)] min-h-[280px]">
                  <div className="flex h-full flex-col justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-[#ffde76] mb-3">{featuredProject?.subtitle || 'Selected work'}</p>
                      <h3 className="text-3xl sm:text-4xl font-black text-[#f8f7f5] leading-tight max-w-sm">{featuredProject?.title || 'Project Showcase'}</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="rounded-2xl bg-[rgba(16,16,23,0.7)] border border-[rgba(255,255,255,0.1)] p-4">
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <div>
                            <p className="text-sm font-semibold text-[#ffbd13]">Live preview</p>
                            <p className="text-xs text-[#d7d3cc]">Compact product-style snapshot</p>
                          </div>
                          <FiEye className="w-5 h-5 text-[#ffde76]" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 rounded-full bg-white/12 w-5/6" />
                          <div className="h-3 rounded-full bg-white/10 w-4/6" />
                          <div className="h-3 rounded-full bg-white/8 w-3/5" />
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {(featuredProject?.techStack || ['React', 'Tailwind', 'Motion']).slice(0, 3).map((tech) => (
                          <span key={tech} className="px-3 py-1 rounded-full bg-[rgba(255,189,19,0.12)] border border-[#ffbd13]/40 text-[11px] font-semibold text-[#ffde76]">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-center lg:justify-end">
                  <motion.a href="#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[#ffbd13] hover:text-[#ffde76] transition-colors" whileHover={{ x: 4 }}>
                    View all projects
                    <FiArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex justify-center mt-12">
          <div className="text-[#ffbd13] text-sm font-medium flex flex-col items-center gap-2">
            <span>Scroll to explore</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default EnhancedHeroSection
