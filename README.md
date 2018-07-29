# Public People Frontend &middot; ![stability-wip](https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg) [![Build Status](https://travis-ci.org/public-people/public-people-frontend.svg?branch=master)](https://travis-ci.org/public-people/public-people-frontend) ![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m780456713-527b0cb8b85abf879df15c02.svg) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

Welcome to the Public People frontend repo. We like it here and hope you will too.

#### The Quest

---

We want to make it easy for South Africans to know who their politicians are and what they have done in the past. We think that accountability in politics is important, and one thing that makes that possible is easy access to information.

This README is where you'll find information and links for all the decisions we've taken so far. All we ask of aspiring new contributors is that you take the time to understand what we've done before issuing that pull request (see the [React "How to Contribute" docs](https://reactjs.org/docs/how-to-contribute.html#sending-a-pull-request) if you, like I did, come to this not knowing how).

Most importantly, please feel free to get in touch if you have any questions. The following questions, or questions like them, are very welcome:

- "I'd like to help. What parts of the application need work?"
- "Is there any reasearch I can do on your behalf?"
- "I've pulled the repo but I can't get it built for [reason, including any error messages]. Do you have any resources that could unblock me?"

We don't mind helping – but please have a bit of a read of this document or play around a little with a local build. We assume you're a busy person with an important life (such magnificence – much grandeur) – do the same for us. One thing we might ask in exchange for our help is an update to the docs so that the next person has an easier time coming on board.

*Saul (front-end gadfly)*
[saulnachman@gmail.com](mailto:saulnachman@gmail.com)

---

## Da Stack

Built with [Gatsby](https://www.gatsbyjs.org/) and [Redux](https://redux.js.org/)

We use these Gatsby plugins:

- Link with preload/routing – [gatsby-link](https://www.npmjs.com/package/gatsby-link)
- Google fonts – [gatsby-plugin-google-fonts](https://www.npmjs.com/package/gatsby-plugin-google-fonts)
- Site meta – [gatsby-plugin-react-helmet](https://www.npmjs.com/package/gatsby-plugin-react-helmet)
- SASS/SCSS – [gatsby-plugin-sass](https://www.npmjs.com/package/gatsby-plugin-sass)

And these Redux bindings/plugins:

- [react-redux](https://www.npmjs.com/package/react-redux)
- [redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension)
- [redux-thunk](https://www.npmjs.com/package/redux-thunk)
- [redux-batched-subscribe](redux-batched-subscribe)

## Conventions

#### Files

- We follow the [Gatsby documentation](https://www.gatsbyjs.org/docs/) wrt. file architecture.

#### Redux

- We follow the [Ducks](https://github.com/erikras/ducks-modular-redux) convention for Redux file architecture; and
- The [Flux Standard Action](https://github.com/redux-utilities/flux-standard-action) for action structure.

#### React

- For seperation-of-concerns, we use the [Container Components](https://medium.com/@learnreact/container-components-c0e67432e005) architecture.

#### CSS

- We use conventions found in [Tailwind CSS](http://tailwindcss.com/) for naming utility classes.
- Our CSS linting is done with the following stylelint configs:
  - [stylelint-config-standard](stylelint-config-standard)
  - [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)
  - [stylelint-config-css-modules](https://www.npmjs.com/package/stylelint-config-css-modules)
  - [stylelint-no-unsupported-browser-features](https://www.npmjs.com/package/stylelint-no-unsupported-browser-features) -[stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)

#### JavaScript

- Fam, use [Prettier](https://github.com/prettier/prettier) – arguing about code formatting is about the least interesting thing a person can do with their short, short life. As it can be implemented with your text editor/IDE or as a script, implementation is left up to you. Godspeed.
- For JS linting we use the following ESLint configs:
  - [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb).
  - [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react).
  - [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
  - [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
  - [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

#### Testing

- [Jest](https://facebook.github.io/jest/) is our favoured unit testing package and tests are placed in a `__tests__` folder in a component folder. Run with `npm run test:jest`.

#### Support

- We support browsers in accordance with the following Browserslist rules:
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
5.  The `npm start` script is configured to run on `localhost:3000` as the media/news search dev endpoint responds to this origin.
6.  Open `localhost:3000` in your browser.

\* _Development server uses hot-reloading. Changes will reflect immediately on `localhost:3000` without refreshing the browser_.

## Deployment

1.  [Husky](https://www.npmjs.com/package/husky) automatically executes [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/) and [Jest](https://facebook.github.io/jest/) tests via `npm run test:local` upon running a `git push` command.
2.  Code will only be pushed to remote repository if `npm test` passes. <sup>2</sup> <sup>3</sup>
3.  [Netlify](https://www.netlify.com/) builds a new static site instance of the repo via `npm run build`.
4.  If build is valid it will be deployed to [Netlify](https://www.netlify.com/) at `public-people.netlify.com`.

<sup>2</sup> It is advised to integrate [ESLint](https://eslint.org/) into your editor/IDE to receive linting errors as you work. Read the following [ESLInt documentation](https://eslint.org/docs/user-guide/integrations#editors) to integrate ESLint into your editor/IDE.

<sup>3</sup> If this is not possible it is advised that you run `npm test:lint` as often as possible during development. In emergencies [Husky](https://www.npmjs.com/package/husky) can be bypassed by running `git push --no-verify`.

## Appreciation

Thank you to [Browserstack](https://www.browserstack.com/) for providing free cross-browser testing services.

[![](tooling/documentation/browserstack.png)](https://www.browserstack.com)

#### Contributors (to date)

- Saul
- JD Botha
- Schalk Venter

---
