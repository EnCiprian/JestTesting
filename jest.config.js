module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    "transform": {
      "^.+\\.steps.js?$": "ts-jest"
    },
    "testMatch": [
      "**/*.steps.js"
    ],
    
    "testPathIgnorePatterns": [
      "/node_modules/",
      "<rootDir>/config/webpack/test.js"
    ]    
  }