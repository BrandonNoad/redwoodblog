// https://prettier.io/docs/en/options.html
module.exports = {
    printWidth: 100,
    tabWidth: 4,
    arrowParens: 'always',
    trailingComma: 'none',
    singleQuote: true,
    overrides: [
        {
            files: 'Routes.js',
            options: {
                printWidth: 200
            }
        }
    ]
};
