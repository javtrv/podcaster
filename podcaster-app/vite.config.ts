import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ command, mode }) => ({

  build: {
    manifest: false,
    minify: mode === 'development' ? false : 'esbuild',
    sourcemap: command === 'serve' ? 'inline' : false,
  },

  plugins: [react()],
}));