import { defineConfig } from "vite";
import * as glob from "glob";
import path, { resolve } from "node:path";
import htmlPurge from 'vite-plugin-purgecss';
import handlebars from 'vite-plugin-handlebars';

// Function to get HTML entries
const getHtmlEntries = () => {
    return Object.fromEntries(
        glob.sync('src./**//*.html', {
            ignore: ['./dist/**', './node_modules/**']
        }).map(file => [
            file.slice(0, file.length - path.extname(file).length),
            resolve(__dirname, file)
        ])
    );
};

export default defineConfig({
    appType: 'mpa',
    base: "/deplo/",
    build: {
        rollupOptions: {
            input: getHtmlEntries()
        }
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src/partials'),
        }),
        htmlPurge({}),
    ]
});