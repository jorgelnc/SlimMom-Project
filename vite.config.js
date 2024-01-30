import path from "path";
import glob from "glob";

export default {
    build: {
        outDir: path.resolve(__dirname, "build"),
        emptyOutDir: true,
        cssCodeSplit: true,
        lib: {
            entry: path.resolve(__dirname, "src/index.js"),
            formats: ["esm"]
        },
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
    }
}