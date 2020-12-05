const { build } = require("esbuild");
const svelte = require("esbuild-svelte/configurable");
const path = require("path");
const { preprocess } = require("./svelte.config");

const production = process.env.NODE_ENV === "production";

const options = {
  entryPoints: [path.resolve(__dirname, "src/index.ts")],
  bundle: true,
  outfile: path.resolve(__dirname, "public/build/bundle.js"),
  plugins: [
    svelte({ preprocessor: preprocess })
  ],
  tsconfig: path.resolve(__dirname, "tsconfig.json")
}

if (production) {
  options.minify = true;
  options.treeShaking = true;
}

build(options)
  .then(({ warnings }) => {
    if (warnings && warnings.length) {
      warnings.forEach(w => console.warn(w));
      return;
    }
    console.log("Bundle created");
  });