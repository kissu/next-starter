module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
}
