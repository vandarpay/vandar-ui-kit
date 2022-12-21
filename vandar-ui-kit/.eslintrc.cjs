module.exports = {
    root: true,
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    extends: ["plugin:vue/strongly-recommended", "eslint:recommended", "@vue/typescript/recommended", "prettier"],
    plugins: ["@typescript-eslint", "prettier"],
    rules: {
        "@typescript-eslint/no-var-requires": 0,
        "vue/multi-word-component-names": "off",
        "vue/no-multiple-template-root": "off",
        "max-len": [
            "error",
            {
                code: 180,
            },
        ],
        "linebreak-style": 0,
        "vue/require-default-prop": "off",
        "no-undef": "off",
    },
}
