import * as reporter from 'cucumber-html-reporter';

const options: reporter.Options = {
    theme: 'bootstrap',
    jsonFile: 'test-results/reports/cucumber-report.json', // Path to the JSON report
    output: 'test-results/reports/cucumber-report.html',  // Specify the custom folder
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": "1.0.0",
        "Test Environment": `${process.env.ENV?.toUpperCase()}`
    }
};

reporter.generate(options);
