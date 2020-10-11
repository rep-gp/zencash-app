import { Service } from '~/plugins/firebase-service'

declare module 'vue/types/vue' {
    interface Vue {
        $api: Service
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $api: Service
    }

    interface Context {
        $api: Service
    }
}
