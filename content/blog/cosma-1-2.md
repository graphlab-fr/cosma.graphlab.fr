---
title: Cosma v1.2
date: 2021-06-10
draft: false
github: "https://github.com/hyperotlet/cosma/releases/tag/1.2.0"
zenodo: "https://zenodo.org/record/4923581#.YNsD2i0itQI"
---

Cette mise à jour inclut des améliorations de l'expérience utilisateur au niveau du cosmoscope.

- Ajout de raccourcis clavier :
	- `F` : mode focus
	- `S` : rechercher
	- `R` : réinitialiser le niveau de zoom
	- `Echap` : fermer la fiche
	- `Espace` : relancer l'algorithme de dessin du graphe
- Ajout d'un bouton dans Paramètres du graphe qui permet d'activer ou de désactiver la mise en évidence d'un nœud et de ses connexions au survol. Pour activer ce comportement par défaut, ajouter `highlight_on_hover: true` au paramètre `graph_config` dans `config.yml`.
- Ajout d'un clic alternatif sur les boutons qui contrôlent l'affichage en fonction du type de fiches : `Alt` + clic sur un bouton permet de décocher et recocher les autres boutons.
- Les boutons liés aux mots-clés et aux vues fonctionnent désormais comme des boutons on/off : cliquer une première fois modifie l'affichage, cliquer à nouveau rétablit l'affichage initial.
- L'utilisation de l'API de D3.js accroît considérablement les performances et la réactivité du cosmocope.

Une documentation est désormais disponible à l'adresse suivante : <https://hyperotlet.github.io/cosma/>