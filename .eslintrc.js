module.exports = {

  root: true,

  parserOptions: {

    parser: 'babel-eslint',

    sourceType: 'module',

  },

  env: {

    browser: true,

  },

  extends: ['plugin:vue/essential', 'airbnb-base'],

  plugins: ['vue'],

  globals: {

    ga: true,

    cordova: true,

    __statics: true,

    process: true,

    Capacitor: true,

    chrome: true,

  },

  rules: {

    'no-param-reassign': 'off',

    'prefer-destructuring': 'off',

    'operator-linebreak': 'off',

    'array-callback-return': 'off',

    'arrow-parens': 'off',

    'import/first': 'off',

    'import/named': 'error',

    'import/namespace': 'error',

    'import/default': 'error',

    'import/export': 'error',

    'import/extensions': 'off',

    'import/no-unresolved': 'off',

    'import/no-extraneous-dependencies': 'off',

    'import/prefer-default-export': 'off',

    'prefer-promise-reject-errors': 'off',

    'max-len': 'off',

    'object-curly-newline': 'off',

    'consistent-return': 'off',

    'no-console': 'off',

  },

};
