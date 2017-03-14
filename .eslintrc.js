module.exports = {
    "parser": "babel-eslint",
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
        "jest/globals": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:jest/recommended"
    ],
    "plugins": [
        "react",
        "jest"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
