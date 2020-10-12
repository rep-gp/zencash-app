module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        '@nuxtjs/eslint-config-typescript'
    ],
    // add your custom rules here
    rules: {
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4],
        indent: ['error', 4],
        'no-console': 'off',
        'space-before-function-paren': 'off'
    }
}
