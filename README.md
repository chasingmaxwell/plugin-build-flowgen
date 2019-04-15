# plugin-build-flowgen

> A [@pika/pack](https://github.com/pikapkg/pack) build plugin.
> Adds Flow type definitions generated from TypeScript definitions.


## Install

```sh
# npm:
npm install plugin-build-flowgen --save-dev
# yarn:
yarn add plugin-build-flowgen --dev
```


## Usage

```js
{
  "name": "example-package-json",
  "version": "1.0.0",
  "@pika/pack": {
    "pipeline": [
      /* Generates the TypeScript definition files: */
      ["@pika/plugin-ts-standard-pkg"]
      /* Generates the Flow definition files: */
      ["@pika/plugin-build-flowgen"]
    ]
  }
}
```


## Result

Generate a corresponding `*.js.flow` file for every `*.d.ts` file inside the `dist-types` directory.
