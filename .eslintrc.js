module.exports = {
  extends: [
    '@drewster/eslint-config/react',
    '@drewster/eslint-config/ts',
    'plugin:jest/recommended'
  ],
  rules: {
    'react/react-in-jsx-scope': 0
  }
}
