import { motion } from 'framer-motion'

function InfoChip({ icon, text }) {
  return (
    <motion.div
      className="info-chip"
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
    >
      <span className="icon">{icon}</span>
      <span>{text}</span>
    </motion.div>
  )
}

export default InfoChip
