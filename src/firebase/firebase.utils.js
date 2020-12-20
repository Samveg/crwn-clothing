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

// Create a user profile document that grabs key information at the time of account creation and posts it into a Firestore document
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // If the user auth object does not exist, exit from this function before doing anything...

  const userRef = firestore.doc(`/users/${userAuth.uid}`); // Create a reference to a document with the name matching the UID, within the users collection
  const snapShot = await userRef.get(); // Retrieves the actual document data
  
  // Query the firestore to see if this user already has an existing document, i.e. therefoer the user already exists... If no document exists for the user, run below code
  if(!snapShot.exists) { // If a document at the specified reference, i.e. with the UID as the document name, does NOT exist... I.e. if the user does not exist yet
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ // Create a document at this firebase Reference containing the object below...
        // Object containing user data
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
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