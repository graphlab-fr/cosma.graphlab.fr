---
title: Cosma v1.2
date: 2022-06-06
draft: true
github: "https://github.com/graphlab-fr/cosma/releases/tag/1.2"
downloadMac: "https://github.com/graphlab-fr/cosma/releases/download/1.2/Cosma.app.zip"
downloadWin: "https://github.com/graphlab-fr/cosma/releases/download/1.2/Cosma-win32-x64.zip"
zenodo: "https://zenodo.org/record/5920616"
---

Cette mise à jour ajoute quelques fonctionnalités de lecture et d'écriture des fiches :

- Le répertoire de fiches est désormais lu de manière récursive. Ceci permet de prendre en compte toutes les fiches, quel que soit leur emplacement dans une éventuelle structure de sous-répertoires.
- Les éléments HTML insérés dans le corps des fiches sont désormais reconnus et interprétés.

Des bugs ont également été résolus :

- Les infobulles de contexte ne sont plus vides lorsque le lien est qualifié (ticket #15).
- Le fonctionnement des vues enregistrées est rétabli (ticket #16).
- Le réglage de l'attraction verticale et horizontale n'est plus inversé (ticket #18).