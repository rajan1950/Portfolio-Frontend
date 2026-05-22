import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

function Navbar({ navItems, activeSection, onNavigate, resumeUrl, theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    onNavigate(id)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-lg bg-gradient-to-b from-[rgba(16,16,23,0.9)] to-[rgba(16,16,23,0.7)] border-b border-[rgba(255,255,255,0.1)]'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-[#ffbd13] to-[#ffde76] rounded-lg flex items-center justify-center shadow-lg shadow-[rgba(255,189,19,0.3)]">
            <span className="text-sm font-bold text-[#101017]">RD</span>
          </div>
          <span className="hidden sm:block text-lg font-bold text-[#f8f7f5]">Rajan</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium relative ${
                activeSection === item.id
                  ? 'text-[#ffbd13]'
                  : 'text-[#f8f7f5] hover:text-[#ffbd13]'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ffbd13] to-[#ffde76]"
                  layoutId="navbar-indicator"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <motion.a
            href="mailto:rajandobariya6@gmail.com"
            className="px-6 py-2.5 bg-gradient-to-r from-[#ffbd13] to-[#ffde76] text-[#101017] rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-[rgba(255,189,19,0.4)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <motion.button
            className="p-2 rounded-lg hover:bg-[rgba(255,255,255,0.1)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6 text-[#f8f7f5]" />
            ) : (
              <FiMenu className="w-6 h-6 text-[#f8f7f5]" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, height: isMobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 py-4 space-y-2 backdrop-blur-lg bg-[rgba(16,16,23,0.95)] border-t border-[rgba(255,255,255,0.1)]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-[rgba(255,189,19,0.2)] text-[#ffbd13] border border-[#ffbd13]'
                  : 'text-[#f8f7f5] hover:bg-[rgba(255,255,255,0.1)]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <motion.a
            href="mailto:rajandobariya6@gmail.com"
            className="block w-full text-center px-4 py-3 bg-gradient-to-r from-[#ffbd13] to-[#ffde76] text-[#101017] rounded-lg font-semibold mt-3"
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
