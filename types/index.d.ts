import { AccessorType } from '@/store'
// import { ServiceInterface } from '@/plugins/service'

declare module 'vue/types/vue' {
    interface Vue {
        $accessor: typeof AccessorType,
        // $service: ServiceInterface
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $accessor: typeof AccessorType,
        // $service: ServiceInterface,
    }

    interface Context {
        $accessor: typeof AccessorType,
        // $service: ServiceInterface,
    }
}

declare module 'vuex/types/index' {
    interface Store<S> {
        $accessor: typeof AccessorType,
        // $service: ServiceInterface,
    }
}

declare module 'vue-json pretty'
