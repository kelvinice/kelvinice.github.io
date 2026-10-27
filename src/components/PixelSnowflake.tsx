import { cn } from '@/lib/cn'

// 11×11 pixel snowflake, the site's logo (also in public/favicon.svg).
const GRID = [
  '.....#.....',
  '.#..###..#.',
  '..#..#..#..',
  '...#.#.#...',
  '.#..###..#.',
  '###########',
  '.#..###..#.',
  '...#.#.#...',
  '..#..#..#..',
  '.#..###..#.',
  '.....#.....',
]

const PIXELS = GRID.flatMap((row, y) =>
  [...row].flatMap((cell, x) => (cell === '#' ? [{ x, y }] : [])),
)

type Props = { className?: string; title?: string }

export function PixelSnowflake({ className, title }: Props) {
  return (
    <svg
      viewBox="0 0 11 11"
      shapeRendering="crispEdges"
      fill="currentColor"
      className={cn('size-6', className)}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      {PIXELS.map(({ x, y }) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />
      ))}
    </svg>
  )
}
