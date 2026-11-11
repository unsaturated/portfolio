const path = require("path");
const fs = require('node:fs');

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
    eleventyConfig.addPassthroughCopy("content/portfolio/creative-talents/essay-certificate.jpg");
    eleventyConfig.addPassthroughCopy("content/portfolio/**/*.{pdf,mp4,svg}");

    eleventyConfig.addWatchTarget("content/**/*.{md,svg,webp,png,jpeg}");

    eleventyConfig.addPlugin(pluginImages);
    eleventyConfig.addPlugin(pluginNavigation);
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    eleventyConfig.addFilter("exclude", (arr, match) => {
        const matchLower = match ? match.toLowerCase() : '';
        return arr.filter(str => str.toLowerCase() !== matchLower);
    });

    // Escapes a bare "&" but leaves an existing character reference intact, so
    // callers may write either a literal or an entity such as &rsquo;.
    const escapeAttribute = (value) => String(value)
        .replace(/&(?!(?:[a-zA-Z][a-zA-Z0-9]*|#\d+|#[xX][0-9a-fA-F]+);)/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    // Attribution degrades gracefully: any of persons, title, url, publication
    // and date may be omitted, so quotes without a byline or a live link still
    // render a well-formed figure.
    eleventyConfig.addShortcode("pullquote", (options = {}) => {
        const { quote, persons, title, url, publication, date, quoted, inset } = options;

        if (!quote) {
            throw new Error("The 'pullquote' shortcode requires a 'quote' argument.");
        }

        // Validated rather than escaped: a style attribute is not a safe place
        // for arbitrary text, and a typo here should fail the build loudly.
        let figureStyle = "";
        if (inset || inset === 0) {
            const raw = String(inset).trim();
            const length = /^\d+(?:\.\d+)?$/.test(raw) ? `${raw}%` : raw;
            if (!/^\d+(?:\.\d+)?(?:%|px|rem|em|ch|vw)$/.test(length)) {
                throw new Error(
                    `The 'pullquote' shortcode got an invalid 'inset' value: '${inset}'. `
                    + "Use a non-negative CSS length such as 8, '8%' or '2rem'."
                );
            }
            figureStyle = ` style="margin-inline: ${length}"`;
        }

        let source = publication || title;
        if (source && url) {
            source = `<a href="${escapeAttribute(url)}">${source}</a>`;
        }
        if (source && title) {
            source = `<cite title="${escapeAttribute(title)}">${source}</cite>`;
        }

        // Set quoted for an interview subject rather than the author of the
        // piece, per Chicago's "quoted in" for a source reached second-hand.
        const relation = quoted ? "quoted in" : "in";
        const connector = persons && persons.includes(",")
            ? `, ${relation} `
            : ` ${relation} `;
        const attribution = [persons, source].filter(Boolean).join(connector);
        const caption = [attribution, date].filter(Boolean).join(", ");

        return [
            `<figure${figureStyle}>`,
            `  <blockquote class="blockquote fs-6">`,
            `    <p>${quote}</p>`,
            `  </blockquote>`,
            caption ? `  <figcaption class="blockquote-footer">${caption}</figcaption>` : null,
            `</figure>`
        ].filter(Boolean).join("\n");
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
