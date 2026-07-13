import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    imagetools(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    imagetools()
  ],
})
