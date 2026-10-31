/** Keyboard shortcut labels, matched to the visitor's platform. */
export const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.userAgent)

export const commandShortcut = isMac ? '⌘K' : 'Ctrl K'
