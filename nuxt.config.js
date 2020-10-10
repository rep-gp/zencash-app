import dotenv from 'dotenv'

let path =
    process.env.NODE_ENV === 'production'
        ? '.env'
        : '.env.' + process.env.NODE_ENV

dotenv.config({ path })

export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'dashboard-app',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/composition-api.ts',
        '~/plugins/firebase-service.ts'
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build'
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        'nuxt-svg-loader',
        // ['nuxt-vuex-localstorage', {
        //     localStorage: ['foo', 'bar'],
        //     sessionStorage: ['sfoo', 'sbar']
        // }]
    ],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
    },

    env: {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MEASUREMENT_ID,
        //databaseSecret: process.env.DATABASE_SECRET,
    },

    components: true
}
