const serve = require('serve');
const backstop = require('backstopjs');
const { resolve } = require('path');
const rawConfig = require('./config');
const homepage = require('./tests/homepage');


const rawScenarios = [
  homepage,
];


const visual = process.argv.includes('--cli');

const scenarios = rawScenarios.map(obj => ({
  ...obj,
  url: rawConfig.custom.local + obj.url,
  referenceUrl: rawConfig.custom.remote + obj.url,
}));

const config = {
  ...rawConfig.backstop,
  report: visual ? rawConfig.backstop.report : ['cli'],
  scenarios,
};


const localhost = serve(
  resolve(process.cwd(), 'public'),
  {
    port: 8000,
    silent: true,
  },
);

backstop('reference', { config }).then(() => {
  backstop('test', { config }).then(() => {
    localhost.stop();
  });
});
