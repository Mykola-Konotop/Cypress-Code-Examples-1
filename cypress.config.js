const { defineConfig } = require("cypress");
const { registerAIOTestsPlugin } = require('cypress-aiotests-reporter/src');
const gmailTester = require("gmail-tester");
const path = require("path");
require('dotenv').config();

module.exports = defineConfig({
  env: {
    "aioTests": {
      "enableReporting": true,
      "cloud": {
        "apiKey": process.env.AIO_API_KEY
      },
      "jiraProjectId": "SI",
      "cycleDetails": {
        "createNewCycle": false,
        "cycleName": "Lyft Automation Runs",
        "cycleKey": "SI-CY-1",
        "folder": ["All", "Automation Runs"]
      },
      "addNewRun": true,
      "addAttachmentToFailedCases": true,
      "createNewRunForRetries": true,
      "addTestBodyToComments": true
    }
  },

  e2e: {
    baseUrl: "https://lyft.carselfinspection.com/engine",
    setupNodeEvents(on, config) {
    
      registerAIOTestsPlugin(on, config)

      on("task", {
        "gmail:get-messages": async (args) => {
          const messages = await gmailTester.get_messages(
            path.resolve(__dirname, "credentials.json"),
            path.resolve(__dirname, "token.json"),
            args.options
          )

          return messages
        }
      })

      require("cypress-fail-fast/plugin")(on, config);
      return config;
    },

    video: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalSkipDomainInjection: [
      '*.salesforce.com',
      '*.force.com',
      '*.google.com',
    ],
  },
})