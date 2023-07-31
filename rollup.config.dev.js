// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import clear from 'rollup-plugin-clear';
import html from "@rollup/plugin-html";
import typescriptEngine from "typescript";
import babel from "@rollup/plugin-babel";
import {DEFAULT_EXTENSIONS} from "@babel/core";
import external from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import image from "@rollup/plugin-image";
import replace from "@rollup/plugin-replace";

export default [
    // CommonJS (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // an array for the `output` option, where we can specify
    // `file` and `format` for each target)
    {
        input: './dev/index.tsx',
        plugins: [
            clear({targets: ['dev/dist']}),
            typescript({
                tsconfig: './tsconfig.dev.json',
                typescript: typescriptEngine,
                sourceMap: false,
            }),
            commonjs(),
            babel({
                extensions: [...DEFAULT_EXTENSIONS, '.ts', 'tsx'],
                babelHelpers: 'bundled',
                exclude: /node_modules/,
            }),
            image(),
            json(),
            resolve({
                browser: true
            }),
            replace({
                preventAssignment: true,
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            }),
            serve({open: true, openPage: '/dev/dist/'}),
            livereload(),
            html({
                fileName: `index.html`,
                meta: [],
                template: ({ attributes, bundle, files, publicPath, title }) => {
                    const jsFile = files.js.find((item) => {
                        const reg = eval(`/${item}.*?.js$/`);
                        return reg.test(item.fileName);
                    });
                    return `<!DOCTYPE html>
                    <html lang="${attributes.html.lang}">
                      <head>
                        <title>${title}</title>
                      </head>
                      <body>
                        <canvas id="canvas" width="800" height="400"></canvas>
                        <script src="./${jsFile.fileName}" type="module"></script>
                      </body>
                  </html>`;
                },
                title: `index`,
            })
        ],
        output: [
            {file: 'dev/dist/index.js', format: 'es'}
        ]
    }
];
