import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVOY95o5fjqiLyomHAtzR5JFi16tE9VGE",
    authDomain: "crwn-clothing-tutorial-b1396.firebaseapp.com",
    projectId: "crwn-clothing-tutorial-b1396",
    storageBucket: "crwn-clothing-tutorial-b1396.appspot.com",
    messagingSenderId: "367873971552",
    appId: "1:367873971552:web:f90fcc834b7cb1e842fa05",
    measurementId: "G-ZPWSMTYHZQ"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Set up Google authentication...
const provider = new firebase.auth.GoogleAuthProvider();
// Trigger the Google pop-up whenever we use this Google Auth provider for authentication & sign-in
provider.setCustomParameters({ prompt: 'select_account' });
// Pass the Google authentication service into the signInWithPopup. Indicates that we will use Google authentication within a sign-in popup.
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;