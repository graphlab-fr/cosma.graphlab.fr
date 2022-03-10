---
title: Cosma CLI v1.1
date: 2022-03-10
draft: false
github: "https://github.com/graphlab-fr/cosma-cli/releases/tag/1.1.0"
zenodo: "https://zenodo.org/record/5920616"
---

This update adds the following features:

- New `modelize` option, `--config`, the value of which must be the absolute path of a config file. This makes Cosma CLI capable of working with multiple directories, without having to manually shuffle around config files in the support folder.
- If a config file includes YAML syntax mistakes, an error is thrown with a helpful message.
- Records directories are now read recursively. This means all records are now taken into account, whatever their location in a possible subdirectory structure.
- HTML elements used in the text of records are now recognized and interpreted.

Bugs have also been solved:

- Context tooltips for typed links are no longer empty (issue #15).
- Clicking on saved views displays them again (issue #16).
- Vertical and horizontal attraction settings are no longer switched (issue #18).
- The `--custom-css` (or `-css`) option works again (issue #19).