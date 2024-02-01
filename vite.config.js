import path from 'path';
import glob from 'glob';

export default {
  build: {
    outDir: path.resolve(__dirname, 'build'),
    emptyOutDir: true,
    cssCodeSplit: true,
    jsxInject: `import React from 'react'`,
    lib: {
      entry: path.resolve(__dirname, 'src/index.{js,html,jsx}'),
      formats: ['esm'],
    },
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, 'src/index.{js,html,jsx}')),
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src/index.{js,html,jsx}',
        entryFileNames: ({ name: index }) => {
          return `${index}.js`;
        },
      },
    },
  },
};
