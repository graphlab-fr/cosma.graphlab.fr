---
title: Foire aux questions
layout: faq
---

## J'ai essayé de lancer l'application mais mon système d'exploitation m'en empêche.

Vous pouvez ignorer les avertissements de votre système d'exploitation et lancer Cosma sans crainte, à condition de télécharger l'application depuis notre dépôt GitHub, seule source officielle. Pour outrepasser les alertes du système, vous devez avoir les privilèges administrateur sur votre session. Sur macOS, faites un clic droit puis Ouvrir sur l'application (vous aurez peut-être à le faire deux fois).

Explication : Windows et macOS requièrent que le code d'une application soit « signé » afin de pouvoir lui faire confiance automatiquement. Ceci passe par l'obtention d'un certificat de signature de code. Le processus est techniquement trivial mais il est payant, car lourd d'enjeux. En effet, si une application n'est pas signée, le système fait obstacle à l'installation, en affichant une alerte et en demandant que l'utilisateur confirme son intention. Dans le doute, beaucoup d'utilisateurs renoncent à installer une application non signée. Les fournisseurs d'applications ont donc tout intérêt à signer leur application pour qu'elle soit utilisée. Mais le cas de Cosma est particulier : c'est un logiciel expérimental, créé dans le cadre d'une démarche de recherche-conception, le développement initial vient tout juste d'aboutir et n'est financé que ponctuellement. L'application n'est donc pas signée.

## Quand j'essaie de créer une fiche, l'application me renvoie une erreur incompréhensible.

Vous n'avez probablement pas renseigné de répertoire de fiches dans Préférences. Le répertoire peut être vide mais il faut en renseigner un pour que Cosma sache où créer des fiches.

Le problème est corrigé en version 1.1.

## J'ai créé une fiche avec le même nom qu'une fiche existante, et l'ancienne a disparu !

