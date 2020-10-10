import axios from "axios";

import * as firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
    databaseSecret: process.env.DATABASE_SECRET,
}

let app = null
if(!firebase.app.length){
	app = firebase.initializeApp(firebaseConfig)

}

const db = firebase.storage()

export class Service {
	public static async getData(query: string) {
		try {

			const Ref = db.ref('companies')

			const response = await axios.get(Ref.toString() + '.json')

			console.log(response.data)

		} catch (e) {
			console.error(`Error fetching ${query}\n${e.message}`);
			return null;
		}
	}
}

export default (context: any, inject: any) => {
	inject("api", Service);
	context.$api = Service;
};
