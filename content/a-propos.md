---
title: À propos de Cosma
layout: about
---

Cosma est un logiciel de visualisation de graphe documentaire. Il permet de représenter des notes interreliées sous la forme d’un réseau interactif dans une interface web.

Dans le vaste champ des outils qui servent à penser (*tools for thought*), Cosma se démarque par **trois originalités** :

D'abord, **Cosma n'est pas lui-même un logiciel de prise de notes**. Il est pensé pour fonctionner en complémentarité avec ces logiciels. Nous nous sommes inspirés ici du fonctionnement de logiciels comme [Deckset](https://www.deckset.com), qui applique ce principe aux présentations.

Ensuite, **Cosma repose sur des normes d'écriture interopérables, ouvertes et standardisées**. Ceci accroît la pérennité des données, facilite l'utilisation combinée avec des outils qui partagent ces normes (comme [Zettlr](https://www.zettlr.com)), tout en laissant la possibilité de changer d'outil à tout moment.

Enfin, **Cosma permet de partager simultanément les données et les outils pour les explorer**.

La plupart des outils de visualisation concentrent leurs fonctionnalités dans une application à interface graphique, à partir de laquelle il est possible d'exporter des données structurées ou des images statiques.

Cosma inverse cette logique : la partie application, surnommée **cosmographe**, est un simple formulaire de création, et c'est l'export, un fichier HTML surnommé **cosmoscope**, qui constitue la véritable interface de visualisation. Ce fichier autonome contient un graphe interactif, des outils de navigation interne (index, moteur de recherche, filtres) et le texte intégral des fiches ; il inclut aussi les données sources au format JSON et peut être utilisé hors connexion.

Ainsi, **en partageant un cosmoscope vous ne transmettez pas seulement des données mais des capacités heuristiques**.

***

**Cosma est conçu pour laisser un degré élevé de contrôle à ses utilisateurs.**

Premièrement, le logiciel fonctionne avec un répertoire de fichiers au format texte qu'il se contente de lire : utiliser ou désinstaller le logiciel n'altérera pas vos fichiers et vous permet donc de mettre en œuvre les pratiques de stockage, de versionnement et d'édition de votre choix. De cette manière, **si le logiciel s'envole les données restent**.

Deuxièmement, **de nombreux éléments d'interface sont personnalisables** : algorithme de dessin de réseau, couleurs des nœuds, tracé des liens, raccourcis vers des vues particulières, etc.

Troisièmement, **des enrichissements documentaires (métadonnées) et sémantiques (qualification des liens) sont possibles** et se font par des mécanismes génériques : l'utilisateur est libre d'appliquer les typologies et ontologies de son choix.

Quatrièmement, Cosma est un logiciel modulaire, interopérable et portable mais surtout, **c'est un logiciel libre** : le code est public, son développement est documenté, il est accessible et réutilisable gratuitement sous licence MIT. Le travail peut ainsi être évalué, archivé et continué par d'autres.

***

Enfin, **Cosma est un logiciel expérimental, développé dans le cadre d'une démarche de recherche-conception**.

L'idée de Cosma est née dans le cadre d'une recherche doctorale conduite par Arthur Perret sous la direction d'Olivier Le Deuff. Ce logiciel reste donc un travail expérimental, son utilisation est soumise à caution et aucune garantie de suivi ou de maintenance ne peut être donnée à ce jour.

Néanmoins, des efforts importants ont été entrepris dès le prototype pour concevoir soigneusement les différents aspects de l'outil, qu'il s'agisse de la visualisation de données ou de l'interaction humain-machine, notamment grâce à la participation de chercheurs spécialistes de ces domaines. Et Cosma est au cœur d'une dynamique de recherche que nous espérons inscrire dans la durée.

## Citer le logiciel dans une bibliographie

La version actuelle de Cosma peut être citée dans une bibliographie de la manière suivante :

> Arthur Perret, Guillaume Brioudes, Clément Borel, & Olivier Le Deuff. (2021). Cosma (1.0). Zenodo. <https://doi.org/10.5281/zenodo.5412315>

La première version de Cosma, rétroactivement libellée alpha, est archivée sur Zenodo. Elle peut être citée dans une bibliographie de la manière suivante :

> Arthur Perret, Guillaume Brioudes, Clément Borel, & Olivier Le Deuff. (2021). Cosma (alpha). Zenodo. <https://doi.org/10.5281/zenodo.4734377>
