# Public People Front-end

This repo contains the user interface for the Public People project. 

It follows the [JAMstack architecture](https://jamstack.org) by using Git and it's external API as single sources of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Architecture

- **Content**: Content is stored either locally into repository as markdown files (compiled during build process for SEO benefits) or retrieved via an external http request (with JavaScript during client-side rendering).
- **Logic**: The interface logic is built upon an existing architecture supplied by [Gatsby](https://www.gatsbyjs.org/), triggered through NPM scripts.
- **Version Control**: This repo is seen as the single source of truth for all interface logic and local content extracted from markdown files. Markdown files can be added and edited straight through the Github web interface, allowing non-programmers to contribute as well.
- **Deploymeny**: [Netlify](https://www.netlify.com) is used for continuous deployment, and CDN distribution. Netlify watches the Github repo, and should any files change it will rebuild the site via Gatsby and reupload to `public-people.netlify.com`. This might take a few minutes, so changes might not reflect immediately upon commiting them to Github.

### Access Locally
```
$ git clone https://github.com/public-people/public-people-frontend
$ cd public-people-frontend
$ yarn
$ npm start
```