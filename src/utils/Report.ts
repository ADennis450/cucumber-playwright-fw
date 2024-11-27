import { generate, Options } from 'cucumber-html-reporter';

const options: Options = {
  theme: 'bootstrap',
  jsonFile: 'test-results/reports/cucumber_report.json',
  output: 'test-results/reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chrome  90.0.4430.24",
    "Platform": "Windows 10",
    "Parallel": "Scenarios",
    "Executed": "Remote",
  },
};

export const generateReport = () => {
     generate(options);
}
