import type { Plugin, PluginBuild } from "esbuild";
import fs from "node:fs";
import { generate, ParserBuildOptions } from "peggy";

/**
 * Generates a short random string using current timestamp and Math.random.
 * Used to assign a unique plugin name to avoid naming collisions.
 */
const uuid = () => (Date.now() * Math.random()).toString(36).slice(0, 8);

/**
 * Dynamically generated plugin name to avoid collision with other plugins.
 */
const name = `peggy-${uuid()}`;

/**
 * Defines the type for plugin options:
 * - Either a global `ParserBuildOptions` object
 * - Or an array of objects, each with a RegExp `pathPattern` and associated options
 */
type IPeggyPluginOptions =
  | ParserBuildOptions
  | Array<{ pathPattern: RegExp; options: ParserBuildOptions }>;

/**
 * esbuild plugin to compile `.pegjs` or `.peggy` grammar files using Peggy.
 *
 * @param pluginOptions - Optional Peggy parser options (global or per file pattern)
 * @returns An esbuild-compatible plugin object
 */
export const peggyPlugin: (options?: IPeggyPluginOptions) => Plugin = pluginOptions => ({
  name,
  setup(build: PluginBuild) {
    // Hook into esbuild's file loading process for .pegjs/.peggy files
    build.onLoad({ filter: /\.peg(js|gy)$/, namespace: "file" }, args => {
      // Read grammar file as UTF-8 text
      const text = fs.readFileSync(args.path, "utf8");

      // Determine parser options based on matching path pattern (if array of rules is provided)
      const options = Array.isArray(pluginOptions)
        ? pluginOptions.find(({ pathPattern }) => pathPattern.test(args.path))?.options
        : pluginOptions;

      // Compile the PEG grammar to a parser module
      const contents = `export default ${generate(text, options)}`;

      // Return the parser code as a TypeScript module
      return { contents, loader: "ts" };
    });
  },
});
