import path from 'path';
import glob from 'glob';

export default {
  esbuild: {
    outDir: path.resolve(__dirname, 'build'),
    emptyOutDir: true,
    cssCodeSplit: true,
    jsxInject: `import React from 'react'`,
    lib: {
      entry: path.resolve(__dirname, 'src/index.{js,html}'),
      formats: ['esm'],
    },
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, 'src/index.js')),
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src/index.js',
        entryFileNames: ({ name: FileName }) => {
          return `${FileName}.js`;
        },
      },
    },
  },
};
