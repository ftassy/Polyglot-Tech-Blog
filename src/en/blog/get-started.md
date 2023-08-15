---
title: Get started with Polyglot Tech Blog template
description: In this post, we are going to see what to do to get Polyglot Tech Blog starter running with your content
date: 2023-07-09T12:00:00
author: Florent Tassy
tags: 
    - intro
    - blog
---

## Introduction

You have found Polyglot Tech Blog and wish to use it as a basis for your blog. Great! Let's go through the steps to get the code and adapt it to your needs.

## Get the code and install the dependencies

First, you need to get the starter code. The easiest way to do this is to use git. Go to the directory where you want to get the files, and clone the repository:

```bash
git clone https://gitlab.com/florent_tassy/polyglot-tech-blog.git
```

Then you need to install the template dependencies. For this, you need [node](https://nodejs.org/) and npm or [Yarn](https://yarnpkg.com/). Go to the newly cloned directory and enter:  
```bash
npm ci # with npm
yarn install --frozen-lockfile # with Yarn
```

## Launch the local server and adapt the starter

You now have everything. You can start the dev server to see a local and auto-refreshed version of your code. From the template directory, run:  
```bash
npm run dev # with npm
yarn dev # with Yarn
```

You can now open you favorite web browser, navigate to [localhost:8080](http://localhost:8080), and see the live result!  

## Adapt the content

The first customisation that you will probably want to bring is changing the content. To do so, here are the needed concepts:  
* The content is in the "src" directory.
* Static pages are written in HTML with template parts in [Nunjucks](https://mozilla.github.io/nunjucks/), but keep in mind that Eleventy [offers many more languages](https://www.11ty.dev/docs/languages/).
* Blog posts are written in [Markdown](https://wikipedia.org/wiki/Markdown), but here as well, other languages could be used.
* The files directly in "src" are mainly configuration files and technical files. You may change the content of index.html and 404.html, but these files are not supposed to be displayed, unless the redirection to local or fallback language fails. You will also add / modify your files for deployment.
* You should update the file `src > data > data.json` with your information. Here are some useful comments about it:
```json
{

    // Full name of the blog author
    "author": "Florent Tassy",

    // Optional, but nice for semantic
    // web: the unique URI that 
    // identifies the author. Avoid
    // using a URL of the blog or you
    // may get weird ID associations.
    "authorUri": "https://gitlab.com/florent_tassy",

    // BCP 47 codes of the languages 
    // used on the blog. 
    // The first one is the default 
    // one. At least one is needed.
    "languages": [ "en", "fr" ],

    // Language labels. 
    // All above declared codes 
    // must have a corresponding 
    // entry here.
    "languageLabels": {
        "en": "English",
        "fr": "Français"
    },

    // Blog title. 
    // All above declared codes 
    // must have a corresponding 
    // entry here.
    "title": {
        "en": "Polyglot Tech Blog",
        "fr": "Polyglot Tech Blog"
    },

    // Optional, but nice for semantic
    // web: the URIs that identify
    // the blog languages. 
    // http://lexvo.org and 
    // https://dbpedia.org provides
    // interesting resources here
    "languageUris": {
        "en": "http://dbpedia.org/resource/English_language",
        "fr": "http://dbpedia.org/resource/French_language"
    },

    // URL the blog will be deployed to. 
    // Don't put a trailing "/". 
    // I recommend to leave it as it is 
    // and subsitute it with the final 
    // URL at deployment time.
    "baseUrl": "http://localhost:8080",

    // General blog keywords. 
    // They will be used in the <meta> 
    // tags of all pages. 
    // Here as well, each code defined 
    // in languages must have a 
    // correspondance.
    "keywords": {
        "en": "polyglot, multilingual, blog, eleventy, 11ty, starter, template",
        "fr": "polyglotte, multilingue, blog, eleventy, 11ty, départ, modèle"
    }
}
```
* You may personalize `src > index.html` and `src > 404.html`, but that's not absolutely necessary.

## Adapt the style

You can go to [the article about colors]({{ '/blog/colors' | locale_url | url }}) for further details about this step.  

## Add or remove languages 

Removing a language is simply deleting the corresponding directory and updating the `src > _data > data.json` file accordingly. When adding a new language, there are a bit more things to consider, so you can consult [the dedicated article]({{ data.baseUrl }}/{{ lang }}/blog/add-language/).  

## Add static pages

The starter comes with four static page: "{{ home }}", "{{ about }}", "{{ blog }}" and "404". They are written in HTML and can be found in each language directory:  
```plain
src
 ├── (all files in src)
 ├── en
 │   ├── index.html <- the "home" page
 │   ├── about.html
 │   ├── blog.html
 │   └── 404.html
 └── fr
     ├── index.html <- the "home" page
     ├── about.html
     ├── blog.html
     └── 404.html
```
You may decide to add some static pages. Here as well, there is a [dedicated article]({{ '/blog/add-page' | locale_url | url }}) that covers the topic.

## Add posts

This is probably the most basic thing expected from a blog start. You can do this by following the instructions on the [dedicated article]({{ data.baseUrl }}/{{ lang }}/blog/add-post/)

## Check markup validity

The starter template comes with commands and dependencies to check HTML and CSS validity using [W3C's vnu-jar](https://validator.github.io/validator/). However, vnu-jar checker is written in Java, so you will have to install a Java Runtime Environment to make these commands work. I recommend the free and excellent [Eclipse Temurin](https://adoptium.net/temurin/).  
You can then check the HTML validity with:  
```bash
npm run check:markup:unix # with npm on Linux and unix-like systems
yarn check:markup:unix # with Yarn on Linux and unix-like systems

npm run check:markup:win # with npm on Window systems
yarn check:markup:win # with Yarn on Windows systems
```

You can then check the CSS validity with:  
```bash
npm run check:css:unix # with npm on Linux and unix-like systems
yarn check:css:unix # with Yarn on Linux and unix-like systems

npm run check:css:win # with npm on Window systems
yarn check:css:win # with Yarn on Windows systems
```

## Check various metrics about your blog

The number of things you can check to ensure the [accessibility](https://www.w3.org/WAI/) (<abbr title="Accessibility">a11y</abbr>), performance, [Search Engine Optimization](https://en.wikipedia.org/wiki/Search_engine_optimization) (<abbr title="Search Engine Optimization">SEO</abbr>), validity... of a website is unlimited and may require some advanced skills or tools. Some simple and basic checks are covered in the [dedicated article]({{ data.baseUrl }}/{{ lang }}/blog/metrics/)

## Build and deploy

Our blog is ready to be put online. This can bon done on multiple ways depending on where your code is and who hosts the blog. This [article]({{ data.baseUrl }}/{{ lang }}/blog/deploy/) covers some common scenarios.

## Conclusion

We have seen all basic steps to get a Polyglot Tech Blog up and running with your content. If you followed all these steps, you have now an online blog. Congratulations! Of course, many more customizations are possible, so feel free to experiment and share your ideas on [GitLab](https://gitlab.com/florent_tassy/polyglot-tech-blog) 😉
