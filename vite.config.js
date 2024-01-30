
import { defineConfig } from 'vite';
import path from 'path';
import glob from 'glob';

export default defineConfig({
  build: {
    lib: {
      entry: glob.sync(path.resolve(__dirname, 'lib/**/*.js')),
      name: '',
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        // ^^^ This one is not required but if I understand correctly you do need it in your use case
      },
    },
},  
},);



  
// import path from "path";
// import glob from "glob";

// export default {
//     build: {
//         outDir: path.resolve(__dirname, "build"),
//         emptyOutDir: true,
//         cssCodeSplit: true,
//         lib: {
//             entry: path.resolve(__dirname, "src/**/*.{js,css,jsx}"),
//             formats: ["esm"]
//         },
//         rollupOptions: {
//             input: glob.sync(path.resolve(__dirname, "src/**/*.{js,css,jsx}")),
//             output: {
//                 preserveModules: true,
//                 preserveModulesRoot: "src",
//                 entryFileNames: ({name: fileName}) => {
//                     return `${fileName}.js`
//                 }
//             }
//         }
//     }
// }