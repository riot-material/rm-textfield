const riot = require("rollup-plugin-riot");
const commonjs = require("@rollup/plugin-commonjs");
const nodeResolve = require("@rollup/plugin-node-resolve").default;

const globals = {
    "@riot-material/rm-textfield-container": "riotMaterial.components.textfieldContainer"
};
const external = Object.keys(globals);

export default [
    {
        input: "src/index.riot",
        external,
        plugins: [
            nodeResolve(),
            commonjs(),
            riot()
        ],
        output: [
            {
                file: "dist/index.es.js",
                format: "es"
            },
            {
                name: "riotMaterial.components.textfield",
                file: "dist/index.js",
                format: "umd",
                globals
            }
        ]
    },
    {
        input: "src/index.riot",
        plugins: [
            nodeResolve(),
            commonjs(),
            riot()
        ],
        output: [
            {
                name: "riotMaterial.components.textfield",
                file: "dist/index+libs.js",
                format: "umd"
            }
        ]
    }
];