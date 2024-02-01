import path from 'path';
import glob from 'glob';

export default {
  build: {
    outDir: path.resolve(__dirname, 'build'),
    emptyOutDir: true,
    cssCodeSplit: true,
    jsInject: `import React from 'react'`,
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
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
