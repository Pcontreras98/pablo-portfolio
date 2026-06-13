import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { SITE_SEO, absoluteUrl } from './src/config/seo.js'

function injectSeoPlaceholders(html) {
  const siteUrl = absoluteUrl('').replace(/\/$/, '')
  const ogImage = absoluteUrl(SITE_SEO.ogImage)
  return html.replaceAll('__SITE_URL__', siteUrl).replaceAll('__OG_IMAGE__', ogImage)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inject-seo-html',
      transformIndexHtml: injectSeoPlaceholders,
    },
  ],
  build: {
    target: 'es2020',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react-vendor'
          }
          if (id.includes('react-type-animation')) return 'type-animation'
        },
      },
    },
  },
})
