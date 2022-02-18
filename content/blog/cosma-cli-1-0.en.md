---
title: Cosma CLI v1.0
date: 2022-01-30
draft: false
github: "https://github.com/graphlab-fr/cosma-cli/releases/tag/1.0.0"
zenodo: "https://zenodo.org/record/5920616"
---

Cosma is now available again in its command-line interface (CLI) version. This CLI version is available on macOS, Windows and Linux. [NodeJS](https://nodejs.org/) version 15 or higher is required. Enter the following command to install Cosma CLI:

```
npm i @graphlab-en/cosma -g
```

The documentation has been updated: <https://cosma.graphlab.fr/en/docs/user-manual/#cosma-cli>

The following changes have been made since the alpha:

- The source code has been reorganised to allow the simultaneous development of the GUI and CLI versions from the same code base ([cosma-core](https://github.com/graphlab-fr/cosma-core)).
- The configuration file `config.yml` has been reorganised. The software is not backwards compatible: if you had a `config.yml` file from the alpha, it will be necessary to re-create a compliant `config.yml` file via the `cosma config` command and then modify it. The location of the file now depends on the Cosma CLI installation path. On Windows: `%USERPROFILE%\AppData\Roaming\npm\node_modules\@graphlab-en\cosma\config.yml`. On macOS and Linux: `/usr/local/lib/node_modules/@graphlab-fr/cosma/config.yml`.
- A new `cosma batch` command allows you to create multiple records in one go. It is documented [here](https://cosma.graphlab.fr/docs/manuel-utilisation/#creer-un-lot-de-fiches).
- The `minify` option to reduce the size of exports, which was not functional in v1.0, has been removed.
