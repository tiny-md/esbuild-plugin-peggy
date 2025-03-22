import { beforeAll, describe, test } from "vitest";
import esbuild from "esbuild";
import path from "node:path";
import fs from "node:fs";
import { peggyPlugin } from "../src";

describe("WebGL plugins", () => {
  test("Smoke", async ({ expect }) => {
    await esbuild.build({
      format: "cjs",
      target: "es2019",
      sourcemap: false,
      bundle: true,
      minify: true,
      entryPoints: [path.resolve(__dirname, "peggy/latex.pegjs")],
      outdir: "__tests__/dist",
      treeShaking: true,
      plugins: [
        // @ts-expect-error -- ok
        peggyPlugin({
          output: "source",
          format: "bare",
          allowedStartRules: ["document", "math"],
          cache: true,
        }),
      ],
    });
    expect(fs.existsSync(path.resolve(__dirname, "dist/latex.js"))).toBe(true);
  });

  test("options with file RegExp", async ({ expect }) => {
    await esbuild.build({
      format: "cjs",
      target: "es2019",
      sourcemap: false,
      bundle: true,
      minify: true,
      entryPoints: [path.resolve(__dirname, "peggy/latex.pegjs")],
      outdir: "__tests__/dist",
      treeShaking: true,
      plugins: [
        peggyPlugin([
          {
            pathPattern: /latex/,
            options: {
              output: "source",
              format: "bare",
              allowedStartRules: ["document", "math"],
              cache: true,
            },
          },
        ]),
      ],
    });
    expect(fs.existsSync(path.resolve(__dirname, "dist/latex.js"))).toBe(true);
  });
});
