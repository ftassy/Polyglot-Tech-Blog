---
title: Ajouter une langue
description: Dans cet article, nous allons ajouter une langue à notre projet.
date: 2023-07-02T12:00:00
author: Florent Tassy
tags: 
    - blog
    - page
    - documentation
    - i18n
    - langue
---

## Introduction

<div>Polyglot Tech Blog vient avec l'anglais et les français pour montrer ses capacités en action. Cependant, il est possible d'ajouter autant de langues que l'on souhaite. Découvrons comment en ajoutant l'allemand 🇩🇪</div>

## Mettre à jour data.json

Ajoutez simplement la nouvelle langue :   

`src > _data > data.json`:  

```diff-json
{
    // Other properties
-   "languages": [ "en", "fr" ],
+   "languages": [ "en", "fr", "de" ],
    "languageLabels": {
        "en": "English",
-       "fr": "Français"
+       "fr": "Français",
+       "de": "Deutsch"
    },
    "title": {
        "en": "English",
-       "fr": "Français"
+       "fr": "Français",
+       "de": "Deutsch"
    },
    "keywords": {
        "en": "blog, english",
-       "fr": "blog, français"
+       "fr": "blog, français",
+       "de": "blog, deutsch"
    }
}
```

## Créez le répertoire de la langue

La première étape la plus simple ici est probablement de copier un répertoire de langue existant, disons "en", de le coller dans le répertoire "src", et de le renommer du nom de la langue souhaitée. Ici, nous allons renommer le répertoire en "de". On obtient donc cette structure :  

```plain
src
 ├── (tous les fichiers dans src)
 ├── en
 ├── fr
 └── de
```

Le nom du répertoire doit-être une [étiquette de langue compatible BCP 47](https://fr.wikipedia.org/wiki/%C3%89tiquette_d%27identification_de_langues_IETF).

## Changez le contenu du répertoire

Tout d'abord, renommez le fichier en.json en de.json. Ensuite, ouvrez-le et mettez à jour les traductions et la langue :  

`src > de > de.json` :  

```json
{
    "lang": "de",
    "home": "Startseite",
    "blog": "Blog",
    "about": "Über",
    "madeBy": "Erstellt von",
    "seeOn": "Überprüfen Sie es auf",
    "read": "Lesen",
    (...)
}
```
(Ici, vous devriez remarquer que je ne parle pas allemand...)

Allez ensuite dans le répertoire blog, ouvrez le fichier blog.json, et changez le tag "en" en "de" :  

`src > de > blog > blog.json` :  

```diff-json
{
  "layout": "article.html",
  "tags": [
    "post",
-    "en"
+    "de"
  ]
}
```

## Mettez à jour les permaliens

Assurez-vous qu'il n'y ait plus de permalien dans le répertoire "de" qui pointe sur une URL "en/...".

## Maintenant, la partie la plus longue si jamais vous avez déjà du contenu...  

Traduisez toutes les pages et les articles de blog en allemand !

## Changer la langue par défaut

Si vous souhaitez changer la langue par défaut du blog, vous devrez également mettre à jour la propriété "defaultLanguage" dans `.eleventy.js`.  

## Conclusion

C'est terminé, nous avons ajouté une langue à notre page web ! Plus d'infos sur [11ty i18n documentation](https://www.11ty.dev/docs/i18n/)