/**
 * Selz specific common rules
 */

module.exports = {
    extends: ['plugin:prettier/recommended'],
    plugins: ['simple-import-sort', 'import', 'prettier'],
    rules: {
        // Prettier setup
        'prettier/prettier': 'error',

        // 4 space indentation to match the rest of the platform
        indent: ['error', 4, { SwitchCase: 1 }],

        // Fix up spacing between declarations
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'never',
                prev: ['singleline-const', 'singleline-let', 'singleline-var'],
                next: ['singleline-const', 'singleline-let', 'singleline-var'],
            },
        ],

        // Sort imports
        'sort-imports': 'off',
        'import/order': 'off',
        'simple-import-sort/sort': 'error',
    },
};
