import { motion } from 'framer-motion'
import { FaBriefcase, FaCertificate, FaGraduationCap } from 'react-icons/fa'

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

  const TimelineItem = ({ icon: Icon, title, subtitle, meta, summary }) => (
      <motion.div
        variants={itemVariants}
        className="relative pl-12 pb-8"
      >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-5 top-7 w-3.5 h-3.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#ffbd13] to-[#ffde76] shadow-lg shadow-[rgba(255,189,19,0.4)] z-10"
        whileHover={{ scale: 1.3 }}
      />

      {/* Timeline card */}
      <motion.div
        className="backdrop-blur-lg bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] rounded-xl p-6 hover:border-[#ffbd13]/50 transition-all duration-300 group relative z-10"
        whileHover={{ x: 10 }}
      >
        <div className="flex items-start gap-3 mb-3">
          <Icon className="w-5 h-5 text-[#ffbd13] mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-[#f8f7f5]">{title}</h3>
            {subtitle && <p className="text-[#ffbd13] text-sm font-semibold">{subtitle}</p>}
          </div>
        </div>
        {meta && <p className="text-xs text-[#d7d3cc] mb-3">{meta}</p>}
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
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#ffbd13] to-[rgba(255,189,19,0.2)] z-0" />

          {/* Experience Section */}
          {(experience && experience.length > 0) && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#f8f7f5] mb-8 flex items-center gap-3 leading-none pl-12 relative z-10">
                <span className="w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] flex items-center justify-center shadow-lg shadow-[rgba(255,189,19,0.2)]">
                  <FaBriefcase className="w-6 h-6 text-[#ffbd13]" />
                </span>
                Experience
              </h3>
              <div>
                {experience.map((item, idx) => (
                  <TimelineItem
                    key={idx}
                    icon={FaBriefcase}
                    title={item.role}
                    subtitle={item.company}
                    meta={item.duration}
                    summary={item.summary}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Education Section */}
          {(education && education.length > 0) && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#f8f7f5] mb-8 flex items-center gap-3 leading-none pl-12 relative z-10">
                <span className="w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] flex items-center justify-center shadow-lg shadow-[rgba(255,189,19,0.2)]">
                  <FaGraduationCap className="w-6 h-6 text-[#ffbd13]" />
                </span>
                Education
              </h3>
              <div>
                {education.map((item, idx) => (
                  <TimelineItem
                    key={idx}
                    icon={FaGraduationCap}
                    title={item.program}
                    subtitle={item.institution}
                    meta={item.years}
                    summary={item.details}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Certificates Section */}
          {(certificates && certificates.length > 0) && (
            <div>
              <h3 className="text-2xl font-bold text-[#f8f7f5] mb-8 flex items-center gap-3 leading-none pl-12 relative z-10">
                <span className="w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] flex items-center justify-center shadow-lg shadow-[rgba(255,189,19,0.2)]">
                  <FaCertificate className="w-6 h-6 text-[#ffbd13]" />
                </span>
                Certifications
              </h3>
              <div>
                {certificates.map((cert, idx) => {
                  const certTitle = typeof cert === 'string' ? cert : cert.title
                  const certProvider = typeof cert === 'string' ? '' : cert.provider

                  return (
                    <TimelineItem
                      key={idx}
                      icon={FaCertificate}
                      title={certTitle}
                      subtitle={certProvider}
                    />
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
