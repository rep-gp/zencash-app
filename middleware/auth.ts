import { Context } from '@nuxt/types'

const PROTECTED_ROUTES = [
]

export const isProtected = (route: string): boolean => Boolean(PROTECTED_ROUTES.find(rule => route.match(rule)))

export default function ({ store } : Context) {
    if (store.app.router) {
        store.app.router.beforeEach((to, _, next) => {
            if (isProtected(to.path)) {
                next({ path: '/' })
            } else {
                next()
            }
        })
    } else {
        throw new Error('Router is undefined')
    }
}
