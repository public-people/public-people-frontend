# Public People Frontend &middot; ![stability-wip](https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg) [![Build Status](https://travis-ci.org/public-people/public-people-frontend.svg?branch=master)](https://travis-ci.org/public-people/public-people-frontend) ![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m780456713-527b0cb8b85abf879df15c02.svg) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

This repo contains the user interface for the Public People project.

## Stack

Built with [Gatsby](https://www.gatsbyjs.org/) and [Redux](https://redux.js.org/)

The following Gatsby plugins are used:

- Link with preload/routing – [gatsby-link](https://www.npmjs.com/package/gatsby-link)
- Google fonts – [gatsby-plugin-google-fonts](https://www.npmjs.com/package/gatsby-plugin-google-fonts)
- Site meta – [gatsby-plugin-react-helmet](https://www.npmjs.com/package/gatsby-plugin-react-helmet)
- SASS/SCSS – [gatsby-plugin-sass](https://www.npmjs.com/package/gatsby-plugin-sass)
- React 16 – [gatsby-plugin-react-next](https://www.gatsbyjs.org/packages/gatsby-plugin-react-next/)

The following Redux bindings/plugins are used:

- [react-redux](https://www.npmjs.com/package/react-redux)
- [redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension)
- [redux-thunk](https://www.npmjs.com/package/redux-thunk)
- [redux-batched-subscribe](redux-batched-subscribe)

## Conventions

#### Files

- Underlying file architecture corresponds to guidelines established in [Gatsby documentation](https://www.gatsbyjs.org/docs/).

#### Redux

- Redux file architecture corresponds to [Ducks](https://github.com/erikras/ducks-modular-redux) convention.
- Redux action structure correspond to [Flux Standard Action](https://github.com/redux-utilities/flux-standard-action) convention.

#### React

- Seperation-of-concerns architecture corresponds to the Container–Components style exemplified in [Container Components](https://medium.com/@learnreact/container-components-c0e67432e005)

#### CSS

- Utility classes follows naming conventions used by [Tailwind CSS](http://tailwindcss.com/)
- CSS linting done in accordance with the following Stylelint configs:
  - [stylelint-config-standard](stylelint-config-standard)
  - [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)
  - [stylelint-config-css-modules](https://www.npmjs.com/package/stylelint-config-css-modules)
  - [stylelint-no-unsupported-browser-features](https://www.npmjs.com/package/stylelint-no-unsupported-browser-features)

#### JavaScript

- JavaScript linting done in accordance with the following ESLint configs:
  - [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb).
  - [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react).
  - [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
  - [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)

#### Testing

- Unit tests are written in [Jest](https://facebook.github.io/jest/) and placed in a `__tests__` folder located inside a component folder. Can be run with `npm run test:jest`.
- Visual regressive testing is done with [BackstopJS](https://github.com/garris/BackstopJS), and configured in the `tooling/backstop` folder. Can be run with `npm run test:backstop`.

#### Support

- Browser support should correspond with the following Browserslist rules:
  - `last 12 chrome versions`
  - `last 12 firefox versions`
  - `last 6 safari versions`
  - `explorer >= 9`
  - `edge > 0`

## Development

1.  Clone this project by running `git clone https://githubcom/public-people/public-people-frontend`.
2.  Make sure you have [NodeJS](https://nodejs.org/en/) installed.
3.  Run `npm install` in the root folder of the repository.
4.  Run `npm start` to spin up the development server.\*
5.  The 'npm start`script is configured to run on`localhost:3000` as the media/news search dev endpoint responds to this origin.
6.  Open `localhost:3000` in your browser.

\* _Development server uses hot-reloading. Changes will reflect immediately on `localhost:8000` without refreshing the browser_.

## Deployment

1.  [Husky](https://www.npmjs.com/package/husky) automatically executes [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/), [Jest](https://facebook.github.io/jest/) and [BrowserStack](https://github.com/garris/BackstopJS) tests via `npm run test:local` upon running a `git push` command.
2.  Code will only be pushed to remote repository if `npm test` passes. <sup>2</sup> <sup>3</sup>
3.  [Netlify](https://www.netlify.com/) builds a new static site instance of the repo via `npm run build`.
4.  If build is valid it will be deployed to [Netlify](https://www.netlify.com/) at `public-people.netlify.com`.

<sup>2</sup> It is advised to integrate [ESLint](https://eslint.org/) into your editor/IDE to receive linting errors as you work. Read the following [ESLInt documentation](https://eslint.org/docs/user-guide/integrations#editors) to integrate ESLint into your editor/IDE.

<sup>3</sup> If this is not possible it is advised that you run `npm test:lint` as often as possible during development. In emergencies [Husky](https://www.npmjs.com/package/husky) can be bypassed by running `git push --no-verify`.

## Contribute

See [tasks for the current pre-release version](https://github.com/public-people/public-people-frontend/releases/).

## Appreciation

Thank you to [Browserstack](https://www.browserstack.com/) for providing free cross-browser testing services.

[![](tooling/documentation/browserstack.png)](https://www.browserstack.com)
