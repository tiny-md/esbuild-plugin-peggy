# Esbuild Plugin Peggy <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 40px"/>

[![test](https://github.com/tiny-md/esbuild-plugin-peggy/actions/workflows/test.yml/badge.svg)](https://github.com/tiny-md/esbuild-plugin-peggy/actions/workflows/test.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/aa896ec14c570f3bb274/maintainability)](https://codeclimate.com/github/tiny-md/esbuild-plugin-peggy/maintainability) [![codecov](https://codecov.io/gh/tiny-md/esbuild-plugin-peggy/graph/badge.svg)](https://codecov.io/gh/tiny-md/esbuild-plugin-peggy) [![Version](https://img.shields.io/npm/v/esbuild-plugin-peggy.svg?colorB=green)](https://www.npmjs.com/package/esbuild-plugin-peggy) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/esbuild-plugin-peggy.svg)](https://www.npmjs.com/package/esbuild-plugin-peggy) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/esbuild-plugin-peggy) [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

Esbuild Plugin Peggy is a comprehensive library designed to unlock the full potential of React 18 server components. It provides customizable loading animation components and a fullscreen loader container, seamlessly integrating with React and Next.js.

✅ Fully Treeshakable (import from `esbuild-plugin-peggy/client/loader-container`)

✅ Fully TypeScript Supported

✅ Leverages the power of React 18 Server components

✅ Compatible with all React 18 build systems/tools/frameworks

✅ Documented with [Typedoc](https://tiny-md.github.io/esbuild-plugin-peggy) ([Docs](https://tiny-md.github.io/esbuild-plugin-peggy))

✅ Examples for Next.js, and Vite

> <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 20px"/> Star [this repository](https://github.com/tiny-md/esbuild-plugin-peggy) and share it with your friends.

## Getting Started

### Installation

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

## Want Lite Version? [![npm bundle size](https://img.shields.io/bundlephobia/minzip/esbuild-plugin-peggy-lite)](https://www.npmjs.com/package/esbuild-plugin-peggy-lite) [![Version](https://img.shields.io/npm/v/esbuild-plugin-peggy-lite.svg?colorB=green)](https://www.npmjs.com/package/esbuild-plugin-peggy-lite) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/esbuild-plugin-peggy-lite.svg)](https://www.npmjs.com/package/esbuild-plugin-peggy-lite)

```bash
pnpm add esbuild-plugin-peggy-lite
```

**or**

```bash
npm install esbuild-plugin-peggy-lite
```

**or**

```bash
yarn add esbuild-plugin-peggy-lite
```

> You need `r18gs` as a peer-dependency

### Import Styles

You can import styles globally or within specific components.

```css
/* globals.css */
@import "esbuild-plugin-peggy/dist";
```

```tsx
// layout.tsx
import "esbuild-plugin-peggy/dist/index.css";
```

For selective imports:

```css
/* globals.css */
@import "esbuild-plugin-peggy/dist/client"; /** required if you are using LoaderContainer */
@import "esbuild-plugin-peggy/dist/server/bars/bars1";
```

### Usage

Using loaders is straightforward.

```tsx
import { Bars1 } from "esbuild-plugin-peggy/dist/server/bars/bars1";

export default function MyComponent() {
  return someCondition ? <Bars1 /> : <>Something else...</>;
}
```

For detailed API and options, refer to [the API documentation](https://tiny-md.github.io/esbuild-plugin-peggy).

**Using LoaderContainer**

`LoaderContainer` is a fullscreen component. You can add this component directly in your layout and then use `useLoader` hook to toggle its visibility.

```tsx
// layout.tsx
<LoaderContainer />
	 ...
```

```tsx
// some other page or component
import { useLoader } from "esbuild-plugin-peggy/dist/hooks";

export default MyComponent() {
	const { setLoading } = useLoader();
	useCallback(()=>{
		setLoading(true);
		...do some work
		setLoading(false);
	}, [])
	...
}
```

## License

This library is licensed under the MPL-2.0 open-source license.



> <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 20px"/> Please enroll in [our courses](https://mayank-chaudhari.vercel.app/courses) or [sponsor](https://github.com/sponsors/mayank1513) our work.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
