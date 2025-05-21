// const { createDefaultPreset } = require("ts-jest");
import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export default {
  testEnvironment: "node",
  transform: {
    //   "^.+\\.tsx?$": ["babel-jest", { presets: ["@babel/preset-env", "@babel/preset-typescript"] }],
    ...tsJestTransformCfg,
  },
  extensionsToTreatAsEsm: ['.ts'],
  moduleFileExtensions: ["ts", "js", "json"],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  // moduleNameMapper: {
  //   "^(.*)\\.js$": "$1",
  // },
};



// module.exports = {
//   testEnvironment: "node",
//   transform: {
//     "^.+\\.tsx?$": ["ts-jest", {}],
    
//   },

//   moduleFileExtensions: ["ts", "tsx", "js", "json"],
//   moduleNameMapper: {
//     "^(.*)\\.js$": "$1",
//   },
//   collectCoverage: true,
//   collectCoverageFrom: ["src/**/*.ts"],
//   coverageDirectory: "coverage",
//   coverageReporters: ["text", "html"],
//   coveragePathIgnorePatterns: ["/node_modules/", "/test/"],
//   testTimeout: 30000,
//   verbose: true,
// };