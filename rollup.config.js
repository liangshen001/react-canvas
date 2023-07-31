import { DEFAULT_EXTENSIONS } from '@babel/core';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescriptEngine from 'typescript';
import pkg from './package.json';
import json from "@rollup/plugin-json";
import clear from "rollup-plugin-clear";
import replace from "@rollup/plugin-replace";

const config = {
    input: './src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: false,
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: false,
        },
    ],
    plugins: [
        clear({targets: ['dist']}),
        external(),
        typescript({
            tsconfig: './tsconfig.json',
            typescript: typescriptEngine,
            sourceMap: false,
        }),
        commonjs(),
        babel({
            extensions: [...DEFAULT_EXTENSIONS, '.ts', 'tsx'],
            babelHelpers: 'bundled',
            exclude: /node_modules/,
        }),
        json(),
        resolve(),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        terser({format: {comments: false}}),
    ],
    watch: {
        clearScreen: false,
    },
};
export default config;
