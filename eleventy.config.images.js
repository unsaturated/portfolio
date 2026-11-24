const path = require("path");
const fs = require("node:fs");
const eleventyImage = require("@11ty/eleventy-img");

function escapeAttribute(value) {
	return String(value)
		.replace(/&/g, "&amp;")
		.replace(/"/g, "&quot;")
		.replace(/</g, "&lt;");
}

function relativeToInputPath(inputPath, relativeFilePath) {
	let split = inputPath.split("/");
	split.pop();

	return path.resolve(split.join(path.sep), relativeFilePath);

}

function isFullUrl(url) {
	try {
		new URL(url);
		return true;
	} catch(e) {
		return false;
	}
}

module.exports = function(eleventyConfig) {
	// Eleventy Image shortcode
	// https://www.11ty.dev/docs/plugins/image/
	eleventyConfig.addAsyncShortcode("image", async function imageShortcode(src, alt, widths, sizes, cssClass) {
		// Full list of formats here: https://www.11ty.dev/docs/plugins/image/#output-formats
		let formats = ["webp", "jpg", "auto"];
		let input;
		if(isFullUrl(src)) {
			input = src;
		} else {
			input = relativeToInputPath(this.page.inputPath, src);
		}

		let metadata = await eleventyImage(input, {
			widths: widths || ["auto"],
			formats,
			outputDir: path.join(eleventyConfig.dir.output, "img"), // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
		});

		let imageAttributes = {
			alt,
			sizes,
			loading: "lazy",
			decoding: "async",
			class: cssClass
		};

        let options = {
			whitespaceMode: "block",
		};

		return eleventyImage.generateHTML(metadata, imageAttributes, options);
	});

	// Inlined rather than linked so diagrams drawn with currentColor follow the
	// page's light/dark theme, which an <img> cannot see.
	eleventyConfig.addShortcode("svg", function svgShortcode(src, alt, cssClass) {
		let input = relativeToInputPath(this.page.inputPath, src);
		let markup = fs.readFileSync(input, "utf8");
		let attributes = [`role="img"`, `aria-label="${escapeAttribute(alt)}"`];
		if(cssClass) {
			attributes.push(`class="${escapeAttribute(cssClass)}"`);
		}
		// A blank line would end Markdown's HTML block partway through the SVG.
		return markup
			.replace(/^[\s\S]*?<svg\b/, `<svg ${attributes.join(" ")}`)
			.replace(/\n\s*\n/g, "\n")
			.trim();
	});
};
