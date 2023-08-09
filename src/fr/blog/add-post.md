---
title: Ajouter un article
description: "Nous allons maintenant faire la chose la plus simple attendue d'un blog: ajouter un article !"
date: 2023-06-23T12:00:00
author: Florent Tassy
tags: 
    - documentation
    - blog
---

## Introduction

Schématiquement, un blog est constitué de quelques pages statiques et de beaucoup d'articles. Voyons comment créer un article dans chacune des langues prises en charge par notre blog.

## Créer les fichiers

Il s'agit probablement de l'un des choses les plus faciles à faire avec le modèle. Lorsque l'on veut ajouter un article, il suffit de créer un fichier avec le **même nom** dans **chaque répertoire de langue**. Par exemple, je veux écrire sur les dauphins en Arctique dans mon blog en français / anglais. Je vais ajouter les fichiers suivants :  

```plain
src
 ├── (tous les fichiers dans src)
 ├── en
 │   ├── (tous les fichiers dans en)
 │   └── blog
+│        └── dolphins-in-arctic.md
 └── fr
     ├── (tous les fichiers dans fr)
     └── blog
+         └── dolphins-in-arctic.md
```

Le format suggéré ici est le [Markdown](https://fr.wikipedia.org/wiki/Markdown), mais les autres [formats supportés par 11ty](https://www.11ty.dev/docs/languages/) fonctionneraient aussi.  

## Ajoutez le contenu aux fichiers

Dans chacun des fichiers nouvellement ajoutés, je peux maintenant ajouter mon contenu. Mais avant tout, le *front matter* suivant est attendu :  

```plain
title: Dauphins en Arctique (À traduire dans le répertoire en)
description: Un article de blog sur des dauphins en Arctique (À traduire dans le répertoire en)
date: 2010-05-25T12:00:00
update: 2023-05-28T12:00:00 (Celle-ci est optionnelle, mais si vous mettez un article existant
à jour, vous pouvez mettre la date de mise à jour ici)
author: Le nom de l'auteur ici, qui peut différer de celui dans src > _data > data.json > "author"
tags: 
    - dauphin (À traduire dans le répertoire en)
    - Arctique (À traduire dans le répertoire en)
```

Pour le reste, notez que :
* Eleventy ajoutera automatiquement un titre de niveau un à partir du front matter. Vous devez donc ajouter des titres de niveau deux et inférieurs pour garder un HTML valide ;
* si vous souhaitez inclure un lien vers un autre article du blog, par exemple article.md, la syntaxe est la suivante : `[hyperlink text]({{ '{{' }} '/blog/example' | locale_url | url {{ '}}' }})` ;
* pour inclure un lien vers une ressource statique du blog (document, image...), par exemple image.png, la syntaxe est la suivante : `![description de l'image]({{ '{{' }} '/img/image.png' | url {{ '}}' }})`.

C'est fait ✅ mon nouvel article est maintenant disponible à l'adresse https://\<my-domain\>/\<language\>/blog/dolphins-in-artic.

## Conclusion

À travers cet exemple, nous avons ajouté un nouvel article au blog. Comme vous avez pu le voir, cele consiste en deux étapes seulement, donc vous devriez rapidement vous en rappeler par coeur 😉
