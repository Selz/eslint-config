/**
 * ES6 specific config
 */

module.exports = {
    extends: ['eslint-config-airbnb/base', '@selz/eslint-config/rules/common'].map(require.resolve),
    plugins: ['simple-import-sort', 'import'],
    rules: {},
};
