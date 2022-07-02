const scanner = require('sonarqube-scanner');
scanner(
  {
  serverUrl: "http://localhost:9000",
  login:"admin",
  password:"",
  options: {
    "sonar.sources": "./src",
    "sonar.projectKey": "app",
    "sonar.login":"5a4d85805e32dc64a1c81b81b2812c96c92a5e3a",
    "sonar.exclusions": "**/*.test.tsx",
    "sonar.tests": "./src",
    "sonar.test.inclusions": "**/*.test.js,**/*.test.js",
    "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
    "sonar.testExecutionReportPaths": "test-report.xml",
    "sonar.eslint.reportPaths":"eslint-report.json"
  },
},
() => process.exit()
);