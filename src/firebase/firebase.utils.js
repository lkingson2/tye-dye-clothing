import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA42d-k0lfKiUG01V55UXsIGVe6rbkSNas",
    authDomain: "crwn-db-eb27b.firebaseapp.com",
    databaseURL: "https://crwn-db-eb27b.firebaseio.com",
    projectId: "crwn-db-eb27b",
    storageBucket: "crwn-db-eb27b.appspot.com",
    messagingSenderId: "233168617132",
    appId: "1:233168617132:web:edd715115bcbd9d283a909",
    measurementId: "G-FL8MZTX5GE"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);