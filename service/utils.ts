import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// firebase init - add your own config here
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
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

// utils
const db = firebase.database()
const auth = firebase.auth()

// export utils/refs
export {
    db,
    auth,
    firebaseConfig
}
