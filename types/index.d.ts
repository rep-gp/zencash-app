import { AccessorType } from '@/store'
import { Service } from '~/plugins/firebase-service'

declare module 'vue/types/vue' {
    interface Vue {
        $accessor: typeof AccessorType
        $api: typeof Service
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $accessor: typeof AccessorType
        $api: typeof Service
    }

    interface Context {
        $accessor: typeof AccessorType
        $api: typeof Service
    }
}

declare module 'vuex/types/index' {
    interface Store<S> {
        $accessor: typeof AccessorType
        $api: typeof Service
    }
}

declare module 'vue-json pretty' {}
