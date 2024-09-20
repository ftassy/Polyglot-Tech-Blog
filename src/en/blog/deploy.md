---
title: Deploy
description: Our Polyglot Tech Blog is ready. Let's see some ways to deploy it on the server.
date: 2023-06-11T12:00:00
author: Florent Tassy
tags: 
    - deploy
    - GitLab
    - Netlify
    - GitHub
---

## Introduction

<div>Now that we have adapted the template with our content, we would like to deploy it on the web. Let's go through some common deployment scenarios.</div>

## Deploy manually

In order to have correct hyperlinks, you need to know the URL the website will be deployed to. Create a file named `prod.js` at the blog root and provide the base URL of your website and the directory in which it is deployed if any. For example, if the URL will be https://example.com/subpath, the file should contain:  

```js
module.exports = { 
    baseUrl: "https://example.com/subpath", // Notice that there is no trailing "/"
    pathPrefix: "subpath" 
};
```

If there is no subpath, leave the value empty: `pathPrefix: ""`. If there is a subpath, you can also delete the `robots.txt` file as it will not be reachable.  

We can now build the blog i.e. process all files in the `src` directory and generate the HTML, JavaScript, CSS and other static files that will be pushed to the server. I recommend following the steps below:
1. Stop the dev server if it is running
2. Empty the `public` directory
```bash
npm run clean # with npm
yarn clean # with Yarn
```
3. Build the deployment-ready blog
```bash
npm run manual:build # with npm
yarn manual:build # with Yarn
```

You can then copy the content of the `public` directory on the server.

## Deploy on GitLab pages

The starter comes with a `.gitlab-ci.yml` file that should do the trick. You will just have to update the `gitlab-pages.js` file:  

```js
module.exports = { 
    baseUrl: "https://florent_tassy.gitlab.io/polyglot-tech-blog", // Notice that there is no trailing "/"
    pathPrefix: "polyglot-tech-blog" 
};
```

Then push the repository on your GitLab instance. If the remote repository is correctly configured, the CI/CD pipeline will deploy the blog.

## Deploy on Netlify

You can refer to [Netlify documention](https://docs.netlify.com/git/overview/).

For manual deployment, the starter comes with a `netlify.js` file that you can adapt to get the correct build:  

```js
module.exports = { 
    baseUrl: "https://polyglot-tech-blog.netlify.app", // Notice that there is no trailing "/"
    pathPrefix: "" 
};
```

You can now build the blog by following the steps below:  
1. Stop the dev server if it is running
2. Empty the `public` directory
```bash
npm run clean # with npm
yarn clean # with Yarn
```
3. Build the deployment-ready blog
```bash
npm run netlify:build # with npm
yarn netlify:build # with Yarn
```

You can then connect to Netlify and drag-and-drop the `public` directory.  

## Deploy on GitHub

The starter comes with a `.github > workflows > build-and-deploy.yml` file that should do the trick. You will just have to update the `github-pages.js` file:  

```js
module.exports = { 
    baseUrl: "https://ftassy.github.io/Polyglot-Tech-Blog", // Notice that there is no trailing "/"
    pathPrefix: "Polyglot-Tech-Blog" 
};
```

Then push the repository on GitHub. If the remote repository is correctly configured, the GitHub Action will deploy the blog.

## Conclusion

We have covered our blog deployement either manually on a server or on GitLab Pages, GitHub Pages and Netlify hosting services. If your scenario is not covered here, you should find a way to adapt on of these scenarios to your specific case. Congratulations, your blog is now online!
