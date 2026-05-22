import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'

function ThemeToggle({ theme, onToggle }) {
  const isLight = theme === 'light'

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[rgba(255,255,255,0.3)] text-[#f8f7f5] hover:text-[#ffbd13] hover:border-[#ffbd13] transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isLight ? <FiMoon className="w-4 h-4" /> : <FiSun className="w-4 h-4" />}
      <span className="hidden sm:inline text-sm font-semibold">
        {isLight ? 'Dark' : 'Light'}
      </span>
    </motion.button>
  )
}

export default ThemeToggle
