# Esbuild Plugin Peggy <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" height="40" alt="popper"/>

[![Test](https://github.com/tiny-md/esbuild-plugin-peggy/actions/workflows/test.yml/badge.svg)](https://github.com/tiny-md/esbuild-plugin-peggy/actions/workflows/test.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/aa896ec14c570f3bb274/maintainability)](https://codeclimate.com/github/tiny-md/esbuild-plugin-peggy/maintainability)
[![Coverage](https://codecov.io/gh/tiny-md/esbuild-plugin-peggy/graph/badge.svg)](https://codecov.io/gh/tiny-md/esbuild-plugin-peggy)
[![npm version](https://img.shields.io/npm/v/esbuild-plugin-peggy.svg?colorB=green)](https://www.npmjs.com/package/esbuild-plugin-peggy)
[![npm downloads](https://img.shields.io/npm/dm/esbuild-plugin-peggy.svg)](https://www.npmjs.com/package/esbuild-plugin-peggy)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/esbuild-plugin-peggy)](https://bundlephobia.com/package/esbuild-plugin-peggy)
[![Gitpod Ready](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

> 🔌 Seamlessly load `.pegjs` or `.peggy` grammar files directly into your esbuild pipeline

---

## ✨ Features

- Compile `.pegjs` / `.peggy` files as ES modules with zero config
- Fully compatible with both **JavaScript** and **TypeScript**
- No Node.js-only dependencies get into your codebase — frontend safe!
- Supports custom parser options and per-file overrides
- Simple, fast, and modern integration with esbuild

---

## 📦 Installation

```bash
pnpm add esbuild-plugin-peggy
```

**_or_**

```bash
npm install esbuild-plugin-peggy
```

**_or_**

```bash
yarn add esbuild-plugin-peggy
```

---

## 🚀 Usage

```ts
// esbuild.config.ts
import { build } from "esbuild";
import { peggyPlugin } from "esbuild-plugin-peggy";

build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  outfile: "dist/bundle.js",
  plugins: [peggyPlugin()],
});
```

Then in your source code:

```ts
import parser from "./grammar.pegjs";

const result = parser.parse("your input here");
```

---

## ⚙️ Plugin Options

You can pass either a global config or a list of per-file configs using `ParserBuildOptions` from [peggy](https://github.com/peggyjs/peggy).

### Global options

```ts
peggyPlugin({
  allowedStartRules: ["Expression"],
});
```

### Per-file options

```ts
peggyPlugin([
  {
    pathPattern: /calculator\.pegjs$/,
    options: { allowedStartRules: ["Calc"] },
  },
]);
```

---

## 📁 Supported File Types

- `.pegjs`
- `.peggy`

---

## 🛠 Example

```ts
import parser from "./math.pegjs";

console.log(parser.parse("2 + 2")); // 4
```

---

## ✅ Why Use This?

- Skip manual parser builds — just import and use
- Compatible with modern tooling and frameworks
- Great for in-browser parsing and visual tooling
- Keeps frontend builds clean of Node-only deps

---

> <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" height="20"/>
> Star this [repository](https://github.com/tiny-md/esbuild-plugin-peggy) and share it with friends.

---

## 📜 License

Licensed under the **MPL-2.0** license.
© [Mayank Chaudhari](https://github.com/mayank1513)

---

> <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" height="20"/>
> 📚 Enroll in [our courses](https://mayank-chaudhari.vercel.app/courses) or [sponsor](https://github.com/sponsors/mayank1513) our work.

---

<p align="center"><sub>Made with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></sub></p>
