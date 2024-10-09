import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
export default [
    {
        input: './src/index.js',
        output: [
            {
                dir: 'dist',
                format: 'commonjs',
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled'
            }),

        ]
    },
];
