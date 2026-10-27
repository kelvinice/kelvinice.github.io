import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/lib/cn'

type Flake = { x: number; y: number; size: number; speed: number; drift: number; phase: number }

type Props = {
  /** Flakes per 10,000 px² of canvas. */
  density?: number
  className?: string
}

/**
 * Falling square "pixels" on a canvas. Pauses when off-screen or the tab is hidden,
 * and renders a single still frame for visitors who prefer reduced motion.
 */
export function PixelSnow({ density = 0.9, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    let width = 0
    let height = 0
    let flakes: Flake[] = []
    let frame = 0
    let visible = true
    let color = '232 241 255'

    const readColor = () => {
      color = getComputedStyle(document.documentElement).getPropertyValue('--snow').trim() || color
    }

    const spawn = (anywhere: boolean): Flake => {
      const size = [2, 3, 3, 4, 5][Math.floor(Math.random() * 5)]
      return {
        x: Math.random() * width,
        y: anywhere ? Math.random() * height : -size,
        size,
        speed: 0.25 + size * 0.12 + Math.random() * 0.3,
        drift: 0.3 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
      }
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(((width * height) / 10_000) * density)
      flakes = Array.from({ length: count }, () => spawn(true))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (const f of flakes) {
        // Bigger flakes are "closer": brighter and faster (cheap parallax).
        ctx.fillStyle = `rgb(${color} / ${0.25 + f.size * 0.12})`
        ctx.fillRect(Math.round(f.x), Math.round(f.y), f.size, f.size)
      }
    }

    const tick = (time: number) => {
      for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i]
        f.y += f.speed
        f.x += Math.sin(time / 1400 + f.phase) * f.drift * 0.4
        if (f.y > height) flakes[i] = spawn(false)
        else if (f.x > width) f.x = 0
        else if (f.x < 0) f.x = width
      }
      if (time % 1000 < 17) readColor() // theme may have changed
      draw()
      frame = requestAnimationFrame(tick)
    }

    const start = () => {
      cancelAnimationFrame(frame)
      if (!reducedMotion && visible && !document.hidden) frame = requestAnimationFrame(tick)
    }

    readColor()
    resize()
    draw()

    const resizeObserver = new ResizeObserver(() => {
      resize()
      draw()
    })
    resizeObserver.observe(canvas)

    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      start()
    })
    intersection.observe(canvas)

    const themeObserver = new MutationObserver(() => {
      readColor()
      draw()
    })
    themeObserver.observe(document.documentElement, { attributeFilter: ['data-theme'] })

    document.addEventListener('visibilitychange', start)
    start()

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      intersection.disconnect()
      themeObserver.disconnect()
      document.removeEventListener('visibilitychange', start)
    }
  }, [density, reducedMotion])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 size-full', className)}
    />
  )
}
