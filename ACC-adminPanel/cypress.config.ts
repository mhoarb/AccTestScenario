import { defineConfig } from "cypress";
import path from "path";
import fs from "fs";


export default defineConfig({
  retries: 0,
  projectId: "57cp54",
  env: {
    API_URL :'https://ccd.farazpardazan.com',
    token : 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdXBlcmFkbWluIiwicm9sZXMiOlsiU1VQRVJfQURNSU4iXSwiaWF0IjoxNzQ2MTAxMDg4LCJleHAiOjE3NDYxMjk4ODh9.gCmpkjemi-I3spL1HKWaF_xXV9tidSa9Cotmxlwm4Uw'
  },


  e2e: {
    setupNodeEvents(on, config) {
    },
  
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 30000,
    baseUrl: "https://ccd.farazpardazan.com",
    supportFile: false,
    experimentalStudio: true,
  },
});
