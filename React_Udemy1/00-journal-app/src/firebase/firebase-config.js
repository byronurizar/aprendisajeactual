import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCZj1xS_q4l5wbByrAtfUzAsrv8LQQzD6c",
    authDomain: "react-app-curso-29b60.firebaseapp.com",
    databaseURL: "https://react-app-curso-29b60.firebaseio.com",
    projectId: "react-app-curso-29b60",
    storageBucket: "react-app-curso-29b60.appspot.com",
    messagingSenderId: "296720772567",
    appId: "1:296720772567:web:88a13db0ce7af07215ef92"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); //Base de datos
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}