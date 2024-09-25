---
title: Add a static page
description: In this article, we are going to see how to add a new page to the project.
date: 2023-06-30T12:00:00
author: Florent Tassy
tags: 
    - blog
    - page
---

## Introduction

Polyglot Tech Blog comes with three pages: 
* Home, the landing page
* About
* Blog, where all blog posts are listed
... as well as a 404 error page.

<div>What if I want to add another static page? Let's add a "portfolio" page to demonstrate it.</div>

## Add the files

In each of your language directory, create a file "portfolio.html". This name must be the same accross all your language directories. The file name determines what the page URL will be. Here, it will be something like https://\<my-domain\>/\<language\>/portofio.html.  

You should get the following structure:  

```plain
src
 ├── (all files in src)
 ├── en
 │   ├── (all files in en)
 │   └── porfolio.html
 └── fr
     ├── (all files in fr)
     └── portfolio.html
```

Create the content in your files with the front matter as shown below.  

`en > portfolio.html`: 

```html
---
title: "Portfolio"
layout: "base.html"
---

<div class="container">
    <p>
        Here is my content. <br>
        I write it in English in the "en" directory. <br>
        And of course, I write it in French in the "fr" directory.
    </p>
</div>
```

👍 Done, you have a new page!

## Optional: Add entries to the navigation bar

This step is optional. If you wish to have a link to your portfolio page in the navigation bar, you have to make the following modification.  

`src > _includes > components > navbar.html`:  

```html
        <!-- Pages -->
        <div class="tabs">
            <a href="{{ "{{ " }}'/'{{ " | locale_url | url }}" }}">{{ "{{ home }}" }}</a>
+           <a href="{{ "{{ " }}'/portfolio'{{ " | locale_url | url }}" }}">{{ "{{ portfolio }}" }}</a>
            <a href="{{ "{{ " }}'/about'{{ " | locale_url | url }}" }}">{{ "{{ about }}" }}</a>
            <a href="{{ "{{ " }}'/blog'{{ " | locale_url | url }}" }}">{{ "{{ blog }}" }}</a>
```

And finally, the `{{ "{{ portfolio }}" }}` references a variable that must be added to the en.json and fr.json files.  

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

`src > en > en.json`:  

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

Now, your page is accessible from the navigation bar 🥳

## Conclusion

We have added a new "Portfolio" static page to our blog. This opens up many possibilities 🤩
