const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: "cypress/tests/**/*.spec.{js,jsx,ts,tsx}",
    // viewportHeight: 1080,
    // viewportWidth: 1920,
    },
  setupNodeEvents(on, config) {
    // implement node event listeners here
  },

});
