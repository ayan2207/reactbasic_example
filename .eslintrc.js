module.exports = {
    "extends": "airbnb",
    "env": {
      "jest": true
    },
    "rules": {
      "arrow-body-style": ["error", "always"],
      "comma-dangle": ["error", "never"],
      "semi": ["error", "never"],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
    "plugins": [
        "react"
    ]
};