import { Context } from '@nuxt/types'
import { AuthService } from '@/service/AuthService'

const PROTECTED_ROUTES = [
    /cash.*/,
    /expenses.*/
]

export const isProtected = (route: string): boolean => Boolean(PROTECTED_ROUTES.find(rule => route.match(rule)))

export default function ({ store } : Context) {
    if (store.app.router) {
        store.app.router.beforeEach((to, _, next) => {
            if (isProtected(to.path) && !AuthService.user) {
                next({ path: '/' })
            } else {
                next()
            }
        })
    } else {
        throw new Error('Router is undefined')
    }
}
