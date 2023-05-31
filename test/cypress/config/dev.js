const { defineConfig } = require('cypress');

module.exports = defineConfig({
	requestTimeout:        30000,
	defaultCommandTimeout: 20000,
	reporter:              'cypress-multi-reporters',
	reporterOptions:       {
		configFile: 'multi-reporter.json'
	},
	videos:            false,
	screenshotsFolder: 'results/screenshots',
	env:               {
		swaggerBase: '{{baseUrl}}/api/schema',
		RETRIES:     0
	},
	e2e: {
		// baseUrl: '{{baseUrl}}',
		setupNodeEvents(on, config) {
			return require('../plugins/index.js')(on, config);
		},
	}
});
