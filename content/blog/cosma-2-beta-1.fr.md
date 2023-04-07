---
title: Cosma v2-beta-1
date: 2023-03-06
draft: false
downloadMac: "https://github.com/graphlab-fr/cosma/releases/download/2.0-beta-1/Cosma.dmg"
downloadWin: "https://github.com/graphlab-fr/cosma/releases/download/2.0-beta-1/Cosma-win32-x64.zip"
downloadLin: "https://github.com/graphlab-fr/cosma/releases/download/2.0-beta-1/Cosma.deb"
github: "https://github.com/graphlab-fr/cosma/releases/tag/2.0-beta-1"
---

Ceci est la première bêta de Cosma GUI v2. Elle comprend trois changements majeurs :

1. Cosma s'imprègne de l'esprit de l'[Otletosphere](https://hyperotlet.huma-num.fr/otletosphere/) : en plus de fichiers Markdown, les cosmoscopes peuvent désormais être créés à partir de données tabulaires, et nous avons ajouté de nouvelles options graphiques telles que régler les nœuds sur une taille fixe, et utiliser des images comme vignettes/portraits sur les nœuds et dans les fiches.
2. Les projets ! Cosma est maintenant capable de gérer plusieurs projets, chacun correspondant à une source de données.
3. Le mode chronologique est un nouveau filtre d'affichage basé sur des métadonnées temporelles. C'est un curseur qui permet de faire apparaître et disparaître les nœuds en fonction des métadonnées `begin` et `end`. *Work-in-progress*.

### Ajouts

- Gérer plusieurs projets
- Utiliser une syntaxe alternative pour les liens
- Afficher des métadonnées supplémentaires dans les fiches dans le cosmoscope
- Exclure certaines fiches lors de la génération du cosmoscope, sur la base des types, mots-clés et métadonnées supplémentaires
- Afficher les nœuds en mode chronologique
- Embarquer des images dans le cosmoscope (en base64). Formats pris en charge : JPG, PNG
- Associer une image à un type de fiche
- Associer une image à une fiche (affichée sur le nœud et dans la fiche)
- Définir une couleur de contour pour les types de nœuds
- Choisir entre nœuds de taille fixe et de taille proportionnelle à leur degré

### Améliorations

- Les liens en bibliographie sont désormais cliquables
- Le rapport d'erreurs et d'avertissements est plus informatif
- Les mots-clés au sommet des fiches dans le cosmoscope ne débordent plus de la mise en page
- Cosma lit désormais les répertoires de fiches de manière récursive (ticket [#4](https://github.com/graphlab-fr/cosma/issues/4))

### Bugs résolus

- Les infobulles de contexte des liens/rétroliens mettent correctement en évidence la fiche cible (ticket [#23](https://github.com/graphlab-fr/cosma/issues/23))
- Les espaces dans les noms de fichiers générés par Cosma sont correctement remplacés par des tirets

### Bugs connus

- Le traitement des citations échoue parfois dans les infobulles de contexte des rétroliens