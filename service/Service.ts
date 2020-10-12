import { Context } from '@nuxt/types'
import { db, auth } from '~/service/utils'

// auth.createUserWithEmailAndPassword('ze@email.com', '123').catch((error) => {
//     const errorCode = error.code
//     const errorMessage = error.message

//     console.log(errorCode, errorMessage, 'ERRO')
// })

auth.signInWithEmailAndPassword('ze@email.com', '123456').catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message

    console.error(errorCode, errorMessage)
})

auth.onAuthStateChanged((user) => {
    if (user) {
        const isAnonymous = user.isAnonymous
        const uid = user.uid

        console.log(isAnonymous, uid)
    } else {
        // User is signed out.
        console.log('off....')
    }
})

export class Service {
    auth: any
    context: Context

    constructor (authData: {}, context: Context) {
        this.auth = authData
        this.context = context
    }

    public static async get (path: string) {
        return (await db.ref(path).once('value')).toJSON()
    }

    public static async post(url: string, params: any) {
        console.log(params, url)

        try {
            await db.ref(url).set(params)
        } catch (e) {
            console.dir(e.message)
        }
    }
}
