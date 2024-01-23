### README.md

# Testing PNPM issue with v8.14.2

## Setup and Packaging

Ensure you have `pnpm` version 8.14.2 installed. Run the following commands:

```bash
pnpm install && pnpm build && pnpm pack
```

This will create a `.tgz` file. Please inspect the contents of this file and verify that the `prepack` script using `clean-package.js` was not executed, which is an observed behavior with `pnpm` version 8.14.2. This process works as expected in version 8.14.0.

```
.
└── package/
    ├── dist/
    │   └── index.js
    ├── package.json
    └── src/
        └── index.ts   <---- this file is what started showing up
```

I've noticed that if I run things in this order it works as expected.

```bash
pnpm install && pnpm build && pnpm prepack && pnpm pack
```

But I've done over 100 releases of the package I'm working with and it has always ran `prepack` for me without me having to manually run it.
