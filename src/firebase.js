import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCH0j8mZYrUKrhQjTf8BrS6A4lO8KK7Te0",
    authDomain: "clone-1a.firebaseapp.com",
    projectId: "clone-1a",
    storageBucket: "clone-1a.appspot.com",
    messagingSenderId: "850444304648",
    appId: "1:850444304648:web:12b752e7c17ece48906cbd",
    measurementId: "G-Q70DVHNHVY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };