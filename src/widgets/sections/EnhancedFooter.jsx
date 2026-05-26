import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowUp } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const MotionLink = motion.create(Link)

function EnhancedFooter({ data }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: FaLinkedin, url: data?.profile?.linkedin, label: 'LinkedIn' },
    { icon: FaGithub, url: data?.links?.github, label: 'GitHub' },
    { icon: FaInstagram, url: data?.links?.instagram, label: 'Instagram' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.1)] backdrop-blur-lg bg-gradient-to-b from-[rgba(16,16,23,0.5)] to-[rgba(16,16,23,0.8)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Content */}
        <motion.div
          className="grid md:grid-cols-3 gap-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#ffbd13] to-[#ffde76] rounded-lg flex items-center justify-center shadow-lg shadow-[rgba(255,189,19,0.3)]">
                <span className="text-sm font-bold text-[#101017]">RD</span>
              </div>
              <span className="text-lg font-bold text-[#f8f7f5]">Rajan Dobariya</span>
            </div>
            <p className="text-sm text-[#d7d3cc] mb-4">
              Building modern, performant digital products with thoughtful design and scalable architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#f8f7f5] mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { label: 'About', href: '#home' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <MotionLink
                  key={link.label}
                  to={link.href}
                  className="block text-sm text-[#d7d3cc] hover:text-[#ffbd13] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                </MotionLink>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-[#f8f7f5] mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-[rgba(255,255,255,0.08)] text-[#f8f7f5] hover:text-[#ffbd13] hover:bg-[rgba(255,189,19,0.1)] border border-[rgba(255,255,255,0.15)] hover:border-[#ffbd13]/50 transition-all duration-300"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
            <p className="text-sm text-[#d7d3cc]">
              <a
                href="mailto:rajandobariya6@gmail.com"
                className="text-[#ffbd13] hover:text-[#ffde76] transition-colors duration-300"
              >
                rajandobariya6@gmail.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(255,189,19,0.3)] to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <div className="text-sm text-[#d7d3cc] text-center sm:text-left">
            <p>© {currentYear} Rajan Dobariya. All rights reserved.</p>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-lg bg-gradient-to-br from-[rgba(255,189,19,0.2)] to-[rgba(255,189,19,0.05)] text-[#ffbd13] border border-[rgba(255,189,19,0.3)] hover:border-[#ffbd13] hover:bg-[rgba(255,189,19,0.15)] transition-all duration-300"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

export default EnhancedFooter
