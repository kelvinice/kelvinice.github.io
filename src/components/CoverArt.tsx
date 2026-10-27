import type { ProjectCover, Tone } from '@/data/projects'
import { cn } from '@/lib/cn'
import { PixelSnowflake } from './PixelSnowflake'

const toneText: Record<Tone, string> = {
  ice: 'text-ice',
  pink: 'text-pink',
  gold: 'text-gold',
  lime: 'text-lime',
}

// LPC spritesheets are 13×21 frames of 64px; row 10, column 0 is the character facing the camera.
const FRAME = 64
const SCALE = 2

function Sprite({ src }: { src: string }) {
  return (
    <div
      aria-hidden
      className="animate-float [image-rendering:pixelated]"
      style={{
        width: FRAME * SCALE,
        height: FRAME * SCALE,
        backgroundImage: `url(${src})`,
        backgroundSize: `${832 * SCALE}px ${1344 * SCALE}px`,
        backgroundPosition: `0 -${10 * FRAME * SCALE}px`,
      }}
    />
  )
}

/** Stand-in "cartridge art" for projects without a screenshot. */
export function CoverArt({ cover, title }: { cover: ProjectCover; title: string }) {
  const Icon = cover.icon
  return (
    <div
      className={cn(
        'relative flex size-full items-center justify-center overflow-hidden bg-bg-2',
        toneText[cover.tone],
      )}
    >
      {/* Tinted pixel grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          maskImage: 'radial-gradient(circle at center, black, transparent 75%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-current/25 to-transparent"
      />
      <PixelSnowflake className="absolute top-4 right-4 size-6 opacity-40" />

      {cover.sprites ? (
        <div className="relative flex items-end -space-x-10">
          {cover.sprites.map((src) => (
            <Sprite key={src} src={src} />
          ))}
        </div>
      ) : (
        Icon && (
          <div className="relative border-3 border-current bg-surface/80 p-5 shadow-[4px_4px_0_0_var(--shadow)]">
            <Icon className="size-12" strokeWidth={1.75} aria-hidden />
          </div>
        )
      )}

      <span
        aria-hidden
        className="absolute bottom-3 left-4 font-pixel text-[0.55rem] tracking-widest uppercase opacity-60"
      >
        {title}
      </span>
    </div>
  )
}
