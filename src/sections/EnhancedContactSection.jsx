import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

function EnhancedContactSection({ profile, data }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      alert(`Thanks for reaching out, ${formData.name}! I'll get back to you soon.`)
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1500)
  }

  const contactMethods = [
    {
      icon: FiMail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone}`,
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: profile.location,
      href: '#',
    },
  ]

  const socialLinks = [
    { icon: FaLinkedin, url: profile.linkedin, label: 'LinkedIn' },
    { icon: FaGithub, url: data?.links?.github, label: 'GitHub', isPrimary: true },
    { icon: FaInstagram, url: data?.links?.instagram, label: 'Instagram' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#f8f7f5] mb-4">
            Let's <span className="bg-gradient-to-r from-[#ffbd13] to-[#ffde76] bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg text-[#d7d3cc] max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-[#f8f7f5] mb-6">Get in Touch</h3>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, idx) => {
                const Icon = method.icon
                return (
                  <motion.a
                    key={idx}
                    href={method.href}
                    className="flex items-start gap-4 p-4 rounded-lg backdrop-blur-lg bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] hover:border-[#ffbd13]/50 transition-all duration-300 group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-[rgba(255,189,19,0.2)] to-[rgba(255,189,19,0.05)] group-hover:from-[rgba(255,189,19,0.3)] group-hover:to-[rgba(255,189,19,0.1)] transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#ffbd13]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#d7d3cc]">{method.label}</p>
                      <p className="text-base font-semibold text-[#f8f7f5]">{method.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-[#f8f7f5] mb-4">Follow Me</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`p-3 rounded-lg bg-[rgba(255,255,255,0.1)] text-[#f8f7f5] border transition-all duration-300 hover:text-[#ffbd13] hover:bg-[rgba(255,189,19,0.12)] hover:border-[#ffbd13] hover:shadow-lg hover:shadow-[rgba(255,189,19,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffbd13]/60 ${
                        social.isPrimary ? 'border-[#ffbd13]/70 text-[#ffbd13]' : 'border-[rgba(255,255,255,0.2)]'
                      }`}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-lg bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] rounded-2xl p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#d7d3cc] mb-2">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] text-[#f8f7f5] placeholder-[#d7d3cc]/50 focus:outline-none focus:border-[#ffbd13] focus:ring-1 focus:ring-[rgba(255,189,19,0.3)] transition-all duration-300"
                  placeholder="Enter your name"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#d7d3cc] mb-2">
                  Your Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] text-[#f8f7f5] placeholder-[#d7d3cc]/50 focus:outline-none focus:border-[#ffbd13] focus:ring-1 focus:ring-[rgba(255,189,19,0.3)] transition-all duration-300"
                  placeholder="your.email@example.com"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#d7d3cc] mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] text-[#f8f7f5] placeholder-[#d7d3cc]/50 focus:outline-none focus:border-[#ffbd13] focus:ring-1 focus:ring-[rgba(255,189,19,0.3)] transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#ffbd13] to-[#ffde76] text-[#101017] font-semibold hover:shadow-lg hover:shadow-[rgba(255,189,19,0.4)] disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-4 h-4 border-2 border-[#101017] border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default EnhancedContactSection
