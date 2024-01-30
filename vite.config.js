import ReactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    plugins: [ReactRefresh(), injectHTML(), FullReload(['./src/**/**.html'])],
    build: {
      sourcemap: true,
      outDir: '../dist',
     rollupOptions: {
            input: glob.sync(path.resolve(__dirname, "src/**/*.{js,css}")),
            output: {
                preserveModules: true,
                preserveModulesRoot: "src",
                entryFileNames: ({name: fileName}) => {
                    return `${fileName}.js`
                }
            }
        }
    },
    optimizeDeps: {
      include: ['react', 'react-dom'], // Añade otras dependencias si las necesitas
    },
  };
});
