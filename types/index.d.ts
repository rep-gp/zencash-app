import { AccessorType } from '@/store'
import { IServiceAPI } from '~/plugins/firebase-service'
import { Service } from '~/service/Service'

declare module 'vue/types/vue' {
    interface Vue {
        $accessor: typeof AccessorType,
        $api: IServiceAPI
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $accessor: typeof AccessorType,
        $api: IServiceAPI
    }

    interface Context {
        $accessor: typeof AccessorType,
        $api: IServiceAPI
    }
}

declare module 'vuex/types/index' {
    interface Store<S> {
        $accessor: typeof AccessorType,
        $api: IServiceAPI
    }
}

declare module 'vue-json pretty' {}
