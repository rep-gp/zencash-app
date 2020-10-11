import firebase from 'firebase/app'
import 'firebase/database'

type FBEvent = (
    a: firebase.database.DataSnapshot,
    b?: string | null | undefined
) => any

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
}

const snapshotToArray = (snapshot: FBEvent) =>
    Object.entries(snapshot).map(e => Object.assign(e[1], { key: e[0] }))

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export class Service {
    public static db = firebase.database()

    public static async fetchData(query: String): Promise<any> {
        try {
            const Ref = await Service.db.ref(`${query}`).once('value')

            return Ref
        } catch (e) {
            console.error(`Error fetching ${query}\n${e.message}`)
            return null
        }
    }

    public static listenData(path: string, callback: FBEvent): any {
        return snapshotToArray(Service.db.ref(path).on('value', callback))
    }
}

export default (context: any, inject: any) => {
    inject('api', Service)
    context.$api = Service
}
