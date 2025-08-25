const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      reportPageTitle: '🚀 Dashboard de Testes - Sauce Demo',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      debug: true,
      overwrite: true,
      html: true,
      json: true,
      timestamp: 'longDate',
      showHooks: 'failed',
      saveHtml: true,
      reportFilename: '[status]_[datetime]-[name]-report',
      quiet: true,
      code: true,
      autoOpen: true,           
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: true,
    videoCompression: 32,
    videosFolder: 'cypress/videos',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    }
  }
});

