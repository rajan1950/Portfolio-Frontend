import { motion } from 'framer-motion'
import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi'

function EnhancedProjectsSection({ projects }) {
  const projectList = Array.isArray(projects) ? projects : []
  const featuredProject = projectList[0]

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
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.3em] text-[#ffbd13] text-sm font-semibold mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f8f7f5] mb-4">
            <span className="bg-gradient-to-r from-[#ffbd13] to-[#ffde76] bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
          <p className="text-lg text-[#d7d3cc] max-w-2xl mx-auto leading-relaxed">
            A curated view of the products I have built, with one featured project
            highlighted first so the section feels more intentional.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          id="projects-list"
          className="grid gap-8"
          variants={containerVariants}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {projectList.map((project, idx) => (
            <motion.div
              key={idx}
              variants={projectVariants}
              className="group relative overflow-hidden rounded-[2rem] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.06)] backdrop-blur-xl"
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.25 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,189,19,0.14)] via-transparent to-[rgba(122,60,29,0.18)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-4 sm:p-5">
                <div className="flex items-center justify-between gap-4 border-b border-[rgba(255,255,255,0.08)] pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="hidden sm:flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[#d7d3cc]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ffbd13]" />
                    {project.links?.live && project.links.live !== '#' ? project.links.live : 'homepage preview'}
                  </div>
                </div>

                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-5 items-stretch">
                  <div className="relative overflow-hidden rounded-[1.6rem] border border-[rgba(255,255,255,0.1)] bg-[radial-gradient(circle_at_top_right,rgba(255,222,118,0.24),transparent_32%),linear-gradient(145deg,rgba(16,16,23,0.95),rgba(120,60,29,0.55))] p-5 sm:p-6 min-h-[320px]">
                    <motion.div className="absolute inset-0 opacity-70" whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }}>
                      <div className="absolute -right-10 top-8 h-32 w-32 rounded-full bg-[#ffbd13]/20 blur-3xl" />
                      <div className="absolute left-8 bottom-10 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                    </motion.div>
                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#ffde76] mb-3">Browser Preview</p>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#f8f7f5] leading-tight max-w-sm">
                          {project.title}
                        </h3>
                        <p className="text-[#d7d3cc] text-sm mt-3 max-w-md leading-relaxed">
                          {project.subtitle}
                        </p>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(10,10,16,0.7)] p-4">
                          <p className="text-xs uppercase tracking-[0.22em] text-[#ffbd13] mb-2">Objective</p>
                          <p className="text-sm text-[#f8f7f5] leading-relaxed">{project.objective}</p>
                        </div>
                        <div className="rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-4">
                          <p className="text-xs uppercase tracking-[0.22em] text-[#d7d3cc] mb-2">Focus</p>
                          <div className="flex flex-wrap gap-2">
                            {(project.skillsUsed || []).slice(0, 2).map((skill) => (
                              <span key={skill} className="px-3 py-1 rounded-full bg-[rgba(255,189,19,0.12)] border border-[#ffbd13]/40 text-[11px] font-medium text-[#ffbd13]">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="rounded-[1.4rem] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-[#d7d3cc] mb-3">Screenshot-style content</p>
                      <div className="space-y-2 mb-4">
                        <div className="h-3 rounded-full bg-white/12 w-5/6" />
                        <div className="h-3 rounded-full bg-white/10 w-4/6" />
                        <div className="h-3 rounded-full bg-white/8 w-3/5" />
                      </div>
                      <ul className="space-y-2">
                        {(project.features || []).slice(0, 3).map((feature, fIdx) => (
                          <li key={fIdx} className="text-sm text-[#d7d3cc] flex items-start gap-2">
                            <span className="text-[#ffbd13] mt-1">›</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[1.4rem] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-[#d7d3cc] mb-3">Tech stack</p>
                      <div className="flex flex-wrap gap-2">
                        {(project.techStack || []).map((tech, tIdx) => (
                          <motion.span
                            key={tIdx}
                            className="px-3 py-1 rounded-full bg-[rgba(255,189,19,0.1)] border border-[#ffbd13]/50 text-xs font-medium text-[#ffbd13]"
                            whileHover={{ scale: 1.06 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      {project.links?.live && project.links.live !== '#' && (
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#ffbd13] to-[#ffde76] text-[#101017] font-semibold text-sm hover:shadow-lg hover:shadow-[rgba(255,189,19,0.4)] transition-all w-full sm:w-auto"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                        >
                          <FiExternalLink className="w-4 h-4" />
                          Open Preview
                        </motion.a>
                      )}
                      {project.links?.github && project.links.github !== '#' && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.08)] text-[#f8f7f5] font-semibold text-sm border border-[rgba(255,255,255,0.16)] hover:border-[#ffbd13] hover:bg-[rgba(255,189,19,0.1)] transition-all w-full sm:w-auto"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                        >
                          <FiGithub className="w-4 h-4" />
                          Source Code
                        </motion.a>
                      )}
                    </div>
                  </div>
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
