import axios from 'axios'

import * as firebase from 'firebase/app'
import 'firebase/database'

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

export class Service {
    public static async fetchData(query: String): Promise<any> {
        try {
            firebase.initializeApp(firebaseConfig)
            const db = firebase.database()

            const Ref = db.ref(`${query}`)

            const response = await axios.get(Ref.toString() + '.json')

            return response.data
        } catch (e) {
            console.error(`Error fetching ${query}\n${e.message}`)
            return null
        }
    }
}

export default (context: any, inject: any) => {
    inject('api', Service)
    context.$api = Service
}
