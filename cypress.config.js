const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },baseUrl : "https://demo.productionready.io",
    video: true,
  videoCompression: false,
  videosFolder: "cypress/videos",
  trashAssetsBeforeRuns: false,
  reporter: "mochawesome",
      reporterOptions: {
        reportDir: "cypress/myReport", // where to save in directory
        overwrite: false,
        html: true,
        json: false,
        timestamp: "mmddyyyy_HHMMss"
    }


  
  },
});
