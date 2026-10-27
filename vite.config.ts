import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import { legacyApps } from './plugins/legacy-apps.ts'

export default defineConfig({
  // kelvinice.github.io is a user site, so it is served from the domain root.
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    imagetools({
      // Shorthand query params → responsive, modern-format images at build time.
      //   import shot from './shot.png?picture'  (project screenshots)
      //   import me from './me.jpg?avatar'       (small square images)
      defaultDirectives: (url) => {
        if (url.searchParams.has('picture')) {
          return new URLSearchParams({ w: '480;800', format: 'avif;webp;jpg', as: 'picture' })
        }
        if (url.searchParams.has('avatar')) {
          return new URLSearchParams({ w: '160;320', format: 'avif;webp;jpg', as: 'picture' })
        }
        return new URLSearchParams()
      },
    }),
    legacyApps('apps'),
  ],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
})
