const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
   specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
           on("file:preprocessor", cucumber());
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
