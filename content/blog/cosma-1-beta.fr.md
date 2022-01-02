---
title: Cosma v1.0-beta
date: 2021-08-31
draft: false
downloadMac: "https://github.com/graphlab-fr/cosma/releases/download/1.0-beta/Cosma.app.zip"
downloadWin: "https://github.com/graphlab-fr/cosma/releases/download/1.0-beta/Cosma.exe"
github: "https://github.com/graphlab-fr/cosma/releases/tag/1.0-beta"
---

Après le développement d'une première version utilisable en ligne de commande, Cosma fait peau neuve et devient une application autonome, à interface graphique, disponible sur macOS et Windows.

🚧 **Attention : ceci est une bêta partiellement documentée et comportant quelques bugs.** 🚧

[La documentation utilisateur est à jour et en ligne.](https://cosma.graphlab.fr/docs/) La documentation de développement sera mise à jour et publiée prochainement.

Les bugs feront l'objet de correctifs qui seront rassemblés dans une version ultérieure. Une liste des bugs connus est mise à jour périodiquement ci-dessous :

- Historique : cliquer sur "Modifier" modifie les champs de plusieurs entrées d'historique à la fois.
- Configuration : si un chemin précédemment enregistré renvoie vers un fichier/dossier qui n'existe plus (fichier/dossier supprimé ou renommé), ce chemin ne peut pas être modifié via l'application. Modifiez manuellement le fichier `config.json` situé dans les fichier de support à l'application : `~/Library/Application Support/cosma` (macOS).