import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr({
    svgrOptions: {
      icon: true,
      dimensions: false,
      expandProps: 'start',
      prettier: false,
      svgo: true,
      svgoConfig: {
        plugins: [
          { removeViewBox: false },
          { cleanupIDs: false },
        ],
      },
    },
  }),],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/styles/variables.scss';`,
      },
    },
  },
});
