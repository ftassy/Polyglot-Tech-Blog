const { EleventyI18nPlugin } = require("@11ty/eleventy");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const CleanCSS = require("clean-css");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addPassthroughCopy("./src/js"); // All files is "src/js" are copied as such in "public/js"
    eleventyConfig.addPassthroughCopy("./src/img"); // All files is "src/img" are copied as such in "public/img"
    eleventyConfig.addPassthroughCopy("./src/_redirects"); // _redirects file is copied as such in "public/"
    eleventyConfig.addShortcode("shortcodes", function () {
        this.page
    });

    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        // any valid BCP 47-compatible language tag is supported
        defaultLanguage: "en", // Required, this site uses "en"
        errorMode: "allow-fallback", // only throw an error when the content is missing at both /en/slug and /slug
    });
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(syntaxHighlight, {
        preAttributes: {
            tabindex: 0,
        },
    });

    // Prism and Chota define a tag class. This leads to styling conflicts
    // So we replace .tag in Chota with .chip.
    eleventyConfig.addFilter("tagtochip", function (css) {
        return css.replaceAll('.tag', '.chip');
    });

    // Minify CSS code
    eleventyConfig.addFilter("cssmin", function (css) {
        return new CleanCSS({}).minify(css).styles;
    });

    // Convert date string into a local date string
    eleventyConfig.addFilter("localdate", function (dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    });

    // Convert de date string into a ISO date string i.e. 1977-04-22T06:00:00
    eleventyConfig.addFilter("isodate", function (dateString) {
        const date = new Date(dateString).toISOString();
        return date.substring(0, date.lastIndexOf('.'));
    });

    // Minify HTML
    eleventyConfig.addTransform("htmlmin", function (content) {
        if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }
        return content;
    });

    return {
        htmlTemplateEngine: "njk", // Forces the use of Nunjucks templates
        markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "public",
        },
        pathPrefix: ""
    };
};
