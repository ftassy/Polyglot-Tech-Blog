---
title: Ajouter une page
description: Dans cet article, nous allons voir comment ajouter une nouvelle page au projet.
date: 2023-06-30T12:00:00
author: Florent Tassy
tags: 
    - blog
    - page
---

## Introduction

Polyglot Tech Blog contient trois pages : 
* Accueil, la page par défaut
* À propos
* Blog, ou tous les articles de blog sont listés
... ainsi qu'une page d'erreur 404.

<div>Que faire si je souhaite ajouter une nouvelle page statique ? Ajoutons une page "Portefeuille" pour montrer comment faire.</div>

## Ajouter les fichiers

Dans chacun de vos répertoires "langue", créez un fichier nommé "portfolio.html". TCe nom doit être le même dans tous vos répertoires "langue". Le nom d fichier détermine ce que sera l'URL de la page. Ici, ce sera quelque chose de la forme https://\<my-domain\>/\<language\>/portofio.html.  

Vous devriez avoir la structure suivante :  

```plain
src
 ├── (fichiers dans src)
 ├── en
 │   ├── (fichier dans en)
 │   └── porfolio.html
 └── fr
     ├── (fichiers dans fr)
     └── portfolio.html
```

Ajoutez le contenu à vos fichier avec le front matter ci-après :  

`fr > portfolio.html`: 

```plain
---
title: "Portefeuille"
layout: "base.html"
---

<div class="container">
    <p>
        Voici mon contenu. <br>
        Je l'écris en anglais dans le répertoire "en". <br>
        Et bien sûr, je l'écris en français dans le répertoire "fr".
    </p>
</div>
```

👍 C'est fait, vous avez une nouvelle page statique !

## Optionnel: Ajouter une entrée dans la barre de navigation

Cette étape est optionnelle. Si vous souhaitez avoir un lien vers la page portefeuille dans la barre de naviagtion, vous devez faire les modifications suivantes :  

`src > _includes > components > navbar.html`:  

```html
        <!-- Pages -->
        <div class="tabs">
            <a href="{{ "{{ " }}'/'{{ " | locale_url | url }}" }}">{{ "{{ home }}" }}</a>
+           <a href="{{ "{{ " }}'/portfolio'{{ " | locale_url | url }}" }}">{{ "{{ portfolio }}" }}</a>
            <a href="{{ "{{ " }}'/about'{{ " | locale_url | url }}" }}">{{ "{{ about }}" }}</a>
            <a href="{{ "{{ " }}'/blog'{{ " | locale_url | url }}" }}">{{ "{{ blog }}" }}</a>
```

Enfin, le `{{ "{{ portfolio }}" }}` fait référence à une variable qui doit être ajoutée dans les fichiers en.json et fr.json :  

`src > fr > fr.json`:  

```diff-json
{
    "lang": "fr",
    "home": "Accueil",
    "blog": "Blog",
    "about": "À propos",
    "madeBy": "Codé par",
    "seeOn": "Retrouvez-moi sur",
-   "read": "Lire"
+   "read": "Lire",
+   "portfolio": "Portefeuille"
}
```

`src > en > en.json` :  

```diff-json
{
    "lang": "en",
    "home": "Home",
    "blog": "Blog",
    "about": "About",
    "madeBy": "Made by",
    "seeOn": "Check it out on",
-   "read": "Read"
+   "read": "Read",
+   "portfolio": "Portfolio"
}
```

Désormais, votre page est accessible depuis la barre de navigation 🥳

## Conclusion

Nous avons ajouté une nouvelle page statique "Portefeuille" à notre blog. Voilà qui ouvre de nombreuses possibilités 🤩
