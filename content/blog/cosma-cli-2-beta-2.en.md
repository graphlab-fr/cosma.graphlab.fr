---
title: Cosma CLI v2-beta-2
date: 2023-01-24
draft: false
github: "https://github.com/graphlab-fr/cosma-cli/releases/tag/2.0-beta-2"
zenodo: "https://zenodo.org/record/5920616"
---

#### Improvements

- When `history: true`, cosmoscopes are saved in a `history` subdirectory, either in the user data directory for global configurations, or in the same directory as the local configuration.

#### Fixed bugs

- Windows: The execution path is located correctly.
- Windows: The user data directory is created correctly.
- The `logs` directory is created correctly.
- Record titles containing only a date in the YYYY-MM-DD format are interpreted correctly.

