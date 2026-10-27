import { Snowflake, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { pixelButtonClass } from '@/lib/pixelButton'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      className={pixelButtonClass({ variant: 'secondary', size: 'icon' })}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {theme === 'dark' ? <Sun aria-hidden /> : <Snowflake aria-hidden />}
    </button>
  )
}
