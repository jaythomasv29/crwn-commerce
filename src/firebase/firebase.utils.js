import { initializeApp } from 'firebase/app';  // initialize firebase in app

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// config details
const firebaseConfig = {
  apiKey: "AIzaSyBcGGdSaEXHddSPqkite4uMGGH-Wwnyd94",
  authDomain: "crown-db-d5539.firebaseapp.com",
  projectId: "crown-db-d5539",
  storageBucket: "crown-db-d5539.appspot.com",
  messagingSenderId: "95630543226",
  appId: "1:95630543226:web:d2c70dad74028fbf13aec3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// call getAuth with app and export it for use in app
export const auth = getAuth(app)

/* To sign in with a pop-up window, call signInWithPopup: https://firebase.google.com/docs/reference/js/v8/firebase.auth.GoogleAuthProvider#setCustomParameters
signInWithGoogle()
*/

export const signInWithGoogle = () => {
  // Create an instance of the Google provider object:
const provider = new GoogleAuthProvider();
/* The authorization server prompts the user to select a user account. 
This allows a user who has multiple accounts at the authorization
 server to select amongst the multiple accounts that they may have current sessions for.
 https://developers.google.com/identity/protocols/oauth2/openid-connect#authenticationuriparameters */
 provider.setCustomParameters({ propt: 'select_account' });

 signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    console.log(result)
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  })
}

//export firebase in case we want the firebase library