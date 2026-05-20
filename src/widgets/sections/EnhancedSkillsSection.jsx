import { motion } from 'framer-motion'
import { FiCode, FiPenTool, FiSettings } from 'react-icons/fi'

function EnhancedSkillsSection({ skills }) {
  // Categorize skills
  const frontend = [
    { name: 'React', level: 95 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML/CSS', level: 97 },
    { name: 'Next.js', level: 85 },
  ]

  const styling = [
    { name: 'Tailwind CSS', level: 92 },
    { name: 'SCSS/Sass', level: 88 },
    { name: 'Framer Motion', level: 82 },
    { name: 'Figma', level: 80 },
  ]

  const backend = [
    { name: 'Node.js', level: 78 },
    { name: 'REST APIs', level: 90 },
    { name: 'Git/GitHub', level: 92 },
    { name: 'Webpack/Vite', level: 80 },
  ]

  const skillCategories = [
    {
      title: 'Frontend',
      icon: FiCode,
      skills: frontend,
      gradient: 'from-blue-500/20 to-blue-600/10',
      borderColor: 'border-blue-500/30',
    },
    {
      title: 'Styling & Design',
      icon: FiPenTool,
      skills: styling,
      gradient: 'from-yellow-500/20 to-yellow-600/10',
      borderColor: 'border-yellow-500/30',
    },
    {
      title: 'Backend & Tooling',
      icon: FiSettings,
      skills: backend,
      gradient: 'from-purple-500/20 to-purple-600/10',
      borderColor: 'border-purple-500/30',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const SkillProgressBar = ({ skill }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-[#f8f7f5]">{skill.name}</span>
        <span className="text-xs font-semibold text-[#ffbd13]">{skill.level}%</span>
      </div>
      <div className="relative h-2 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#ffbd13] to-[#ffde76] rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#f8f7f5] mb-4">
            <span className="bg-gradient-to-r from-[#ffbd13] to-[#ffde76] bg-clip-text text-transparent">
              EXPERTISE
            </span>
          </h2>
          <p className="text-lg text-[#d7d3cc] max-w-2xl mx-auto">
            A collection of technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`relative group p-8 rounded-2xl backdrop-blur-lg bg-gradient-to-br ${category.gradient} border ${category.borderColor} hover:border-[#ffbd13]/50 transition-all duration-500`}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative z-10">
                  <Icon className="text-4xl text-[#ffbd13] mb-4" />
                  <h3 className="text-2xl font-bold text-[#f8f7f5] mb-2">{category.title}</h3>

                  {/* Skills List with Progress Bars */}
                  <div className="mt-8 space-y-6">
                    {category.skills.map((skill, skillIdx) => (
                      <SkillProgressBar key={skillIdx} skill={skill} />
                    ))}
                  </div>
                </div>
              {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, rgba(255,189,19,0.1) 0%, transparent 70%)`,
                  }}
                />

                {/* Border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ boxShadow: 'inset 0 0 0px rgba(255,189,19,0)' }}
                  whileHover={{ boxShadow: 'inset 0 0 20px rgba(255,189,19,0.1)' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Tools Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#f8f7f5] mb-8 text-center">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {(skills?.tools || []).slice(0, 10).map((tool, idx) => (
              <motion.div
                key={idx}
                className="p-4 rounded-xl bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] hover:border-[#ffbd13]/50 hover:bg-[rgba(255,189,19,0.1)] transition-all duration-300 flex flex-col items-center justify-center gap-3"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <img
                  src={tool.logoUrl}
                  alt={tool.name}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xs font-medium text-[#f8f7f5] text-center">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EnhancedSkillsSection
