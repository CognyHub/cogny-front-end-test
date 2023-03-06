module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "react-native/react-native": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all"
  ],
  "plugins": [
    "react",
    "react-native"
  ],
  "rules": {
    "semi": ["error", "always"],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
  }
}
