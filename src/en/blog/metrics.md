---
title: Check blog metrics
description: This article a few simple checks to ensure the template's code validity, accessibility, and performance.
date: 2023-06-15T12:00:00
author: Florent Tassy
tags: 
    - metrics
    - HTML
    - CSS
    - validator
    - accessibility
    - performance
    - SEO
---

## Introduction

We are now going to verify a few metrics and present some simple and user-friendly tools to ensure our blog's validity, performance, accessibility and <abbr title="Search Engine Optimization">SEO</abbr>. Those topics are potentially infinite and highly specialized, that is why we will just touch on each of them with automated tools. 

## Lighthouse

A good way to quickly and simply check webpages performances is by using [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/). It is available in the DevTools of [Chromium-based web browsers](https://en.wikipedia.org/wiki/Chromium_(web_browser)#Browsers_based_on_Chromium), which means it can be used when developping on localhost. It is also available as an online service through [PageSpeed Insights](https://pagespeed.web.dev/), but it means that the page must be hosted online already.  

Lighthouse provides metrics and advices about performance, accessibility, <abbr title="Search Engine Optimization">SEO</abbr> and other best practices, and it can run in both desktop or mobile configuration. Do not underestimate the mobile devices because more than half of webpage are browsed from mobile device per [statcounter](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet).

## Accessibility

When it comes to accessibility, <abbr title="Web Accessibility Evaluation Tools">WAVE</abbr> and [axe Tools](https://www.deque.com/axe/) are very nice ways to automatically check how your webpage perform. A very simple way to use it is to install the [WAVE](https://wave.webaim.org/extension/) and [axe DevTools](https://www.deque.com/axe/browser-extensions/) browser extensions. They both runs for local and online page and provides plenty of good advices and checks such as color contrast.

## Code validity

For code validity, you probably know already that the Polyglot Tech Blog template allows checking HTML and CSS validity using [W3C's vnu-jar](https://validator.github.io/validator/). However, W3C maintains plenty of other useful [tools](https://www.w3.org/developers/tools/) that can be used to check yor code validity. Let's mention the [internationalization](https://validator.w3.org/i18n-checker/) and [feed](https://validator.w3.org/feed/) checkers, just to quote some that are applicable to the Polyglot Tech Blog.

## Conclusion

We have seen different tools to assess and improve your code in terms of validity, performance, accessibility and <abbr title="Search Engine Optimization">SEO</abbr>. But in the end, all these elements are closely related: invalid code is not properly parsed, leading to performance issues, and then it is not well managed by accessibility tools and badly referenced by search engines. These tools just provide different point of views and advices about your code. They are complementary and, since they are all automated tools, they have some limit in what they can detect.
