import { motion, useReducedMotion } from 'framer-motion'

const easing = [0.22, 1, 0.36, 1]

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easing,
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
}

export function MotionSection({ children, className, ...props }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      className={className}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView={shouldReduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.28 }}
      variants={sectionVariants}
      {...props}
    >
      {children}
    </motion.section>
  )
}

export function MotionItem({ children, className, as = 'div', delay = 0, ...props }) {
  const shouldReduceMotion = useReducedMotion()
  const Component = motion[as] || motion.div

  return (
    <Component
      className={className}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView={shouldReduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.35 }}
      variants={{
        hidden: itemVariants.hidden,
        visible: {
          ...itemVariants.visible,
          transition: {
            ...itemVariants.visible.transition,
            delay,
          },
        },
      }}
      {...props}
    >
      {children}
    </Component>
  )
}