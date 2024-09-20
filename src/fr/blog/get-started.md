---
title: Commencer avec le modèle Polyglot Tech Blog
description: Dans cet article, nous allons voir ce qu'il faut faire pour obtenir le modèle Polyglot Tech Blog et le lancer avec votre contenu.
date: 2023-07-09T12:00:00
author: Florent Tassy
tags: 
    - intro
    - blog
---

## Introduction

Vous avez découvert Polyglot Tech Blog et vous souhaitez l'utiliser comme base pour votre blog. Génial ! Voyons les étapes à suivre pour obtenir le code et l'adapter à vos besoins.

## Obtenir le code et installer les dépendances

En premier lieu, vous avez besoin du code du modèle. Le moyen le plus simple pour ça est d'utiliser git. Allez dans le répertoire où vous souhaitez mettre les fichiers et clonez le dépôt :

```bash
git clone https://gitlab.com/florent_tassy/polyglot-tech-blog.git
```

Vous avez ensuite besoin d'installer les dépendances du modèle. Pour ce faire, il vous faut [node](https://nodejs.org/) et npm ou [Yarn](https://yarnpkg.com/). Rendez-vous dans le répertoire nouvellement cloné et entrez :  
```bash
npm ci # avec npm
yarn install --frozen-lockfile # avec Yarn
```

## Lancer le serveur local et adaptez le modèle

Vous avez maintenant tout ce qu'il vous faut. Vous pouvez démarrer le serveur de développement pour voir une version locale et rafraîchie automatiquement de votre code. Depuis le répertoire du modèle, exécutez :  
```bash
npm run dev # avec npm
yarn dev # avec Yarn
```

