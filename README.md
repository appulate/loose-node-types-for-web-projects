# Loose Node.js TypeScript definitions for web projects

## Problem

If some of the `@types` packages refers to `@types/node` via `<reference types='node' />` then the global Node typings will be taken into account and they will override `setInterval` and `setTimeout` signatures (it changes the return value from `number` to `NodeJS.Timer`) for example.
Related links:
* https://github.com/Microsoft/TypeScript/issues/18588
* https://github.com/microsoft/TypeScript/issues/31148
* https://github.com/microsoft/TypeScript/issues/32273
* https://github.com/DefinitelyTyped/DefinitelyTyped/issues/21310
* https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33015
* https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34036

## Solution

To solve this problem, we use the Yarn resolutions functionality to replace the `@types/node` package with one that contains almost no types:
```json
{
  "resolutions": {
    "@types/node": "@appulate/loose-node-types-for-web-projects",
  }
}
