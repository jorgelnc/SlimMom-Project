import path from "path";
import glob from "glob";

export default {
    build: {
        outDir: path.resolve(__dirname, "build"),
        emptyOutDir: true,
        cssCodeSplit: true,
        jsxInject: `import React from 'react'`,
        lib: {
            entry: path.resolve(__dirname, "src/index.jsx"),
            formats: ["esm"]
        },
        rollupOptions: {
            input: glob.sync(path.resolve(__dirname, "src/index.jsx")),
            output: {
                preserveModules: true,
                preserveModulesRoot: "src",
                entryFileNames: ({name: index}) => {
                    return `${index}.jsx`
                }
            }
        }
    }
}