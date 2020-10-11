import { AccessorType } from '@/store'

declare module 'vue/types/vue' {
    interface Vue {
        $accessor: typeof AccessorType,
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $accessor: typeof AccessorType,
    }

    interface Context {
        $accessor: typeof AccessorType,
    }
}

declare module 'vuex/types/index' {
    interface Store<S> {
        $accessor: typeof AccessorType,
    }
}

declare module 'vue-json pretty'
