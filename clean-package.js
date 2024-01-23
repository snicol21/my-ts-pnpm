module.exports = {
  replace: {
    main: "dist/index.js",
    module: "dist/index.mjs",
    types: "dist/index.d.ts",
    sideEffects: false,
    author: "Test",
    license: "MIT",
    publishConfig: {
      access: "restricted",
      registry: "https://npm.pkg.github.com",
    },
    exports: {
      ".": {
        types: "./dist/index.d.ts",
        import: "./dist/index.mjs",
        require: "./dist/index.js",
      },
      "./package.json": "./package.json",
    },
  },
}
