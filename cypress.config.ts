import { defineConfig } from "cypress"
const cypressSplit = require('cypress-split')

export default defineConfig({
  projectId: 'ho74jr',
  // https://github.com/adamgruber/mochawesome
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: false,
  },
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      cypressSplit(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);
      // IMPORTANT: return the config object
      return config
    },
  },
});
