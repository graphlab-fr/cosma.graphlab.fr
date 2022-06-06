---
title: Cosma v1.2
date: 2022-06-06
draft: false
github: "https://github.com/graphlab-fr/cosma/releases/tag/1.2"
downloadMac: "https://github.com/graphlab-fr/cosma/releases/download/1.2/Cosma.app.zip"
downloadWin: "https://github.com/graphlab-fr/cosma/releases/download/1.2/Cosma-win32-x64.zip"
zenodo: "https://zenodo.org/record/5920616"
---

This update adds the following features:

- The records directory is now read recursively. This means all records are now taken into account, whatever their location in a possible subdirectory structure.
- HTML elements used in the text of records are now recognized and interpreted.

Bugs have also been solved:

- Context tooltips for typed links are no longer empty (issue #15).
- Clicking on saved views displays them correctly (issue #16).
- Vertical and horizontal attraction settings are no longer switched (issue #18).