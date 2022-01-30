---
title: Cosma v1.1
date: 2022-01-30
draft: false
github: "https://github.com/graphlab-fr/cosma/releases/tag/1.1"
downloadMac: "https://github.com/graphlab-fr/cosma/releases/download/1.1/Cosma.app.zip"
downloadWin: "https://github.com/graphlab-fr/cosma/releases/download/1.1/Cosma-win32-x64.zip"
zenodo: "https://zenodo.org/record/5920616"
---

Cette mise à jour ajoute la possibilité de changer de langue (anglais ou français), résout des bugs et améliore l'interface, notamment au niveau de la configuration.

- L'application est traduite en anglais, il est possible de changer de langue dans Préférences.
- Créer une fiche sans spécifier de répertoire ne cause plus d'erreur mais renvoie un message informatif (ticket #6).
- Créer une fiche avec un titre déjà utilisé n'écrase plus silencieusement la fiche existante mais demande une confirmation (ticket #5).
- Il est possible d'utiliser `keywords` au lieu de `tags` dans l'en-tête YAML des fiches (ticket #3).
- Il n'est plus nécessaire de déclarer un type de fiche dans la configuration avant de pouvoir l'assigner à une nouvelle fiche.
- La fenêtre Préférences a été réorganisée en sections.
- La lisibilité des rapports d'erreur a été améliorée.
- L'option `minify` permettant de réduire la taille des exports, non fonctionnelle en v1.0, a été supprimée.
- L'application est distribuée avec sa documentation, accessible via Aide › Manuel ou bien en cliquant sur le bouton Aide en bas à gauche dans le cosmoscope.
- Le code source a été réorganisé pour permettre le développement simultané d'une version exécutable en ligne de commande ([cosma-cli](https://github.com/graphlab-fr/cosma-cli)) à partir de la même base de code ([cosma-core](https://github.com/graphlab-fr/cosma-core)).
- Mise à jour de Electron v13 vers v15.