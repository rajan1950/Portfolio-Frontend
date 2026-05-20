import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-20 left-0 right-0 h-1 bg-transparent origin-left z-50"
      initial={{ scaleX: 0 }}
    >
      <div
        className="h-full bg-gradient-to-r from-[#ffbd13] to-[#ffde76] shadow-lg shadow-[rgba(255,189,19,0.4)]"
        style={{
          width: `${progress}%`,
          transition: 'width 0.1s ease-out',
        }}
      />
    </motion.div>
  )
}

export default ScrollProgress
