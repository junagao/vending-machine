module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>src/setupEnzyme.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: [
    './src/**/*.js',
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
