module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/__tests__/__mocks__/styleMock.js',
  },
  testMatch: ['<rootDir>/src/__tests__/**/*.(test|spec).js'],
};