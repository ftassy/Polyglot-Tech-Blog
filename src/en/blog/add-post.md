---
title: Add a post
description: "We are now going to make the most basic thing expected from a blog: adding a post!"
date: 2023-06-23T12:00:00
author: Florent Tassy
tags: 
    - documentation
    - blog
---

## Introduction

A blog is basically made of a few static pages and many articles. Let's see then how we can create a new article in all that languages that our blog supports.

## Create the files

This is probably one of the easiest things to do with the template. When we want to add posts, we juste create a file with the **same name** in **every language directory**. Let's say I want to post about dolphins in Arctic in my English / French blog. I will add the two following files:  

```plain
src
 ├── (all files in src)
 ├── en
 │   ├── (all files in en)
 │   └── blog
+│        └── dolphins-in-arctic.md
 └── fr
     ├── (all files in fr)
     └── blog
+         └── dolphins-in-arctic.md
```

The suggested format here is [Markdown](https://en.wikipedia.org/wiki/Markdown), however other [11ty supported formats](https://www.11ty.dev/docs/languages/) would also work.  

## Add content to files

In each newly added files, I can now add your content. But before all, the following front matter is expected:  

```plain
title: Dolphins in Arctic (To be translated in the fr directory)
description: A blog post about dolphins in Arctic (To be translated in the fr directory)
date: 2010-05-25T12:00:00
update: 2023-05-28T12:00:00 (This one is optional, but if you are actually updating 
an existing article, you can put the update date here)
author: Author name here, that can be different from the src > _data > data.json > "author"
tags: 
    - dolphin (to be translated in the fr directory)
    - Arctic (to be translated in the fr directory)
```

For the rest, please note that:
* Eleventy will automatically add a level one title from front matter. You will then have to add level two and lower titles to keep a valid HTML;
* Should you wish to include a link to another blog article, let's say example.md, you could use the following syntax: `[hyperlink text]({{ '{{' }} '/blog/example' | locale_url | url {{ '}}' }})`;
* Should you wish to include a link to a static blog resource (document, image...), you could use the following syntax: `![description de l'image]({{ '{{' }} '/img/image.png' | url {{ '}}' }})`.

Done ✅ my new posts is now available at https://\<my-domain\>/\<language\>/blog/dolphins-in-artic.  

## Conclusion

Through this example, we have added a new article to the blog. As you have seen, it takes only two steps, so you may quickly remember this by heart 😉
