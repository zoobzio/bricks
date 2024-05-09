import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["src/module.ts"],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true, 
  },
  externals: ["@nuxt/schema"],
})
