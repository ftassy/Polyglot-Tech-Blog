---
title: Add language
description: In this article, we are going to add a new language to the project.
date: 2023-07-02T12:00:00
author: Florent Tassy
tags: 
    - blog
    - page
    - documentation
    - i18n
    - language
---

## Introduction

<div>Polyglot Tech Blog comes in English and French to show in action. However, it is possible to add as many languages as you want. Let's show how by adding German 🇩🇪</div>

## Update data.json

Simply add the new language:

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

## Create the language directory

The simplest first step here is probably to copy an existing language directory, let's say "en", paste it into the src directory, and rename it to the language code you want. Here, we will the rename to directory "de". So we get this strusture:  

```plain
src
 ├── (all files in src)
 ├── en
 ├── fr
 └── de
```

The folder name must be [BCP 47-compatible language tag](https://en.wikipedia.org/wiki/IETF_language_tag).

## Change the new directory content

First, rename the en.json file to de.json. Then open it and update the translations and the language.  

`src > de > de.json`:  

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
(Here, you should notice that I don't speak German...)

Then go to the blog directory, open the blog.json file, and update the "en" tag to "de":  

`src > de > blog > blog.json`:  

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

## Update the permalinks

Ensure that no permalink in the "de" directory points to a "en/..." URL.  

## Now, the longest part if you have some content already...  

Translate all the pages and blog posts to German!

## Change default language

If you want to change the blog default language, please also update the "defaultLanguage" property in `.eleventy.js`.  

## Conclusion

That's it, we have added a new language to our webpage! More information on [11ty i18n documentation](https://www.11ty.dev/docs/i18n/)