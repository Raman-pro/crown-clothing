import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAX48rAXbLeYF7tJRsLoVAj2nuJinXbUU4",
    authDomain: "crown-db07.firebaseapp.com",
    databaseURL: "https://crown-db07.firebaseio.com",
    projectId: "crown-db07",
    storageBucket: "crown-db07.appspot.com",
    messagingSenderId: "899888052014",
    appId: "1:899888052014:web:c7dd3251392969bf9f6cbf",
    measurementId: "G-XENTE2V5Z6"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt': 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider).catch(function (error) {
    console.log("hello"+error)
    const errorCode= error.code
    console.log(errorCode)
    const errorMessage=error.message;
    console.log(errorMessage)
});

export default firebase;