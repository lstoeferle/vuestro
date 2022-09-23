module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:astro/recommended",
        "plugin:vue/vue3-recommended",
    ],
    overrides: [
        {
            files: ["*.astro"],
            parser: "astro-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro", ".ts", ".js"],
            }
        },
        {
            files: ["*.vue"],
            parser: "vue-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser"
            }
        },
        {
            files: ["*.ts"],
            parser: "@typescript-eslint/parser"
        }
    ],
    globals: {
        astroHTML: 'readonly',
    },
}