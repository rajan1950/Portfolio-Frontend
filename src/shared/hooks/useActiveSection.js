import { useEffect, useState } from 'react'

export function useActiveSection(items) {
  const [activeSection, setActiveSection] = useState(items[0]?.id ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            if (b.intersectionRatio !== a.intersectionRatio) {
              return b.intersectionRatio - a.intersectionRatio
            }

            return Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
          })

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0, 0.25, 0.6],
      },
    )

    items.forEach((item) => {
      const section = document.getElementById(item.id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [items])

  return activeSection
}
