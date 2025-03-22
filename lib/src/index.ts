import type { Plugin, PluginBuild } from "esbuild";
import fs from "node:fs";
import { generate, ParserBuildOptions } from "peggy";

/** generate random id */
const uuid = () => (Date.now() * Math.random()).toString(36).slice(0, 8);

/** generate random name to avoid collision among the plugins */
const name = `peggy-${uuid()}`;

type IPeggyPluginOptions =
  | ParserBuildOptions
  | Array<{ pathPattern: RegExp; options: ParserBuildOptions }>;

/** Plugin to load `.peg(js|gy)` files as minified strings */
export const peggyPlugin: (options?: IPeggyPluginOptions) => Plugin = pluginOptions => ({
  name,
  setup(build: PluginBuild) {
    build.onLoad({ filter: /\.peg(js|gy)$/, namespace: "file" }, args => {
      const text = fs.readFileSync(args.path, "utf8");
      const options = Array.isArray(pluginOptions)
        ? pluginOptions.find(({ pathPattern }) => pathPattern.test(args.path))?.options
        : pluginOptions;
      const contents = `export default ${generate(text, options)}`;
      return { contents, loader: "ts" };
    });
  },
});
