import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { buttonClass } from '@/lib/button'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      className={buttonClass({ variant: 'ghost', size: 'icon' })}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {theme === 'dark' ? <Sun aria-hidden /> : <Moon aria-hidden />}
    </button>
  )
}
