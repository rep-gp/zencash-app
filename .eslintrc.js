module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended'
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4],
        indent: ['error', 4],
        'no-console': 'off',
        'space-before-function-paren': ['error', 'never']
    }
}
