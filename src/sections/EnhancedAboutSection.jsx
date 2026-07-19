import { motion } from 'framer-motion'
import { FiCode, FiHeart, FiMail } from 'react-icons/fi'
import { FaRocket, FaGithub, FaLinkedin } from 'react-icons/fa'

function EnhancedAboutSection({ profile, summary, data }) {
  const achievements = [
    { label: 'Projects', value: Array.isArray(data?.projects) ? data.projects.length : 0 },
    { label: 'Role', value: profile?.role || 'Frontend Developer' },
    { label: 'Location', value: profile?.location || 'India' },
  ]

  const features = [
    {
      icon: FiCode,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices',
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Building fast, optimized applications that users love',
    },
    {
      icon: FiHeart,
      title: 'Quality',
      description: 'Passionate about delivering excellent digital experiences',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#ffbd13]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#ffbd13]/5 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.3em] text-[#ffbd13] text-sm font-semibold mb-4">
            About
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-[#f8f7f5] mb-5 leading-tight">
            Building products{' '}
            <span className="bg-gradient-to-r from-[#ffbd13] to-[#ffde76] bg-clip-text text-transparent">
              with care
            </span>
          </h2>

          <p className="text-lg text-[#d7d3cc] max-w-2xl mx-auto leading-relaxed">
            I build modern, scalable web applications with strong UX, thoughtful
            architecture, and a focus on practical outcomes.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-start mb-16"
          variants={containerVariants}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#f8f7f5] mb-4">
                {profile?.role || 'Frontend Developer'}
              </h3>

              <p className="text-[#d7d3cc] leading-relaxed text-base sm:text-lg mb-6">
                {profile?.tagline ||
                  'I create responsive, modern, and user-focused web experiences using React, Tailwind CSS, Node.js, and modern frontend technologies.'}
              </p>

              {summary?.intro && (
                <p className="text-[#d7d3cc] leading-relaxed mb-6 max-w-xl">
                  {summary.intro}
                </p>
              )}

              {summary?.quote && (
                <blockquote className="rounded-2xl border border-[rgba(255,189,19,0.18)] bg-[rgba(255,189,19,0.08)] px-5 py-4 italic text-[#ffde76] text-base sm:text-lg leading-relaxed">
                  "{summary.quote}"
                </blockquote>
              )}

              <div className="grid sm:grid-cols-3 gap-3 mt-6">
                {achievements.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#ffbd13] mb-2">{item.label}</p>
                    <p className="text-[#f8f7f5] text-lg font-semibold leading-snug break-words">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex flex-wrap gap-4 mt-6">
                {[
                  { icon: FaGithub, url: data?.links?.github, label: 'GitHub' },
                  { icon: FaLinkedin, url: data?.links?.linkedin || data?.profile?.linkedin, label: 'LinkedIn' },
                  { icon: FiMail, url: profile?.email ? `mailto:${profile.email}` : undefined, label: 'Email' },
                ]
                  .filter((social) => Boolean(social.url))
                  .map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-3 rounded-lg bg-[rgba(255,255,255,0.1)] text-[#f8f7f5] border border-[rgba(255,255,255,0.2)] hover:text-[#ffbd13] hover:bg-[rgba(255,189,19,0.12)] hover:border-[#ffbd13] hover:shadow-lg hover:shadow-[rgba(255,189,19,0.35)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffbd13]/60"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Features */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon

              return (
                <motion.div
                  key={idx}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6 hover:border-[#ffbd13]/40 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ffbd13]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-[#ffbd13]/10 border border-[#ffbd13]/20 flex items-center justify-center shrink-0">
                        <Icon className="text-2xl text-[#ffbd13]" />
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-[#f8f7f5] mb-2">
                        {feature.title}
                      </h4>

                        <p className="text-[#d7d3cc] leading-relaxed text-sm sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Bottom Info Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial={false}
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              label: 'Location',
              value: profile?.location || 'India',
            },
            {
              label: 'Email',
              value: profile?.email || 'yourmail@gmail.com',
            },
            {
              label: 'Phone',
              value: profile?.phone || '+91 XXXXX XXXXX',
            },
          ].map((info, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              className="text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#ffbd13]/40 transition-all duration-500"
            >
              <p className="text-[#ffbd13] text-sm uppercase tracking-widest mb-3">
                {info.label}
              </p>

              <p className="text-[#f8f7f5] text-xl font-semibold break-words">
                {info.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default EnhancedAboutSection