Ce bug nous a été signalé après la sortie de la version 1.0. [Téléchargez la version 1.1](https://github.com/graphlab-fr/cosma/releases/latest), qui résout le problème.

N'oubliez pas de sauvegarder vos données, que ce soit en faisant des copies à intervalle régulier ou bien en utilisant un système de gestion des versions comme [git](https://git-scm.com).

## Est-ce que je peux ne pas utiliser d'identifiants uniques et relier plutôt mes fiches via leurs titres ?

Non, c'est un élément du [format de données requis par Cosma](https://graphlab-fr.github.io/cosma/fr.html#format-de-donnees) qui nous tient à cœur.

Nous mentionnons régulièrement cette question (voir la page [À propos](/a-propos) du site, [le billet de lancement](https://www.arthurperret.fr/cosma-de-la-fiche-au-graphe.html) et [certains tweets](https://twitter.com/arthurperret/status/1434985852434882561)) : utiliser des identifiants uniques offre une meilleure garantie de pérennité des données, car on diminue le risque de liens morts sans dépendre d'une fonctionnalité de maintenance automatisée.

### Oui mais les liens hypertexte à 14 chiffres, c'est lourd…

Cosma inclut la possibilité d'alléger visuellement les liens tels qu'ils se présentent dans le cosmoscope : vous pouvez choisir de remplacer les identifiants à 14 chiffres par une chaîne de caractères arbitraire. Dans [la démo](/demo.html), nous avons choisi de les remplacer par une simple flèche (→) mais vous pourriez utiliser une manicule (☞) ou tout autre chaîne de caractères Unicode. Dans Cosma, cliquez sur Préférences et saisissez le ou les caractères de substitution dans Symbole de lien.

## Est-ce qu'il est possible de gérer plusieurs répertoires avec différents cosmoscopes ?

Nous prévoyons de rendre la chose faisable de manière simple via un menu dédié dans une prochaine mise à jour. En attendant, il est techniquement possible de mettre en œuvre les suggestions ci-dessous. Nous prenons l'exemple de deux répertoires de fiches, `dossier1` et `dossier2`, entre lesquels on voudrait passer sans avoir à reconfigurer le logiciel.

### Méthode 1 : l'historique

Cette méthode se base sur l'historique. Elle fonctionne bien pour des cosmoscopes que vous ne comptez pas modifier, et en désactivant l'enregistrement automatique de l'historique.

- Dans Cosma, paramétrez l'application pour `dossier1`. Cliquez sur Afficher l'historique puis enregistrez manuellement le cosmoscope et donnez lui une description. Fermez l'historique.
- Ensuite, paramétrez l'application pour `dossier2`. Cliquez sur Afficher l'historique puis enregistrez manuellement le cosmoscope et donnez lui une description. Fermez l'historique.

Vous pouvez désormais passer d'un cosmoscope à l'autre en cliquant sur Afficher l'historique › sélection de l'entrée d'historique souhaitée › Ouvrir.

### Méthode 2 : `config.json`

Cette méthode nécessite de jongler manuellement entre les fichiers de configuration.

Localisez le répertoire contenant les fichiers nécessaire au bon fonctionnement de l'application Cosma (désigné ci-après « répertoire support »). Cela dépend du système d'exploitation :

- sur macOS : `votre nom d'utilisateur/Library/Application Support/cosma` ;
- sur Windows : `C:/Users/login/AppData/Roaming/cosma` ;

Dans ce répertoire se trouve notamment un fichier `config.json`. C'est là que Cosma enregistre et récupère la configuration.

- Dans Cosma, configurez l'application pour le répertoire `dossier1`. Puis localisez le fichier `config.json` dans le répertoire support et faites-en une copie ailleurs. Nous vous conseillons de créer un répertoire dédié, par exemple `Configurations Cosma`, avec un sous répertoire `dossier1` et de copier `config.json` dans ce dernier.
- De retour dans Cosma, configurez l'application pour le répertoire `dossier2`, puis faites comme précédemment : localiser le fichier `config.json` dans le répertoire support et copiez-le ailleurs, par exemple dans un sous-répertoire `B` du même `Configurations Cosma`.

Vous pouvez désormais basculer sur un répertoire spécifique en copiant le fichier `config.json` correspondant vers le répertoire support. Actualisez l'affichage de Cosma en cliquant sur Nouveau cosmoscope.

## La version GUI sera-t-elle disponible sur Linux ?

Nous ne fournissons actuellement pas la version GUI pour Linux mais nous espérons pouvoir le faire prochainement. Rien ne s'y oppose techniquement puisque Cosma est une application développée pour plusieurs plateformes simultanément à partir d'une seule base de code grâce au *framework* Electron. Nous avons depuis peu accès à des machines Linux pour réaliser des tests, qui n'étaient pas indispensables pour l'alpha et qui le sont désormais pour la nouvelle version.

En attendant, une version ligne de commande est disponible pour toutes les plateformes. Plus d'information [ici](/blog/cosma-cli-1-0/).

## Avez-vous une feuille de route ?

Oui !

- Mettre à disposition la version GUI pour Linux.
- Permettre aux utilisateurs de gérer plusieurs répertoires de fiches.
- Améliorer la fonction de filtrage par mot-clé.
- Ajouter différents modes de visualisation, en commençant par un « mode lecture » qui rendrait les cosmoscopes utilisables sur les petits écrans.

## L'application est-elle toujours développée ou maintenue ?

Actuellement, nous sommes en mode maintenance : nous gardons un œil sur les [bugs signalés](https://github.com/graphlab-fr/cosma/issues) et nous publions périodiquement des correctifs ; le développement de nouvelles fonctionnalités est mis en pause. Arthur écrit sa thèse de doctorat et Guillaume a des engagements professionnels qui prennent le pas sur Cosma. Cette section sera mise à jour lorsque nous reprendrons le travail sur notre feuille de route.

## Est-ce que Cosma permet de faire de l'analyse de données/réseaux/graphes ?

Non, Cosma n'est pas pensé à l'analyse de données.

Vous connaissez peut-être les [notes d'Andy Matuschak](https://notes.andymatuschak.org). C'est exactement le genre de « données » pour lesquelles Cosma est conçu : des notes de recherche élaborées avec attention, constamment revisitées, donc dont on connaît très bien le contenu (d'où le fait que l'analyse de données ait une utilité limitée) ; un graphe qui ne contient pas forcément beaucoup de nœuds (des dizaines ou des centaines plutôt que des milliers) mais qui contient en revanche beaucoup de liens – d'où l'importance de la représentation visuelle sous forme de graphe, et des rétroliens contextualisés.
