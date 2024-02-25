ArcRead Epub reader using react by [React Reader](https://github.com/gerhardsletten/react-reader?tab=readme-ov-file) and [Epub.js v0.3](https://github.com/futurepress/epub.js) - an iframe based epub-reader that can run in browser, cordova and other web-based enviroments.

<img src="src/assets/ex/ex1.png" />

Screenshoot 1

<img src="src/assets/ex/ex2.png" />

Screenshoot 2

<img src="src/assets/ex/ex3.png" />

Screenshoot 3

<img src="src/assets/ex/ex4.png" />

Screenshoot 4

<img src="src/assets/ex/ex5.png" />

Screenshoot 5

## Install

`npm i react-reader`

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