Vous pouvez maintenant ouvrir votre navigateur web favori, aller sur [localhost:8080](http://localhost:8080), et voir le résultat en temps réel !  

## Adapter le contenu

La première personnalisation que vous voudrez apporter est certainement le changement du contenu. Voici les concepts à connaître pour réaliser ceci :  
* Le contenu est dans le répertoire "src".
* Les pages statiques sont écrites en HTML avec les portions de modèle en [Nunjucks](https://mozilla.github.io/nunjucks/), mais sachez qu'Eleventy [propose beaucoup d'autres langages](https://www.11ty.dev/docs/languages/).
* Les articles de blog sont écrits en [Markdown](https://wikipedia.org/wiki/Markdown), mais là aussi, d'autres langages sont possibles.
* Les fichiers au premier niveau dans "src" sont essentiellement des fichiers de configuration et des fichiers techniques. Vous pouvez changer le contenu de `index.html` et `404.html`, mais ces fichiers ne sont pas censés être affichés, sauf si la redirection vers la langue locale ou la langue par défaut échouent. Vous devrez aussi ajouter / modifier vos fichiers de déploiement.
* Vous devez modifier le fichier `src > data > data.json` avec vos informations. Voici quelques commentaires utiles à ce sujet :
```json
{

    // Le nom complet de la 
    // personne écrivant le blog
    "author": "Florent Tassy",

    // Optionnel, mais un plus pour 
    // le web sémantique : l'URI 
    // unique qui identifie la 
    // personne écrivant le blog. 
    // Évitez d'utiliser une URL 
    // du blog au risque d'obtenir 
    // des associations d'ID bizarres
    "authorUri": "https://gitlab.com/florent_tassy",

    // Les codes BCP 47 des langues 
    // utilisées par le blog. La 
    // première est la langue par 
    // défaut. Il en faut au moins 
    // une.
    "languages": [ "en", "fr" ],

    // Étiquettes des langues. 
    // Tous les codes déclarés ci-dessus 
    // doivent avoir une étiquette
    // correspondante ici.
    "languageLabels": {
        "en": "English",
        "fr": "Français"
    },
    
    // Optionnel, mais un plus pour 
    // le web sémantique : les URIs
    // qui identifient les langues du
    // blog. http://lexvo.org et 
    // https://dbpedia.org proposent
    // des ressources intéressantes 
    // ici.
    "languageUris": {
        "en": "http://dbpedia.org/resource/English_language",
        "fr": "http://dbpedia.org/resource/French_language"
    },

    // Le titre du blog. Tous les 
    // codes déclarés ci-dessus 
    // doivent avoir une 
    // correspondance ici.
    "title": {
        "en": "Polyglot Tech Blog",
        "fr": "Polyglot Tech Blog"
    },

    // L'URL à laquelle votre blog 
    // sera déployé. Ne mettez pas de 
    // "/" à la fin. Je vous 
    // recommande de la laisser telle 
    // quelle et de réaliser la 
    // substitution au moment du 
    // déploiement.
    "baseUrl": "http://localhost:8080",

    // Les mots-clés généraux du blog. 
    // Il seront utilisés dans les 
    // balises <meta> des pages. Là 
    // aussi, chaque code de langue 
    // défini dans "languages" doit 
    // avoir sa correspondance ici.
    "keywords": {
        "en": "polyglot, multilingual, blog, eleventy, 11ty, starter, template",
        "fr": "polyglotte, multilingue, blog, eleventy, 11ty, départ, modèle"
    }
}
```
* Vous pouvez personnaliser `src > index.html` et `src > 404.html`, mais ce n'est pas obligatoire.

## Adaptez le style

Vous pouvez vous reporter à [l'article sur les couleurs]({{ '/blog/colors' | locale_url | url }}) pour de plus amples détails sur cette étape.  

## Ajouter ou retirer des langues

Enlever une langue se fait simplement en effaçant le répertoire correspondant et en mettant à jour le fichier `src > _data > data.json`. Lorsque l'on ajoute une langue, il y a quelques considérations supplémentaires à avoir, détaillées dans [l'article dédié]({{ '/blog/add-language' | locale_url | url }}).  

## Ajouter des pages statiques

Le modèle est fourni avec quatre pages statiques : "{{ home }}", "{{ about }}", "{{ blog }}" et "404". Elles sont écrites en HTML et sont disponibles dans chaque répertoire de langue :  
```plain
src
 ├── (tous les fichiers dans src)
 ├── en
 │   ├── index.html <- la page d'accueil
 │   ├── about.html
 │   ├── blog.html
 │   └── 404.html
 └── fr
     ├── index.html <- la page d'accueil
     ├── about.html
     ├── blog.html
     └── 404.html
```
Vous pouvez décider d'ajouter d'autres pages statiques. Là aussi, un [article dédié]({{ '/blog/add-page' | locale_url | url }}) couvre le sujet.

## Ajouter des articles

Voici probablement la chose la plus évidente attendue d'un modèle de blog. Vous pouvez suivre les instructions de [article dédié]({{ '/blog/add-post' | locale_url | url }}) pour ajouter des articles.

## Vérifiez la validité de vos balises

Le modèle comprend des commandes qui et des dépendances pour vérifier la validité du HTML et du CSS générés grâce au [vnu-jar du V3C](https://validator.github.io/validator/). Cependant, vnu-jar est écrit en Java, il vous faudra donc installer un Java Runtime Environment pour exécuter ces commandes. Je vous recommande le libre et excellent [Eclipse Temurin](https://adoptium.net/temurin/).  
Vous pouvez donc vérifier la validité de votre HTML avec :  
```bash
npm run check:markup:unix # avec npm sous un système Linux ou unix-like
yarn check:markup:unix # avec Yarn sous un système Linux ou unix-like

npm run check:markup:win # avec npm sous un système Windows
yarn check:markup:win # avec Yarn sous un système Windows
```

Vous pouvez vérifier la validité du CSS avec :  
```bash
npm run check:css:unix # avec npm sous un système Linux ou unix-like
yarn check:css:unix # avec Yarn sous un système Linux ou unix-like

npm run check:css:win # avec npm sous un système Windows
yarn check:css:win # avec Yarn sous un système Windows
```

## Vérifiez différents indicateurs de votre blog

Le nombre de choses à faire pour s'assurer de [l'accessibilité](https://www.w3.org/WAI/) (<abbr title="Accessibility">a11y</abbr>), la performance, [l'optimisation pour les moteurs de recherche](https://fr.wikipedia.org/wiki/Optimisation_pour_les_moteurs_de_recherche) (<abbr title="Search Engine Optimization">SEO</abbr>), la validité du code... d'un site web est illimité et demande des compétences et des outils avancés. Quelques tests simples et sont couverts par [un article dédié]({{ '/blog/metrics' | locale_url | url }})

## Assemblage et déploiement

Notre blog est prêt à être mis en ligne. Cela peut être fait de nombreuses manières selon où votre code se trouve, et qui va héberger le blog. Cet [article]({{ '/blog/deploy' | locale_url | url }}) couvre quelques scénarios communs.


## Conclusion

Nous avons vu toutes les étapes qui permettent d'obtenir un Polyglot Tech Blog opérationnel avec votre contenu. Si vous avez suivi toutes ces étapes, vous avez désormais un blog en ligne. Félicitations ! Bien sûr, de nombreuses autres modifications et adaptations sont possibles, n'hésitez donc pas à expérimenter et à partager vos idées sur [GitLab](https://gitlab.com/florent_tassy/polyglot-tech-blog) 😉
