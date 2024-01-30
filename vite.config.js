import ReactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    plugins: [ReactRefresh(), injectHTML(), FullReload(['./src/**/**.js'])],
    build: {
      sourcemap: true,
      outDir: '../dist',
      jsxInject: `import React from 'react'`,
      rollupOptions: {
        input: {
          main: './src/**/**.{js,jsx,html}',
        },
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom'], // Añade otras dependencias si las necesitas
    },
  };
});


// import path from "path";
// import glob from "glob";

// export default {
//     build: {
//         outDir: path.resolve(__dirname, "build"),
//         emptyOutDir: true,
//         cssCodeSplit: true,
//         jsxInject: `import React from 'react'`,
//         lib: {
//             entry: path.resolve(__dirname, "src/index.jsx"),
//             formats: ["esm"]
//         },
//         rollupOptions: {
//             input: glob.sync(path.resolve(__dirname, "src/index.jsx")),
//             output: {
//                 preserveModules: true,
//                 preserveModulesRoot: "src",
//                 entryFileNames: ({name: index}) => {
//                     return `${index}.jsx`
//                 }
//             }
//         }
//     }
// }