import type { CSSProperties, ReactNode } from 'react'
import type { Illustration } from '@/data/work'
import { cn } from '@/lib/cn'

/**
 * Abstract, text-free UI mock-ups for work that can't be shown (NDA). They read as
 * "enterprise system" without revealing anything about the real product.
 * Colours come from the theme tokens, so they follow dark/light mode.
 */

const LINE = 'var(--line)'
const SOFT = 'var(--surface-2)'
const ACCENT = 'var(--accent)'
const OK = 'var(--ok)'

// Content area of the window, right of the sidebar.
const X0 = 104
const X1 = 364

function Bar({
  x,
  y,
  w,
  h = 6,
  fill = LINE,
  o,
}: {
  x: number
  y: number
  w: number
  h?: number
  fill?: string
  o?: number
}) {
  return <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} opacity={o} />
}

/** Pops its children in once the card scrolls into view; `i` staggers siblings. */
function Pop({ i = 0, children }: { i?: number; children: ReactNode }) {
  return (
    <g className="ill-pop" style={{ '--i': i } as CSSProperties}>
      {children}
    </g>
  )
}

function Box({
  x,
  y,
  w,
  h,
  fill = SOFT,
  stroke,
}: {
  x: number
  y: number
  w: number
  h: number
  fill?: string
  stroke?: string
}) {
  return <rect x={x} y={y} width={w} height={h} rx={6} fill={fill} stroke={stroke} />
}

function Erp() {
  const cols = [0, 1, 2]
  const rows = [0, 1, 2, 3, 4, 5]
  return (
    <>
      {cols.map((i) => (
        <g key={i}>
          <Box x={X0 + i * 88} y={58} w={78} h={40} />
          <Bar x={X0 + 10 + i * 88} y={68} w={30} h={5} />
          <Bar
            x={X0 + 10 + i * 88}
            y={81}
            w={46}
            h={8}
            fill={i === 0 ? ACCENT : 'var(--muted)'}
            o={i === 0 ? 1 : 0.5}
          />
        </g>
      ))}
      <Box x={X0} y={110} w={X1 - X0} h={16} />
      {rows.map((r) => (
        <g key={r} transform={`translate(0 ${136 + r * 18})`}>
          <Bar x={X0 + 8} y={0} w={18} />
          <Bar x={X0 + 36} y={0} w={60 + ((r * 23) % 40)} />
          <Bar x={X0 + 140} y={0} w={34} />
          <Pop i={r}>
            <Bar x={X0 + 190} y={-1} w={30} h={8} fill={r % 3 === 1 ? ACCENT : OK} o={0.75} />
          </Pop>
        </g>
      ))}
    </>
  )
}

function Hris() {
  const mid = (X0 + X1) / 2
  const level2 = [X0 + 34, mid, X1 - 34]
  return (
    <g stroke={LINE} strokeWidth={2} fill="none">
      <path
        d={`M${mid} 84 V98 M${level2[0]} 98 H${level2[2]} M${level2[0]} 98 V112 M${mid} 98 V112 M${level2[2]} 98 V112`}
      />
      {level2.map((x) => (
        <path
          key={x}
          d={`M${x} 136 V150 M${x - 22} 150 H${x + 22} M${x - 22} 150 V162 M${x + 22} 150 V162`}
        />
      ))}
      <g stroke="none">
        <Box x={mid - 34} y={60} w={68} h={24} fill={ACCENT} />
        <Bar x={mid - 20} y={69} w={40} fill="var(--on-accent)" o={0.8} />
        {level2.map((x) => (
          <g key={x}>
            <Box x={x - 28} y={112} w={56} h={24} />
            <Bar x={x - 16} y={121} w={32} />
            {[-22, 22].map((dx) => (
              <g key={dx}>
                <circle cx={x + dx} cy={172} r={10} fill={SOFT} />
                <circle cx={x + dx} cy={170} r={4} fill={LINE} />
              </g>
            ))}
          </g>
        ))}
        {[0, 1].map((r) => (
          <g key={r} transform={`translate(0 ${200 + r * 18})`}>
            <Bar x={X0} y={0} w={70} />
            <Bar x={X0 + 90} y={0} w={110} o={0.6} />
            <Pop i={r}>
              <Bar x={X1 - 40} y={-1} w={40} h={8} fill={r ? OK : ACCENT} o={0.75} />
            </Pop>
          </g>
        ))}
      </g>
    </g>
  )
}

