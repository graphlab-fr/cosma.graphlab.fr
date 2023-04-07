---
title: Cosma CLI v2-beta-2
date: 2023-01-24
draft: false
github: "https://github.com/graphlab-fr/cosma-cli/releases/tag/2.0-beta-2"
zenodo: "https://zenodo.org/record/5920616"
---

## Améliorations

- L'enregistrement automatique des cosmoscopes se fait dans un sous-répertoire `history`, soit dans le répertoire de données utilisateur pour les configurations globales, soit dans le même répertoire que la configuration locale pour cette dernière.

## Bugs résolus

- Le chemin d'exécution sur Windows est correctement trouvé, ce qui permet la bonne exécution de l'application.
- Le répertoire de données utilisateur se crée correctement sur Windows.
- Le dossier `logs` contenant les rapports d'erreurs se crée correctement.
- Les titres de fiches contenant seulement une date au format YYYY-MM-DD sont interprétés correctement.
