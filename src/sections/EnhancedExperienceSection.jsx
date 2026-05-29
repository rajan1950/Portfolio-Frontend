import { motion } from 'framer-motion'
import { FiBriefcase, FiBook } from 'react-icons/fi'

function EnhancedExperienceSection({ experience, education, certificates }) {
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

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const TimelineItem = ({ icon: Icon, title, company, duration, summary, type = 'experience' }) => (
    <motion.div
      variants={itemVariants}
      className="relative pl-8 pb-8"
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#ffbd13] to-[#ffde76] shadow-lg shadow-[rgba(255,189,19,0.4)]"
        whileHover={{ scale: 1.3 }}
      />

      {/* Timeline card */}
      <motion.div
        className="backdrop-blur-lg bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] rounded-xl p-6 hover:border-[#ffbd13]/50 transition-all duration-300 group"
        whileHover={{ x: 10 }}
      >
        <div className="flex items-start gap-3 mb-3">
          <Icon className="w-5 h-5 text-[#ffbd13] mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-[#f8f7f5]">{title}</h3>
            <p className="text-[#ffbd13] text-sm font-semibold">{company}</p>
          </div>
        </div>
        <p className="text-xs text-[#d7d3cc] mb-3">{duration}</p>
        {summary && <p className="text-sm text-[#d7d3cc] leading-relaxed">{summary}</p>}
      </motion.div>
    </motion.div>
  )

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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
              JOURNEY
            </span>
          </h2>
          <p className="text-lg text-[#d7d3cc]">
            My professional path and achievements
          </p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Vertical line */}
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ffbd13] to-[rgba(255,189,19,0.2)]" />

          {/* Experience Section */}
          {(experience && experience.length > 0) && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#f8f7f5] mb-8 flex items-center gap-3">
                <FiBriefcase className="w-6 h-6 text-[#ffbd13]" />
                Experience
              </h3>
              <div>
                {experience.map((item, idx) => (
                  <TimelineItem
                    key={idx}
                    icon={FiBriefcase}
                    title={item.role}
                    company={item.company}
                    duration={item.duration}
                    summary={item.summary}
                    type="experience"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Education Section */}
          {(education && education.length > 0) && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#f8f7f5] mb-8 flex items-center gap-3">
                <FiBook className="w-6 h-6 text-[#ffbd13]" />
                Education
              </h3>
              <div>
                {education.map((item, idx) => (
                  <TimelineItem
                    key={idx}
                    icon={FiBook}
                    title={item.program}
                    company={item.institution}
                    duration={item.years}
                    summary={item.details}
                    type="education"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Certificates Section */}
          {(certificates && certificates.length > 0) && (
            <div>
              <h3 className="text-2xl font-bold text-[#f8f7f5] mb-8 flex items-center gap-3">
                <FiBriefcase className="w-6 h-6 text-[#ffbd13]" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certificates.map((cert, idx) => {
                  const certTitle = typeof cert === 'string' ? cert : cert.title
                  const certProvider = typeof cert === 'string' ? '' : cert.provider

                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="pl-8 relative"
                    >
                      <motion.div
                        className="absolute left-0 top-1 w-3 h-3 rounded-full bg-[#ffbd13]"
                        whileHover={{ scale: 1.5 }}
                      />
                      <div className="backdrop-blur-lg bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] rounded-lg p-4">
                        <p className="text-base font-semibold text-[#f8f7f5]">{certTitle}</p>
                        {certProvider && <p className="text-sm text-[#ffbd13]">{certProvider}</p>}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default EnhancedExperienceSection
