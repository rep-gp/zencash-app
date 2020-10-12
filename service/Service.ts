import { db, auth } from '~/service/utils'

export class Service {
    public static auth = auth

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
}
