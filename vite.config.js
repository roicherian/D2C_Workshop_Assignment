import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Local stand-ins for the real @acko/* packages, aliased so imports match
// the real design system's per-package import pattern (see CLAUDE.md).
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@acko/button': path.resolve(__dirname, 'src/vendor/acko/button'),
      '@acko/card': path.resolve(__dirname, 'src/vendor/acko/card'),
      '@acko/typography': path.resolve(__dirname, 'src/vendor/acko/typography'),
      '@acko/breadcrumb': path.resolve(__dirname, 'src/vendor/acko/breadcrumb'),
      '@acko/textinput': path.resolve(__dirname, 'src/vendor/acko/textinput'),
      '@acko/label': path.resolve(__dirname, 'src/vendor/acko/label'),
      '@acko/field': path.resolve(__dirname, 'src/vendor/acko/field'),
      '@acko/inputgroup': path.resolve(__dirname, 'src/vendor/acko/inputgroup'),
      '@acko/radiogroup': path.resolve(__dirname, 'src/vendor/acko/radiogroup'),
      '@acko/dropdown': path.resolve(__dirname, 'src/vendor/acko/dropdown'),
      '@acko/toggle': path.resolve(__dirname, 'src/vendor/acko/toggle'),
    },
  },
})
