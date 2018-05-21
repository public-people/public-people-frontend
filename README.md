# Public People Frontend &middot; ![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m780456713-527b0cb8b85abf879df15c02.svg) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

This repo contains the user interface for the Public People project.

## Stack

Built with [Gatsby](https://www.gatsbyjs.org/) and [Redux](https://redux.js.org/)

The following Gatsby plugins are used:
- [gatsby-link](https://www.npmjs.com/package/gatsby-link)
- [gatsby-plugin-google-fonts](https://www.npmjs.com/package/gatsby-plugin-google-fonts)
- [gatsby-plugin-react-helmet](https://www.npmjs.com/package/gatsby-plugin-react-helmet)
- [gatsby-plugin-sass](https://www.npmjs.com/package/gatsby-plugin-sass)
- [gatsby-transformer-remark](https://www.npmjs.com/package/gatsby-transformer-remark)

## Conventions

- Underlying architecture corresponds with [Gatsby documentation](https://www.gatsbyjs.org/).
- Redux file architecture corresponds to [Ducks](https://github.com/erikras/ducks-modular-redux) convention.
- Redux action structure correspond to [Flux Standard Action](https://github.com/redux-utilities/flux-standard-action) convention.
- JavaScript linting done in accordance with [AirBnb JavaScript styleguide](https://github.com/airbnb/javascript).
- React linting done in accordance with [AirBnb React/JSX styleguide](https://github.com/airbnb/javascript/tree/master/react).
- All unit tests are written in [Jest](https://facebook.github.io/jest/) and placed in a `__tests__` folder located inside a component folder.

## Development

1. Clone this project by running with `git clone https://githubcom/public-people/public-people-frontend`.
2. Make sure you have [NodeJS](https://nodejs.org/en/) installed.
3. Run `npm install` in the root folder of the repository.
4. Run `npm start` to spin up the development server.*
5. Open `localhost:8000` in your browser.

* _Development server uses hot-reloading. Changes will reflect immediately on `localhost:8000` without refreshing the browser_

## Deployment

1. [Husky](https://www.npmjs.com/package/husky) automatically executes an [ESLint](https://eslint.org/) test via `npm run test:lint` upon running a `git push` command.
2. Code will only be pushed to git if `npm run test` passes.*
3. Once code is pushed/merged into master [Travis](https://travis-ci.org/) execute all [Jest](https://facebook.github.io/jest/) tests via `npm run test:jest`
4. If [Jest](https://facebook.github.io/jest/) tests pass, static site will be built via `npm run build`.
5. If build is valid it will be deployed to `public-people.netlify.com`.

* It is advised to integrate [ESLint](https://eslint.org/) to into your IDE to receive real-time linting errors. If this is not possible it is advised that you run `npm test` as often as possible during development. In emergencies [Husky](https://www.npmjs.com/package/husky) can be bypassed by running `git push --no-verify`

## Roadmap v0.1
- 