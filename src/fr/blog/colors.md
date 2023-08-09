---
title: Personnaliser les couleurs
description: Voyons comment nous pouvons modifier les couleurs du modèle 🎨
date: 2023-07-05T12:00:00
update: 2023-07-06T12:00:00
author: Florent Tassy
tags: 
    - style
    - blog
    - CSS
---

## Introduction

Les couleurs d'un blog sont l'élément le plus fondamental à choisir pour se sentir chez soi et refléter qui l'on est. Voyons où Polyglot Tech Blog définit ses couleurs afin de les modifier.

## Modifier le bon fichier

Polyglot Tech Blog supporte les fichiers [SASS](https://sass-lang.com). Il inclut également [le micro-framework CSS Chota](https://jenil.github.io/chota). C'est une feuille de style CSS unique qui fournit assez pour style ce que nous voulons. 

Les couleurs de Chota sont prêtes à être surchargées dans le fichier `src > sass > style.scss`. Les 40 premières lignes contiennent les variables CSS et attribuent leurs valeurs pour les thèmes clair et sombre :  

```css
:root {
    --bg-color: #ffffff;
    --bg-secondary-color: #f3f3f6;
    --color-primary: #14854f;
    --color-lightGrey: #d2d6dd;
    --color-grey: #747681;
    --color-darkGrey: #3f4144;
    --color-error: #d43939;
    --color-success: #2c8017;
    --font-color: #333333;
    --navbar-bg-color: #f8bb6d;
    --footer-bg-color: #f8bb6d;
    --transparent-error: rgba(255, 194, 204, 0.3);
    --transparent-success: rgba(145, 238, 145, 0.3);
    --link-color: #333333;
    --grid-maxWidth: 120rem;
    --grid-gutter: 2rem;
    --font-size: 1.6rem;
    --font-family-sans: sans-serif;
    --font-family-mono: monaco, "Consolas", "Lucida Console", monospace;
    --content-width: 75%;
}

.dark-theme {
    --bg-color: #222222;
    --bg-secondary-color: #333333;
    --color-primary: #4cad7e;
    --color-lightGrey: #323232;
    --color-grey: #747681;
    --color-darkGrey: #8794a8;
    --color-error: #d43939;
    --color-success: #28bd14;
    --font-color: #dddddd;
    --navbar-bg-color: #741e00;
    --footer-bg-color: #741e00;
    --transparent-error: rgba(255, 194, 204, 0.3);
    --transparent-success: rgba(145, 238, 145, 0.3);
    --link-color: #dddddd;
}
```

Changer les couleur de toute la page web, c'est simplement changer les valeurs des variables dans ce fichier.

## Coloration syntaxique

Si vous prévoyez d'utiliser la coloration syntaxique, vous souhaitez peut-être également changer le style de la coloration. Comme vous pouvez l'imaginer, cela se passe dans les fichiers `src > css > code-highlight-dark.njk` et `src > css > code-highlight-light.njk`.  

Ces deux modèles contiennent en fait du code CSS et sont traduits par deux feuilles de styles CSS qui sont chargées alternativement suivant le schéma de couleur sélectionné. Par défault, le thème clair est le thème "prism-coy" qui fait partie de PrismJS. N'importe quel thème proposé sous forme de paquet NPM pourrait être ajouté de la même manière..  

Le thème sombre et dérivé du [thème sombre Gruvbox par Azat S.](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-gruvbox-dark.css). Cependant, il a été un peu modifié pour passer les tests automatiques d'accessibilité effectués par [l'extension de navigateur axe](https://www.deque.com/axe/browser-extensions/). Dans ce cas donc, le code CSS a simplement été copié et modifié dans le fichier `src > css > code-highlight-dark.njk`.

## Conclusion

Nous avons vu les fichiers à modifier or remplacer pour changer les couleurs de notre blog. Mais faites preuve de sagesse au moment de choisir vos couleurs et gardez à l'esprit que l'accessibilité dépend pour beaucoup du contraste des couleurs. Si vous souhaitez évaluer l'accessibilité de votre schéma de couleurs, l'article sur les [indicateurs du blog]({{ '/blog/metrics' | locale_url | url }}) devrait vous donner du grain à moudre.
