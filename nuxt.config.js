import dotenv from 'dotenv'

const path =
    process.env.NODE_ENV === 'production'
        ? '.env'
        : '.env.' + process.env.NODE_ENV

dotenv.config({ path })

export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'ZenCash Dashboard',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image', href: '/icon.png' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800;900&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/apexcharts.ts',
        '~/plugins/auth.ts',
        '~/plugins/localstorage.ts',
        '~/plugins/composition-api.ts',
        '~/plugins/firebase-service.ts'
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    // https://go.nuxtjs.dev/typescript
        '@nuxtjs/eslint-module',
        '@nuxt/typescript-build',
        'nuxt-typed-vuex'
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        'nuxt-svg-loader',
        '@nuxtjs/style-resources',
        ['nuxt-vuex-localstorage', {
            sessionStorage: ['ui']
            // localStorage: ['']
        }]
    ],

    styleResources: {
        scss: [
            './assets/main.scss',
            './assets/colors.scss'
        ]
    },

    auth: {
        persistence: 'local', // default
        initialize: {
            onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
            onAuthStateChangedAction: 'onAuthStateChangedAction'
        },
        ssr: false // default
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: [
            /typed-vuex/
        ],
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)|(\.svg$)/ /* <--- here */
                })
            }
        }
    },

    router: {
        middleware: ['auth']
    },

    env: {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MEASUREMENT_ID
    }
}
