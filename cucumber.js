module.exports = {
  default: {
    paths: ["./src/test/features/*.feature"],
    require: ["./src/test/step-definitions/*.ts", "./src/hooks/Hooks.ts"],
    requireModule: ["ts-node/register"],
    format:["json:test-results/reports/cucumber-report.json"]
  },
};
