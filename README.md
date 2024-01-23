### README.md

# Testing issue with 8.14.0

## Setup and Packaging

Ensure you have `pnpm` version 8.14.2 installed. Run the following commands:

```bash
pnpm install
pnpm build
pnpm pack
```

This will create a `.tgz` file. Please inspect the contents of this file and verify that the `prepack` script using `clean-package.js` was not executed, which is an observed behavior with `pnpm` version 8.14.2. This process works as expected in version 8.14.0.


```
.
└── package/
    ├── dist/
    │   └── index.js
    ├── package.json
    └── src/
        └── index.ts   <---- this file is was started showing up
```
