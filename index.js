module.exports = {
  configs: {
    recommended: {
      parserOptions: {
        ecmaVersion: 2019
      },
      env: {
        node: true,
        "jest/globals": true,
      },
      extends: [
        "airbnb",
        "prettier",
        "plugin:jest/recommended",
      ],
      plugins: ["node", "prettier", "jest"],
      rules: {
        "no-process-exit": "off",
        "node/exports-style": "off",
        "node/no-deprecated-api": "error",
        "node/no-extraneous-import": "off",
        "node/no-extraneous-require": "off",
        "node/no-missing-import": "off",
        "node/no-missing-require": "error",
        "node/no-unpublished-bin": "error",
        "node/no-unpublished-import": "off",
        "node/no-unpublished-require": "error",
        "node/no-unsupported-features/es-builtins": "error",
        "node/no-unsupported-features/es-syntax": "error",
        "node/no-unsupported-features/node-builtins": "error",
        "node/prefer-global/buffer": "off",
        "node/prefer-global/console": "off",
        "node/prefer-global/process": "off",
        "node/prefer-global/text-decoder": "off",
        "node/prefer-global/text-encoder": "off",
        "node/prefer-global/url-search-params": "off",
        "node/prefer-global/url": "off",
        "node/process-exit-as-throw": "error",
        "node/shebang": "error",
        "import/no-extraneous-dependencies": "off",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        "class-methods-use-this": "off",
        "prettier/prettier": "error",
        "no-console": "off",
        "no-plusplus": "off",
        "no-continue": "off",
        "array-element-newline": ["error", "consistent"],
        "no-restricted-syntax": "off",
        "guard-for-in": "off",
        "no-await-in-loop": "off",
        "no-underscore-dangle": "off",
        "no-bitwise": "off"
      }
    }
  }
};
