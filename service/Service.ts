import { db, auth } from '~/service/utils'

export class Service {
    public static async get (path: string) {
        return (await db.ref(path).once('value')).toJSON() as any
    }

    public static async post (url: string, params: any) {
        try {
            await db.ref(url).set(params)
        } catch (e) {
            console.dir(e.message)
        }
    }

    public static login ({ email, password }: any) {
        auth.signInWithEmailAndPassword(email, password)

        auth.onAuthStateChanged((user) => {
            if (user) {
                // const isAnonymous = user.isAnonymous
                const uid = user.uid
                console.log(user, 'loggado')

                return { error: false, uid }
            } else {
                return { error: true }
            }
        })
    }
}
