---
title: Vérifier les indicateurs du blog
description: Cet article propose quelques moyens simples de vérifier la validité du code, l'accessibilité et les performances du modèle.
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

Nous allons maintenant vérifier quelques indicateurs et présenter des outils simples et faciles de prise en main pour assurer la validité, les performance, l'accessibilité et la <abbr title="Search Engine Optimization">SEO</abbr> de notre blog. Ces sujets sont potentiellement infinis et très pointus, c'est pourquoi nous ne ferons qu'effleurer chacun d'entre eux à l'aide d'outils automatiques. 

## Lighthouse

Un bon moyen de vérifier une page web rapidement et simplement est d'utiliser [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/). Cet outil est disponible parmi les outils de développement des [navigateurs dérivés de Chromium](https://fr.wikipedia.org/wiki/Chromium#Autres_navigateurs_fond%C3%A9s_sur_Chromium), ce qui signifie qu'il peut être utilisé en développement sur localhost. Il existe aussi en tant que service en ligne sur [PageSpeed Insights](https://pagespeed.web.dev/), mais cela implique que la page doit déjà être hébergée en ligne.  

Lighthouse fournit des indicateurs et des conseils pour améliorer la performance, l'accessibilité, la <abbr title="Search Engine Optimization">SEO</abbr> et d'autres bonnes pratiques, et il peut fonctionner pour les pages en configuration mobile ou bureau. Nous sous-estimez pas les appareils mobiles car plus de la moitié des pages web sont visionnées sur un appareil mobile d'après [statcounter](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet).

## Accessibilité

Quand on parle d'accessibilité, <abbr title="Web Accessibility Evaluation Tools">WAVE</abbr> et [axe Tools](https://www.deque.com/axe/) sont de très bons outils pour évaluer automatiquement les performances de votre page web. Un moyen très simple de les utiliser est d'installer les extensions de navigateur [WAVE](https://wave.webaim.org/extension/) et [axe DevTools](https://www.deque.com/axe/browser-extensions/). Elles fonctionnent toutes les deux pour des pages locales ou en ligne et proposent de nombreux tests et conseils, comme par exemple pour les contrastes des couleurs.

## Validité du code

Pour la validité du code, vous savez probablement déjà que le modèle Polyglot Tech Blog permet de tester le HTML et le CSS grâce au [vnu-jar du W3C](https://validator.github.io/validator/). Cependant, le W3C maintient de nombreux autres [outils](https://www.w3.org/developers/tools/) très utiles qui peuvent être utilisés pour vérifier la validité de votre code. On mentionnera ici la validation de [l'internationalisation](https://validator.w3.org/i18n-checker/) et des [flux](https://validator.w3.org/feed/), pour en citer deux applicables au Polyglot Tech Blog.

## Conclusion

Nous avons vu différents outils pour évaluer et améliorer votre code en termes de validité, performance, accessibilité et <abbr title="Search Engine Optimization">SEO</abbr>. Mais finalement, tous ces éléments sont intimement liés : du code invalide ne sera pas bien interprété, menant à des problèmes de performance, et il ne sera donc pas bien géré par les outils d'accessibilité et mal référencé par les moteurs de recherche. Ces outils fournissent donc différents points de vue et conseils sur votre code. Ils sont complémentaires et, puisqu'ils sont tous automatiques, ils ont des limites inhérentes à ce qu'ils peuvent détecter.
