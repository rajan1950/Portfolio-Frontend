import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

function EnhancedHeroSection({ profile, data }) {
  const [displayedText, setDisplayedText] = useState('')
  const roles = ['MERN Stack Developer', 'Full-Stack Engineer', 'Problem Solver']
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

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
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Pill */}
        {profile.openToWork && (
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[rgba(255,189,19,0.1)] to-[rgba(255,189,19,0.05)] border border-[rgba(255,189,19,0.3)] backdrop-blur-md">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-[#ffbd13]">Open to Work</span>
            </div>
          </motion.div>
        )}

        {/* Main Heading with typing animation */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#f8f7f5] mb-4 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-[#ffbd13] to-[#ffde76] bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <div className="h-12 sm:h-14 md:h-16 mb-6">
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#ffbd13] min-h-[2.5rem]">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1 inline-block"
              >
                |
              </motion.span>
            </p>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-[#d7d3cc] max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="mailto:rajandobariya6@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ffbd13] to-[#ffde76] text-[#101017] rounded-lg font-semibold hover:shadow-xl hover:shadow-[rgba(255,189,19,0.4)] transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
            <FiArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={data?.links?.github || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[rgba(255,255,255,0.1)] text-[#f8f7f5] rounded-lg font-semibold border border-[rgba(255,255,255,0.2)] hover:border-[#ffbd13] hover:bg-[rgba(255,189,19,0.1)] transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload className="w-5 h-5" />
            View Projects
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { icon: FaLinkedin, url: data?.profile?.linkedin, label: 'LinkedIn' },
            { icon: FaGithub, url: data?.links?.github, label: 'GitHub' },
            { icon: FaInstagram, url: data?.links?.instagram, label: 'Instagram' },
          ].map((social, idx) => {
            const Icon = social.icon
            return (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[rgba(255,255,255,0.1)] text-[#f8f7f5] hover:text-[#ffbd13] hover:bg-[rgba(255,189,19,0.1)] border border-[rgba(255,255,255,0.2)] hover:border-[#ffbd13] transition-all duration-300"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
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
