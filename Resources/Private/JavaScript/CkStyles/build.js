const esbuild = require("esbuild");
const extensibilityMap = require("@neos-project/neos-ui-extensibility/extensibilityMap.json");
const isWatch = process.argv.includes("--watch");

/** @type {import("esbuild").BuildOptions} */
const options = {
    logLevel: "info",
    bundle: true,
    minify: !isWatch,
    sourcemap: "linked",
    legalComments: "linked",
    target: "es2020",
    entryPoints: {
        Plugin: "./src/index.ts",
    },
    outdir: "../../../Public/JavaScript/CkStyles/",
    alias: {
        "@ckeditor/ckeditor5-ui/theme/components/form/form.css": "./empty.css",
        "@ckeditor/ckeditor5-ui/theme/components/responsive-form/responsiveform.css": "./empty.css",
        ...extensibilityMap,
    },
    loader: {
        ".svg": "text",
        ".css": "empty",
    },
};

if (isWatch) {
    esbuild.context(options).then((ctx) => ctx.watch())
} else {
    esbuild.build(options);
}
