---
title: Foire aux questions
layout: faq
---

## J'ai essayé de lancer l'application mais mon système d'exploitation m'en empêche.

Vous pouvez ignorer les avertissements de votre système d'exploitation et lancer Cosma sans crainte, à condition de télécharger l'application depuis notre dépôt GitHub, seule source officielle. Pour outrepasser les alertes du système, vous devez avoir les privilèges administrateur sur votre session. Sur macOS, faites un clic droit puis Ouvrir sur l'application (vous aurez peut-être à le faire deux fois).

Explication : Windows et macOS requièrent que le code d'une application soit « signé » afin de pouvoir lui faire confiance automatiquement. Ceci passe par l'obtention d'un certificat de signature de code. Le processus est techniquement trivial mais il est payant, car lourd d'enjeux. En effet, si une application n'est pas signée, le système fait obstacle à l'installation, en affichant une alerte et en demandant que l'utilisateur confirme son intention. Dans le doute, beaucoup d'utilisateurs renoncent à installer une application non signée. Les fournisseurs d'applications ont donc tout intérêt à signer leur application pour qu'elle soit utilisée. Mais le cas de Cosma est particulier : c'est un logiciel expérimental, créé dans le cadre d'une démarche de recherche-conception, le développement initial vient tout juste d'aboutir et n'est financé que ponctuellement. L'application n'est donc pas signée.

## L'alpha était compatible avec Linux, est-ce que c'est le cas pour la nouvelle version ?

Nous ne fournissons actuellement pas l'application pour Linux mais nous espérons pouvoir le faire prochainement. Rien ne s'y oppose techniquement puisque Cosma est une application développée pour plusieurs plateformes simultanément à partir d'une seule base de code grâce au *framework* Electron. Nous manquons simplement d'accès à des machines Linux pour réaliser des tests, qui n'étaient pas indispensables pour l'alpha et qui le sont désormais pour la nouvelle version.

## Quand j'essaie de créer une fiche, l'application me renvoie une erreur incompréhensible.

Vous n'avez probablement pas renseigné de répertoire de fiches dans Préférences. Le répertoire peut être vide mais il faut en renseigner un pour que Cosma sache où créer des fiches.

Une prochaine mise à jour améliorera l'expérience utilisateur sur ce point.

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
- sur Windows : <!-- à compléter --> ;

Dans ce répertoire se trouve notamment un fichier `config.json`. C'est là que Cosma enregistre et récupère la configuration.

- Dans Cosma, configurez l'application pour le répertoire `dossier1`. Puis localisez le fichier `config.json` dans le répertoire support et faites-en une copie ailleurs. Nous vous conseillons de créer un répertoire dédié, par exemple `Configurations Cosma`, avec un sous répertoire `dossier1` et de copier `config.json` dans ce dernier.
- De retour dans Cosma, configurez l'application pour le répertoire `dossier2`, puis faites comme précédemment : localiser le fichier `config.json` dans le répertoire support et copiez-le ailleurs, par exemple dans un sous-répertoire `B` du même `Configurations Cosma`.

Vous pouvez désormais basculer sur un répertoire spécifique en copiant le fichier `config.json` correspondant vers le répertoire support. Actualisez l'affichage de Cosma en cliquant sur Nouveau cosmoscope.