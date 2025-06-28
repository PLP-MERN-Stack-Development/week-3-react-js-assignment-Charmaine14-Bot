import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ghPages from 'vite-plugin-gh-pages'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/Charmaine14-Bot/task-manager.git', //this is very important
});