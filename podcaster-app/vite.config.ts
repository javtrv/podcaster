import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command, mode }) => ({

  build: {
    manifest: false,
    minify: mode === 'development' ? false : 'esbuild',
    sourcemap: command === 'serve' ? 'inline' : false,
  },

  plugins: [tsconfigPaths(),react()],
}));