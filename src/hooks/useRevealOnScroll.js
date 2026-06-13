import { useEffect, useRef, useState } from 'react'

const revealTransitionClass =
  'transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0'

export function useRevealOnScroll({
  threshold = 0.08,
  rootMargin = '0px 0px -6% 0px',
} = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  function getRevealProps(delayMs = 0, className = '') {
    const motion = visible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-8 motion-reduce:translate-y-0 motion-reduce:opacity-100'
    const delay = delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined

    return {
      className: `${revealTransitionClass} ${motion} ${className}`.trim(),
      style: delay,
    }
  }

  return { ref, visible, getRevealProps }
}