function Dashboard() {
  const points = [0, 18, 10, 32, 26, 44, 38, 58, 50, 66]
  const step = 166 / (points.length - 1)
  const line = points.map((p, i) => `${X0 + i * step},${186 - p}`).join(' ')
  const bars = [44, 70, 52, 86, 64]
  return (
    <>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <Box x={X0 + i * 66} y={58} w={58} h={36} />
          <Bar x={X0 + 8 + i * 66} y={67} w={24} h={4} />
          <Bar
            x={X0 + 8 + i * 66}
            y={78}
            w={36}
            h={7}
            fill={i === 1 ? ACCENT : 'var(--muted)'}
            o={i === 1 ? 1 : 0.45}
          />
        </g>
      ))}
      <Box x={X0} y={104} w={176} h={96} fill="none" stroke={LINE} />
      <polygon
        points={`${X0},196 ${line} ${X0 + 166},196`}
        fill={ACCENT}
        opacity={0.14}
        transform="translate(5 0)"
      />
      <polyline
        className="ill-draw"
        pathLength={1}
        points={line}
        fill="none"
        stroke={ACCENT}
        strokeWidth={2.5}
        strokeLinejoin="round"
        transform="translate(5 0)"
      />
      <Box x={X0 + 186} y={104} w={X1 - X0 - 186} h={96} fill="none" stroke={LINE} />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={X0 + 198 + i * 14}
          y={192 - h}
          width={8}
          height={h}
          rx={2}
          fill={i === 3 ? ACCENT : LINE}
          className="ill-rise"
          style={{ '--i': i } as CSSProperties}
        />
      ))}
      <Box x={X0} y={210} w={X1 - X0} h={30} />
      <Bar x={X0 + 10} y={222} w={120} />
      <Pop>
        <Bar x={X1 - 70} y={221} w={60} h={8} fill={OK} o={0.75} />
      </Pop>
    </>
  )
}

