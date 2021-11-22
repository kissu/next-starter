module.exports = {
  extends: ['@commitlint/config-conventional'],
  // https://github.com/conventional-changelog/commitlint/issues/817
  parserOpts: {
    headerPattern: /^.*$/,
    headerCorrespondence: ['scope'],
  },

  // type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
  rules: {
    'type-enum': [2, 'always', ['fix', 'feature', 'style', 'setup', 'perf', 'refactor', 'doc', 'test']],
    'subject-case': [
      1,
      'always',
      [
        'lower-case', // default
        'upper-case', // UPPERCASE
        'camel-case', // camelCase
        'kebab-case', // kebab-case
        'pascal-case', // PascalCase
        'sentence-case', // Sentence case
        'snake-case', // snake_case
        'start-case', // Start Case
      ],
    ],
    'subject-max-length': [1, 'always', 50],
    // if we want to enforce a body
    // 'body-empty': [1, 'never'],
  },
}
