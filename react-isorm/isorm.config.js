module.exports = {
  type: "react", //? default Node.js
  react: {
    format: "tsx", //? default tsx
    watch: ["pages", "components"],
    esbuild: {
      entryPoints: ["./pages/index.tsx"],
      outfile: "build/bundle.js",
      bundle: true,
      minify: true,
      sourcemap: true,
      keepNames: true,
      plugins: [],
      loader: { ".js": "tsx" },
      allowOverwrite: true,
    },
  },
};