function Cms() {
  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={X0 + i * 18}
          y={58}
          width={12}
          height={12}
          rx={3}
          fill={i === 2 ? ACCENT : LINE}
        />
      ))}
      <Pop>
        <Bar x={X1 - 50} y={59} w={50} h={10} fill={ACCENT} />
      </Pop>
      <Box x={X0} y={80} w={168} h={160} fill="none" stroke={LINE} />
      <Box x={X0 + 10} y={90} w={148} h={46} fill={ACCENT} />
      <Bar x={X0 + 20} y={104} w={80} h={7} fill="var(--on-accent)" o={0.85} />
      <Bar x={X0 + 20} y={118} w={50} h={5} fill="var(--on-accent)" o={0.6} />
      {[0, 1, 2].map((i) => (
        <Bar key={i} x={X0 + 10} y={148 + i * 12} w={148 - i * 30} h={5} />
      ))}
      <Box x={X0 + 10} y={188} w={70} h={42} />
      <path d={`M${X0 + 18} 222 l14 -16 10 10 8 -6 14 12z`} fill={LINE} />
      <Box x={X0 + 88} y={188} w={70} h={42} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(0 ${84 + i * 38})`}>
          <Bar x={X0 + 180} y={0} w={34} h={5} />
          <Box x={X0 + 180} y={10} w={X1 - X0 - 180} h={18} fill="none" stroke={LINE} />
        </g>
      ))}
    </>
  )
}

function Marketplace() {
  return (
    <>
      <Box x={X0} y={58} w={X1 - X0} h={22} fill="none" stroke={LINE} />
      <circle cx={X0 + 14} cy={69} r={4} fill="none" stroke={LINE} strokeWidth={2} />
      <Bar x={X0 + 26} y={66} w={90} />
      <Bar x={X1 - 44} y={64} w={36} h={10} fill={ACCENT} />
      {[0, 1].map((r) =>
        [0, 1, 2].map((c) => {
          const x = X0 + c * 89
          const y = 92 + r * 82
          return (
            <g key={`${r}-${c}`}>
              <Box x={x} y={y} w={82} h={74} fill="none" stroke={LINE} />
              <Box x={x + 6} y={y + 6} w={70} h={36} />
              <path d={`M${x + 20} ${y + 34} h30 l-6 -10 h-14 z`} fill={LINE} />
              <Bar x={x + 6} y={y + 50} w={50} h={5} />
              <Bar x={x + 6} y={y + 61} w={34} h={6} fill={ACCENT} o={(r + c) % 2 ? 0.6 : 1} />
              {r === 0 && c === 1 && (
                <Pop i={1}>
                  <Bar x={x + 48} y={y + 10} w={24} h={8} fill={OK} />
                </Pop>
              )}
            </g>
          )
        }),
      )}
    </>
  )
}

function Assets() {
  const marked: Record<string, string> = {
    '0-2': ACCENT,
    '1-4': OK,
    '1-5': ACCENT,
    '2-1': OK,
    '3-3': ACCENT,
    '3-6': OK,
  }
  const states = [ACCENT, OK, 'var(--muted)', LINE]
  return (
    <>
      <Bar x={X0} y={60} w={80} h={7} />
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3, 4, 5, 6].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={X0 + c * 22}
            y={78 + r * 22}
            width={18}
            height={18}
            rx={4}
            fill={marked[`${r}-${c}`] ?? SOFT}
            className={marked[`${r}-${c}`] ? 'ill-pop' : undefined}
            style={{ '--i': r + c / 2 } as CSSProperties}
          />
        )),
      )}
      {states.map((fill, i) => (
        <g key={i}>
          <Box x={X0 + 166} y={60 + i * 40} w={X1 - X0 - 166} h={26} fill="none" stroke={LINE} />
          <circle cx={X0 + 180} cy={73 + i * 40} r={5} fill={fill} />
          <Bar x={X0 + 192} y={70 + i * 40} w={52} />
          {i < states.length - 1 && (
            <path d={`M${X0 + 180} ${86 + i * 40} v14`} stroke={LINE} strokeWidth={2} />
          )}
        </g>
      ))}
      <Box x={X0} y={176} w={152} h={64} fill="none" stroke={LINE} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <Bar x={X0 + 10} y={188 + i * 16} w={70 - i * 12} />
          <Pop i={i + 2}>
            <Bar x={X0 + 112} y={187 + i * 16} w={30} h={8} fill={i === 1 ? OK : ACCENT} o={0.75} />
          </Pop>
        </g>
      ))}
    </>
  )
}

const scenes: Record<Illustration, () => ReactNode> = {
  erp: Erp,
  hris: Hris,
  dashboard: Dashboard,
  cms: Cms,
  marketplace: Marketplace,
  assets: Assets,
}

export function UiIllustration({ kind, className }: { kind: Illustration; className?: string }) {
  const Scene = scenes[kind]
  return (
    <svg
      viewBox="0 0 400 250"
      aria-hidden
      className={cn('block', className)}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="250" fill="var(--bg-2)" />
      <rect width="400" height="250" fill={ACCENT} opacity={0.05} />
      {/* App window: title bar + sidebar, bleeding off the bottom edge. */}
      <rect x="24" y="24" width="352" height="246" rx="10" fill="var(--surface)" stroke={LINE} />
      {[38, 49, 60].map((cx) => (
        <circle key={cx} cx={cx} cy={35} r={3} fill={LINE} />
      ))}
      <path d="M24 46.5 H376 M92.5 46.5 V250" stroke={LINE} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <Bar
          key={i}
          x={34}
          y={60 + i * 16}
          w={i === 1 ? 46 : 38 - (i % 3) * 6}
          fill={i === 1 ? ACCENT : LINE}
          o={i === 1 ? 0.9 : 1}
        />
      ))}
      <Scene />
    </svg>
  )
}
