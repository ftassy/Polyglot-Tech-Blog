---
title: Déploiement
description: Notre Polyglot Tech Blog est fin-prêt. Voyons quelques manières de le déployer sur le serveur.
date: 2023-06-11T12:00:00
author: Florent Tassy
tags: 
    - deploiement
    - GitLab
    - Netlify
    - GitHub
---

## Introduction

<div>Maintenant que nous avons adapté le modèle avec notre contenu, il est temps de le déployer sur le web. Passons au travers de quelques scénarios de déploiement communs.</div>

## Déploiement manuel

Afin d'avoir des hyperliens corrects, vous devez connaître l'URL sur laquelle le site sera déployé. Créez un fichier nommé `prod.js` à la racine du blog et remplissez-le avec l'URL de base de votre site ainsi que le sous-répertoire dans lequel il sera déployé. Par exemple, s'il doit 'etre déployé à l'adresse https://example.com/subpath, le fichier devrait contenir :  

```js
module.exports = { 
    baseUrl: "https://example.com/subpath", // Notez l'absence de "/" à la fin de l'URL
    pathPrefix: "subpath" 
};
```

S'il n'y a pas de sous-répertoire, laissez la valeur vide : `pathPrefix: ""`. S'il y a un sous-répertoire, vous pouvez effacer le fichier `robots.txt` car il ne sera pas lu. 

Nous pouvons maintenant empaqueter le blog, c'est-à-dire traiter tous les fichiers du répertoire `src` afin de générer les fichiers HTML, JavaScript, CSS et autres fichiers statiques qui seront placés sur le serveur. Je vous recommande de suivre les étapes suivantes :  
1. Arrêtez le serveur de développement local s'il tourne.
2. Videz le répertoire `public`.
```bash
npm run clean # avec npm
yarn clean # avec Yarn
```
3. Empaquetez le blog prêt au déploiement
```bash
npm run manual:build # avec npm
yarn manual:build # avec Yarn
```

Vous n'avez ensuite plus qu'à copier le contenu du répertoire `public` sur le serveur.

## Déploiement sur GitLab Pages

Le modèle propose un fichier `.gitlab-ci.yml` qui devrait déployer le blog correctement. Vous avez seulement besoin d'adapter le fichier `gitlab-pages.js` :  

```js
module.exports = { 
    baseUrl: "https://florent_tassy.gitlab.io/polyglot-tech-blog", // Notez l'absence de "/" à la fin de l'URL
    pathPrefix: "polyglot-tech-blog" 
};
```

"Poussez" ensuite le dépôt sur votre instance de GitLab. Si le dépôt distant pest correctement configuré, la pipeline de CI/CD va déployer le blog.

## Déploiement sur Netlify

Vous pouvez vous réferrer à la [documentation de Netlify](https://docs.netlify.com/git/overview/).

Pour un déploiement manuel, le modèle fournit un fichier `netlify.js` à adapter pour empaqueter le blog convaneblement :  

```js
module.exports = { 
    baseUrl: "https://polyglot-tech-blog.netlify.app", // Notez l'absence de "/" à la fin de l'URL
    pathPrefix: "" 
};
```

Vous pouvez maintenant empaqueter le blog en suivant les étapes ci-après :    
1. Arrêtez le serveur de développement local s'il tourne.
2. Videz le répertoire `public`.
```bash
npm run clean # avec npm
yarn clean # avec Yarn
```
3. Empaquetez le blog prêt au déploiement
```bash
npm run netlify:build # avec npm
yarn netlify:build # avec Yarn
```

Vous pouvez maintenant vous connecter à Netlify et glisser-déposer le répertoire `public`.  

## Déploiement sur GitHub Pages

Le modèle propose un fichier `.github > workflows > build-and-deploy.yml` qui devrait déployer le blog correctement. Vous avez seulement besoin d'adapter le fichier `github-pages.js` :  

```js
module.exports = { 
    baseUrl: "https://ftassy.github.io/Polyglot-Tech-Blog", // Notez l'absence de "/" à la fin de l'URL
    pathPrefix: "Polyglot-Tech-Blog" 
};
```

"Poussez" ensuite le code sur GitHub. Si le dépôt distant est correctement configuré, la GitHub Action va déployer le blog.

## Conclusion

Nous avons vu comment déployer notre blog sur un serveur de manière manuelle et sur les services d'hébergement GitLab Pages, GitHub Pages et Netlify. Si votre scénario n'est pas couvert ici, vous devriez pouvoir adapter un de ceux proposés à votre cas spécifique. Félications, votre blog est maintenant en ligne !
