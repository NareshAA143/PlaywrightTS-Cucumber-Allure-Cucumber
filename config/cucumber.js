// cucumber.config.js
module.exports = {
  default: {
    tags: process.env.npm_config_TAGS || "",
    paths: ["src/test/features/*.feature"],
    require: [
      "src/hooks/*.ts",
      "src/test/steps/*.ts"
    ],
    format: [
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "allure-cucumberjs/reporter"
    ],
    formatOptions: {
      resultsDir: "allure-results"
    },
    parallel: 2
  },
  rerun: {
    paths: ["src/test/features/*.feature"],
    require: [
      "src/hooks/*.ts",
      "src/test/steps/*.ts"
    ],
    format: [
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "allure-cucumberjs/reporter"
    ],
    formatOptions: {
      resultsDir: "allure-results"
    },
    parallel: 2
  }
};
