[![View on GitLab Pages](https://img.shields.io/static/v1?label=View+on+GitLab+Pages&message=florent_tassy.gitlab.io/polyglot-tech-blog&color=informational&style=flat-square)](https://florent_tassy.gitlab.io/polyglot-tech-blog) [![View on Netlify](https://img.shields.io/static/v1?label=View+on+Netlify&message=https://polyglot-tech-blog.netlify.app&color=informational&style=flat-square)](https://polyglot-tech-blog.netlify.app) [![View on GitHub Pages](https://img.shields.io/static/v1?label=View+on+GitHub+Pages&message=https://ftassy.github.io/Polyglot-Tech-Blog&color=informational&style=flat-square)](https://ftassy.github.io/Polyglot-Tech-Blog)

# Polyglot Tech Blog

An 11ty starter project for multilingual personal pages and blogs :
* Powered by [11ty static site generator](https://www.11ty.dev/)
* Styling :
    * Supports [SASS](https://sass-lang.com)
    * Includes [Chota micro CSS framework](https://jenil.github.io/chota)
    * Easy to include any other CSS library
    * Easy to skin
* Light and dark modes, with default to user's preferred scheme
* Multilingual, including RSS feeds (that's why it's called "polyglot" 😉)
* Syntax highlight with [Prism](https://prismjs.com/) and [11ty Syntax Highlighting Plugin](https://www.11ty.dev/docs/plugins/syntaxhighlight/) (that's why it's called "tech" 😉)
* Support posts and tags (that's why it's called "blog" 😉)

## How you can use it
1. If not already done, install [Node.js](https://nodejs.org/en/download)
1. Clone the [repository](https://gitlab.com/florent_tassy/polyglot-tech-blog) with `git clone https://gitlab.com/florent_tassy/polyglot-tech-blog.git` or [download](https://gitlab.com/florent_tassy/polyglot-tech-blog/-/archive/main/polyglot-tech-blog-main.zip) and unzip the repository content
2. Install dependencies: `npm ci`
3. Start development: `npm run dev`
4. Visit http://localhost:8080 to see your work-in-progress
5. Do your things and see your changes instantly!
6. When you’re projet is ready, deploy easily on GItHub Pages, GitLab Pages, Netlify or manually on a server.

## Check the code validity

Here are some random page checks with well known tools.  

### RSS feeds with [W3C Feed Validation Service](https://validator.w3.org/feed/)  
[English RSS feed](https://validator.w3.org/feed/check.cgi?url=https%3A%2F%2Fpolyglot-tech-blog.netlify.app%2Fen%2Ffeed.xml)  
[French RSS feed](https://validator.w3.org/feed/check.cgi?url=https%3A%2F%2Fpolyglot-tech-blog.netlify.app%2Ffr%2Ffeed.xml)  

### i18n with [W3C Internationalization Checker](https://validator.w3.org/i18n-checker/)  
[English blog page](https://validator.w3.org/i18n-checker/check?uri=https%3A%2F%2Fpolyglot-tech-blog.netlify.app%2Fen%2Fblog%2F#validate-by-uri+)  
[French home page](https://validator.w3.org/i18n-checker/check?uri=https%3A%2F%2Fpolyglot-tech-blog.netlify.app%2Ffr%2F#validate-by-uri+)  

### Semantic web with [Schema.org validator](https://validator.schema.org)  
[English "about" page](https://validator.schema.org/#url=https%3A%2F%2Fpolyglot-tech-blog.netlify.app%2Fen%2Fabout%2F)  
[French "add language" post](https://validator.schema.org/#url=https%3A%2F%2Fpolyglot-tech-blog.netlify.app%2Ffr%2Fblog%2Fadd-language%2F)  

## Credits

Beside above-mentionned dependencies, this project also uses :
* Derived from [Nikita Zanella's 11ty-SASS](https://github.com/NikitaZanella/11ty-SASS) starter
* Icons from [https://jam-icons.com/](https://jam-icons.com/) and [https://simpleicons.org/](https://simpleicons.org/) found on [icongram](https://icongr.am/)
* A logo derived from [inipagi](http://inipagi.com/)'s one and found on [Icon finder](https://www.iconfinder.com/icons/2620514/employee_job_laptop_seeker_unemployee_work_icon)
* A profile picture derived from [Open Clipart](https://openclipart.org/detail/236739/friendly-kitten-icon)


Enjoy !
