module.exports = {
  moduleDirectories: [
    'src',
    'node_modules',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts',
  ],
};

export {};
