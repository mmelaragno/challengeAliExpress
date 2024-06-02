// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,
  "reporter": "mochawesome",
  "reporterOptions": {
    "charts": true,
    "overwrite": false,
    "html": true,
    "json": false,
    "reportDir": "cypress/report/mochawesome-report"},
  e2e: {
    setupNodeEvents(on, config) {
    },
    chromeWebSecurity: false,
  },
});