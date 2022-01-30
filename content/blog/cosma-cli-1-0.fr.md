---
title: Cosma CLI v1.0
date: 2022-01-30
draft: false
github: "https://github.com/graphlab-fr/cosma-cli/releases/tag/1.0"
zenodo: "https://zenodo.org/record/5920616"
---

Cosma est désormais disponible à nouveau dans sa version exécutable en ligne de commande (*command-line interface, CLI). Cette version CLI est disponible sur macOS, Windows et Linux. L'installation de [NodeJS](https://nodejs.org/) version 15 minimum est requise. Entrez la commande suivante dans votre terminal pour installer Cosma CLI :

```
npm i @graphlab-fr/cosma -g
```

La documentation a été mise à jour : <https://cosma.graphlab.fr/docs/manuel-utilisation/#cosma-cli>

Les modifications suivantes ont été faites depuis la version alpha :

- Le code source a été réorganisé pour permettre le développement simultané des versions GUI et CLI à partir de la même base de code ([cosma-core](https://github.com/graphlab-fr/cosma-core)).
- Le fichier de configuration `config.yml` a été réorganisé. Le logiciel n'est pas rétrocompatible : si vous aviez un fichier `config.yml` datant de l'alpha, il sera nécessaire de re-créer un fichier `config.yml` conforme via la commande `cosma config` puis le modifier. L'emplacement du fichier dépend désormais du chemin d'installation de Cosma CLI. Sur Windows : `%USERPROFILE%\AppData\Roaming\npm\node_modules\@graphlab-fr\cosma\config.yml`. Sur macOS et Linux : `/usr/local/lib/node_modules/@graphlab-fr/cosma/config.yml`.
- Une nouvelle commande `cosma batch` permet de créer des fiches par lots. Elle est documentée [ici](https://cosma.graphlab.fr/docs/manuel-utilisation/#creer-un-lot-de-fiches).
- L'option `minify` permettant de réduire la taille des exports, non fonctionnelle en v1.0, a été supprimée.