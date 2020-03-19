module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/enzyme.config.js'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|svg|ttf|woff|woff2)$':
      '<rootDir>/fileTransformer.js',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: [
    './src/**/*.js',
    './src/**/**/*.js',
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
