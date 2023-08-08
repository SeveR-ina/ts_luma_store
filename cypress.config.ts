import { defineConfig } from 'cypress';

export default defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		charts: true,
		reportPageTitle: 'Test results',
		embeddedScreenshots: true,
		inlineAssets: true,
		saveAllAttempts: false,
	},

	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
			require('cypress-mochawesome-reporter/plugin')(on);
		},
	},
});
