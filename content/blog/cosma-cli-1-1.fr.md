---
title: Cosma CLI v1.1
date: 2022-03-10
draft: false
github: "https://github.com/graphlab-fr/cosma-cli/releases/tag/1.1.0"
zenodo: "https://zenodo.org/record/5920616"
---

Cette mise à jour ajoute quelques fonctionnalités de lecture et d'écriture des fiches :

- Nouvelle option de `modelize`, `--config`, dont la valeur doit être le chemin absolu d'un fichier de configuration. Ceci rend Cosma CLI capable de travailler avec plusieurs répertoires, sans que l'utilisateur doive échanger manuellement les fichiers de configuration au niveau du dossier support.
- Si un fichier de configuration contient des erreurs de syntaxe YAML, une erreur est générée avec un message informatif.
- Le répertoire de fiches sont désormais lus de manière récursive. Ceci permet de prendre en compte toutes les fiches, quel que soit leur emplacement dans une éventuelle structure de sous-répertoires.
- Les éléments HTML insérés dans le corps des fiches sont désormais reconnus et interprétés.

Des bugs ont également été résolus :

- Les infobulles de contexte ne sont plus vides lorsque le lien est qualifié (ticket #15).
- Le fonctionnement des vues enregistrées est rétabli (ticket #16).
- Le réglage de l'attraction verticale et horizontale n'est plus inversé (ticket #18).
- L'option `--custom-css` (ou `-css`) est de nouveau reconnue (ticket #19).