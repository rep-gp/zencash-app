import { Context, Plugin } from '@nuxt/types'
import { Service } from '@/service/Service'

const api: Plugin = (context: Context, inject) => {
    context.$api = Service
    inject('api', Service)
}

export default api
