# Portfolio

This is my portfolio website generated with [Eleventy](https://github.com/11ty/eleventy/).

## Elements
The essential tools and components that make the site:

  - [Eleventy](https://github.com/11ty/eleventy/). This tool generates the static files. It has a light touch. The directory structure is straightforward and the site is regenerated very quickly for hot reloading. The integration for pre- and post-processing is great.
  - [Nunjucks](https://github.com/mozilla/nunjucks). Simple templating yet powerful composition. If you're coming from Grav, which uses Twig, you're basically ready to go.
  - [Bootstrap](https://github.com/twbs/bootstrap). For a clean look you can't go wrong. As the scope of CSS expanded beyond my desire to keep pace with it, I had to use something _out of the box_ and Bootstrap adheres to good conventions.
  - [Bootstrap Icons](https://github.com/twbs/icons). These are nice adornments to any site. Easy to apply with straightforward CSS classes and free to use.
  - [Prettier](https://github.com/prettier/prettier). Despite my reasonable efforts, the output from templates rarely has the best spacing. This tool is a nice addition for output readability and formatting.
  - [Purge CSS](https://github.com/FullHuman/purgecss). I could hand select the styles I need or just blast away the cruft in one swoop with this tool. Bootstrap is mostly bloat given the simplicity of my site. Purge CSS cuts down the original 228KB file to 26KB. Your Lighthouse score _will_ improve.

## Directories
The theme of my site uses the above elements and keeps the templates pretty generic. If you look at the front matter of the Markdown files, you can see the pattern.

 - `_data`. I keep high level stuff in here like the main navigation menu structure.
 - `_includes`. This is where all of the [Nunjucks](https://github.com/mozilla/nunjucks) templates are located. I have one for the base container, navigation, the portfolio, a single page, and a 404.
 - `content`. The Markdown pages, images, and content are here.

The root directory has the Eleventy configuration and the usual NPM and Git files. 

## Build
Static site content is output to a `dist` folder. Run the following commands:

```shell
npm i
npm run build
```
