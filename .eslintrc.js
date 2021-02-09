module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'prettier'],
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-curly-newline': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/no-unused-prop-types': 'off',

    'no-param-reassign': 'off',
    'no-unused-expressions': 'off',
    'class-methods-use-this': ['error', { exceptMethods: ['render'] }],
    'no-use-before-define': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'no-confusing-arrow': 'off',
    'max-len': 'off',
    'no-shadow': 'off',
    'object-curly-newline': 'off',
    'no-return-await': 'off',
    camelcase: 'off',
    'comma-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-alert': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
