import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const setPath = (dir) => {
  return path.resolve(__dirname,dir)
}

export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      "styles": setPath("./src/styles"),
      "lib": setPath("./src/lib"),
      "components": setPath("./src/components"),
    }
  }
})