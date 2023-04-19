---
title: Cosma CLI v2
date: 2023-04-19
draft: false
github: "https://github.com/graphlab-fr/cosma-cli/releases/tag/2.0.0"
zenodo: "https://zenodo.org/record/5920616"
---

Avec cette mise à jour, Cosma CLI v2 sort de bêta.

## Ajouts

- Gérer plusieurs configurations (globales et locales)
- Utiliser une syntaxe alternative pour les liens
- Inclure des métadonnées supplémentaires lors de la création par lots (batch)
- Afficher des métadonnées supplémentaires dans les fiches dans le cosmoscope
- Exclure certaines fiches lors de la génération du cosmoscope, sur la base des types, mots-clés et métadonnées supplémentaires
- Afficher les nœuds en mode chronologique
- Embarquer des images dans le cosmoscope (en base64). Formats pris en charge : JPG, PNG
- Associer une image à un type de fiche
- Associer une image à une fiche (affichée sur le nœud et dans la fiche)
- Définir une couleur de contour pour les types de nœuds
- Choisir entre nœuds de taille fixe et de taille proportionnelle à leur degré

## Améliorations

- Les liens en bibliographie sont désormais cliquables
- Les messages affichés à l'exécution des commandes sont plus informatifs
- Le rapport d'erreurs et d'avertissements est plus informatif
- Les mots-clés au sommet des fiches dans le cosmoscope ne débordent plus de la mise en page
- Cosma lit désormais les répertoires de fiches de manière récursive (ticket [#4](https://github.com/graphlab-fr/cosma/issues/4))
- L'enregistrement automatique des cosmoscopes se fait dans un sous-répertoire `history`, soit dans le répertoire de données utilisateur pour les configurations globales, soit dans le même répertoire que la configuration locale pour cette dernière.

## Bugs résolus

- Les infobulles de contexte des liens/rétroliens mettent correctement en évidence la fiche cible (ticket [#23](https://github.com/graphlab-fr/cosma/issues/23))

## Bugs connus

- Les citations sont traitées dans les infobulles des liens mais pas celles des rétroliens
- Les retours chariot Windows (CR LF) ne sont pas correctement interprétés
- L'exécution de la commande `modelize` ne s'interrompt pas lorsque les données sont issues de fichiers CSV en ligne
- Si l'identifiant d'une fiche n'est pas une suite de chiffres, les liens vers cette fiche ne fonctionnent pas
- Les liens vers des fiches dont l'identifiant contient des espaces ne sont pas rendus correctement dans le corps des fiches