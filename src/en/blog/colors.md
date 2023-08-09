---
title: Customize the colors
description: Let's see how we can customize the template colors 🎨
date: 2023-07-05T12:00:00
update: 2023-07-06T12:00:00
author: Florent Tassy
tags: 
    - style
    - blog
    - CSS
---

## Introduction

The colors of a web page are the most fundamental thing to choose in order to feel at home and to reflect who we are. Let's see where Polyglot Tech Blog colors are defined in order to modify them.

## Modify the right file

Polyglot Tech Blog supports supports [SASS](https://sass-lang.com) files. It also includes [Chota micro CSS framework](https://jenil.github.io/chota). It is a single CSS style sheet that provides enough to style what we want.   

The Chota colors are ready to be overriden in the `src > sass > style.scss` file. The 40 first lines contain CSS variables and attribute their values for light and dark themes:  

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

Changing colors of the whole webpage is basically just changing the variable values in this file.

## Syntax highlight

If you plan to use syntax highlighting, you may wish to change the highlighting style as well. As you can imagine, this happens in the files `src > css > code-highlight-dark.njk` and `src > css > code-highlight-light.njk`.  

These two templates actually contain CSS and result in two CSS style sheets that are alternatively added depending on the selected color schema. By default, the light theme is the "prism-coy" theme provided with PrismJS. Any theme provided as an NPM package could be added the same way.  

The dark theme is based on [Gruvbox dark theme by Azat S.](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-gruvbox-dark.css). However, it was a bit modified to pass the automated accessibility tests done by [axe browser extension](https://www.deque.com/axe/browser-extensions/). So in that case, the CSS code was simply copied and modified in the `src > css > code-highlight-dark.njk` file.

## Conclusion

We have seen what files we have to modify or replace to change our blog colors. But be wise when choosing your colors and keep in mind that accessibility depends a lot on colors contrast. If you want to assess the accessibility of your color schema, the article about [blog metrics]({{ '/blog/metrics' | locale_url | url }}) should give you more insight.
