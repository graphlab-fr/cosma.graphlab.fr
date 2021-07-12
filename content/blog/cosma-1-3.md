---
title: "Cosma v1.3"
date: 2021-07-12
draft: false
download: "https://github.com/graphlab-fr/cosma/archive/refs/tags/1.3.0.zip"
github: "https://github.com/graphlab-fr/cosma/releases/tag/1.3.0"
zenodo: "https://zenodo.org/record/5091607#.YOwNTC0isUE"
---

Cette mise à jour ajoute le traitement des données bibliographiques, ainsi que des améliorations d'interface.

- Le focus centre la vue sur le nœud sélectionné.
- Ajout du traitement automatique des citations (*citation processing*) rédigées au format Pandoc Markdown. Exemple : `[@goody1979, 34]` dans le fichier source en Markdown sera transformé en (Goody 1979, p. 34) en HTML, avec la référence complète en bas de la fiche.
- Les données bibliographiques utilisées dans les fiches sont incluses dans le cosmoscope. Elles sont consultables et téléchargeables au format CSL JSON via un panneau dédié accessible depuis le bouton "Données bibliographiques" en bas à gauche du menu.
- Ajout d'infobulles d’aide pour certaines fonctionnalités de l'interface (ex : paramètres du graphe).
- Ajout d'une antisèche des raccourcis dans le panneau "Aide" accessible via le bouton du même nom en bas à gauche du menu.
- Amélioration de la génération des rapports d'erreur pour le cosmographe.
- Modification des noms de certains paramètres de la configuration (simplification, alignement sur les pratiques d’autres projets).
