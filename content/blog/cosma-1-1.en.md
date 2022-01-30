---
title: Cosma v1.1
date: 2022-01-30
draft: false
github: "https://github.com/graphlab-fr/cosma/releases/tag/1.1"
downloadMac: "https://github.com/graphlab-fr/cosma/releases/download/1.1/Cosma.app.zip"
downloadWin: "https://github.com/graphlab-fr/cosma/releases/download/1.1/Cosma-win32-x64.zip"
zenodo: "https://zenodo.org/record/5920616"
---

This update introduces a full English translation of the application, as well as a few bug fixes and small interface improvements.

- The application is translated into English, visit Preferences › General to switch languages.
- Creating a record without first specifying a directory no longer causes an error but returns an informative message (issue #6).
- Creating a record with a title already in use no longer silently overwrites the existing record but asks for confirmation (issue #5).
- It is now possible to use `keywords` instead of `tags` in the records' YAML header (issue #3).
- It is no longer necessary to declare a record type in the configuration before assigning it to a new record.
- The Preferences window has been reorganised into sections.
- The readability of error reports has been improved.
- The `minify` option to reduce the size of exports, which was not functional in v1.0, has been removed.
- The application is now distributed with its documentation, accessible via Help › Manual or by clicking on the Help button at the bottom left of the cosmoscope.
- The source code has been reorganised to allow the simultaneous development of a command line version ([cosma-cli](https://github.com/graphlab-fr/cosma-cli)) from the same code base ([cosma-core](https://github.com/graphlab-fr/cosma-core)).
- Upgrade from Electron v13 to v15.

