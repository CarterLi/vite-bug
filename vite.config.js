import vue from '@vitejs/plugin-vue'
import pluginTs from 'vite-plugin-ts';
import { defineConfig } from 'vite';

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [vue(), pluginTs()],
  build: {
    target: process.env.NODE_ENV === 'production' ? 'chrome60' : 'esnext',
  },
  resolve: {
    extensions: ['.vue', '.ts'],
  },
});
