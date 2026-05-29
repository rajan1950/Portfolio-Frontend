import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

function EnhancedProjectsSection({ projects }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
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
              PROJECTS
            </span>
          </h2>
          <p className="text-lg text-[#d7d3cc] max-w-2xl mx-auto">
            Showcasing my work and the problems I've solved
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {(projects || []).map((project, idx) => (
            <motion.div
              key={idx}
              variants={projectVariants}
              className="group relative rounded-2xl overflow-hidden"
              whileHover={{ y: -10 }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,189,19,0.15)] to-[rgba(120,60,29,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Container */}
              <div className="relative backdrop-blur-lg bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] rounded-2xl p-8 hover:border-[#ffbd13]/50 transition-all duration-500">
                {/* Project Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#f8f7f5] mb-2 group-hover:text-[#ffbd13] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#d7d3cc] text-sm">{project.subtitle}</p>
                </div>

                {/* Project Description */}
                <p className="text-[#d7d3cc] mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#ffbd13] mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {(project.features || []).slice(0, 3).map((feature, fIdx) => (
                      <li key={fIdx} className="text-sm text-[#d7d3cc] flex items-start gap-2">
                        <span className="text-[#ffbd13] mt-1">›</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {(project.techStack || []).map((tech, tIdx) => (
                      <motion.span
                        key={tIdx}
                        className="px-3 py-1 rounded-full bg-[rgba(255,189,19,0.1)] border border-[#ffbd13]/50 text-xs font-medium text-[#ffbd13]"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-6 border-t border-[rgba(255,255,255,0.1)]">
                  {project.links?.live && project.links.live !== '#' && (
                    <motion.a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#ffbd13] to-[#ffde76] text-[#101017] font-semibold text-sm hover:shadow-lg hover:shadow-[rgba(255,189,19,0.4)] transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                  {project.links?.github && project.links.github !== '#' && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.1)] text-[#f8f7f5] font-semibold text-sm border border-[rgba(255,255,255,0.2)] hover:border-[#ffbd13] hover:bg-[rgba(255,189,19,0.1)] transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub className="w-4 h-4" />
                      Source Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default EnhancedProjectsSection
