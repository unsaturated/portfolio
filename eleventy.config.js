const path = require("path");
const fs = require('node:fs');

const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const pluginNavigation = require("@11ty/eleventy-navigation");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

const prettier = require("prettier");
const { PurgeCSS } = require("purgecss");

const pluginImages = require("./eleventy.config.images.js");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "content/img/": "/img",
        "content/**/portfolio-*.jpg": "/img",
        "node_modules/bootstrap-icons/font/fonts": "/css/fonts",
        "node_modules/bootstrap-icons/font/bootstrap-icons.min.css": "/css/fonts.css",
        "node_modules/bootstrap/dist/css/bootstrap.min.css": "/css/main.css",
        "node_modules/bootstrap/dist/js/bootstrap.min.js": "/js/main.js"
    });
    eleventyConfig.addPassthroughCopy("content/resume/**/*.{pdf,jpg,jpeg,png}");
    eleventyConfig.addPassthroughCopy("content/portfolio/**/*.{pdf,mp4}");

    eleventyConfig.addWatchTarget("content/**/*.{md,svg,webp,png,jpeg}");

    eleventyConfig.addPlugin(pluginImages);
    eleventyConfig.addPlugin(pluginNavigation);
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    eleventyConfig.addPlugin(pluginBundle);

    eleventyConfig.addFilter("exclude", (arr, match) => {
        const matchLower = match ? match.toLowerCase() : '';
        return arr.filter(str => str.toLowerCase() !== matchLower);
    });

    eleventyConfig.addTransform("prettier", (content, outputPath) => {
        const extname = path.extname(outputPath);
        switch (extname) {
            case ".html":
            case ".json":
                const parser = extname.replace(/^./, "");
                return prettier.format(content, { parser });
            default:
                return content;
        }
    });

    eleventyConfig.on('eleventy.after', async ({ dir, results, runMode, outputMode }) => {
        // Purge CSS only on build, not watch or serve
        if (runMode === "build") {
            const purgeCSSResult = await new PurgeCSS().purge({
                content: [`${dir.output}/**/*.html`],
                css: [`${dir.output}/**/*.css`],
                variables: true,
                safelist: ['modal-backdrop']
            });
            purgeCSSResult.forEach(async (result) => {
                if (!result.rejected) {
                    await fs.writeFile(`${result.file}`, result.css, err => {
                        if (err) {
                            console.error(`CSS purge error writing file '${result.file}': ${err}`);
                        }
                    });
                } else {
                    console.error(`CSS purge rejection on file: '${result.file}'`);
                }
            });
        }
    });

    return {
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",

        dir: {
            input: "content", // default: "."
            includes: "../_includes", // default: "_includes"
            data: "../_data", // default: "_data"
            output: "dist"
        },

        pathPrefix: "/",
    };
};
