import { useEffect, useRef } from 'react'

const ORB_COUNT = 24
const MAX_SPEED = 0.4
const MIN_SPEED = 0.12

const parseRgb = (color) => {
  const match = color.match(/\d+/g)
  if (!match || match.length < 3) {
    return [255, 189, 19]
  }
  return match.slice(0, 3).map((value) => Number.parseInt(value, 10))
}

const getThemeColors = () => {
  const styles = getComputedStyle(document.documentElement)
  const accent = styles.getPropertyValue('--accent').trim()
  const accent2 = styles.getPropertyValue('--accent-2').trim()
  const text = styles.getPropertyValue('--text').trim()

  const [r1, g1, b1] = parseRgb(accent)
  const [r2, g2, b2] = parseRgb(accent2)
  const [r3, g3, b3] = parseRgb(text)

  return {
    primary: [r1, g1, b1],
    secondary: [r2, g2, b2],
    glow: [r3, g3, b3],
  }
}

const createOrbs = (width, height) => {
  return Array.from({ length: ORB_COUNT }, () => {
    const depth = Math.random() * 0.9 + 0.1
    const radius = 18 + 42 * depth
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius,
      depth,
      vx: (Math.random() * (MAX_SPEED - MIN_SPEED) + MIN_SPEED) * (Math.random() < 0.5 ? -1 : 1),
      vy: (Math.random() * (MAX_SPEED - MIN_SPEED) + MIN_SPEED) * (Math.random() < 0.5 ? -1 : 1),
    }
  })
}

function HeroOrbsCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return undefined
    }

    const context = canvas.getContext('2d')
    if (!context) {
      return undefined
    }

    let animationFrame = 0
    let orbs = []

    const resizeCanvas = () => {
      const { clientWidth, clientHeight } = canvas
      const ratio = window.devicePixelRatio || 1
      canvas.width = clientWidth * ratio
      canvas.height = clientHeight * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      orbs = createOrbs(clientWidth, clientHeight)
    }

    const draw = () => {
      const { clientWidth, clientHeight } = canvas
      context.clearRect(0, 0, clientWidth, clientHeight)

      const colors = getThemeColors()
      orbs.forEach((orb, index) => {
        orb.x += orb.vx * orb.depth
        orb.y += orb.vy * orb.depth

        if (orb.x < -orb.radius) {
          orb.x = clientWidth + orb.radius
        }
        if (orb.x > clientWidth + orb.radius) {
          orb.x = -orb.radius
        }
        if (orb.y < -orb.radius) {
          orb.y = clientHeight + orb.radius
        }
        if (orb.y > clientHeight + orb.radius) {
          orb.y = -orb.radius
        }

        const colorBlend = index % 2 === 0 ? colors.primary : colors.secondary
        const gradient = context.createRadialGradient(
          orb.x,
          orb.y,
          orb.radius * 0.2,
          orb.x,
          orb.y,
          orb.radius * 1.2
        )

        gradient.addColorStop(0, `rgba(${colorBlend[0]}, ${colorBlend[1]}, ${colorBlend[2]}, ${0.35 * orb.depth})`)
        gradient.addColorStop(0.6, `rgba(${colorBlend[0]}, ${colorBlend[1]}, ${colorBlend[2]}, ${0.15 * orb.depth})`)
        gradient.addColorStop(1, `rgba(${colors.glow[0]}, ${colors.glow[1]}, ${colors.glow[2]}, 0)`)

        context.fillStyle = gradient
        context.beginPath()
        context.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        context.fill()
      })

      animationFrame = window.requestAnimationFrame(draw)
    }

    resizeCanvas()
    animationFrame = window.requestAnimationFrame(draw)
    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}

export default HeroOrbsCanvas
