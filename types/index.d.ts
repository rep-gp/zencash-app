<<<<<<< HEAD
import { AccessorType } from '@/store'

declare module 'vue/types/vue' {
    interface Vue {
        $accessor: typeof AccessorType,
=======
import { Service } from '~/plugins/firebase-service'

declare module 'vue/types/vue' {
    interface Vue {
        $api: Service
>>>>>>> master
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
<<<<<<< HEAD
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
=======
        $api: Service
    }

    interface Context {
        $api: Service
    }
}
>>>>>>> master
