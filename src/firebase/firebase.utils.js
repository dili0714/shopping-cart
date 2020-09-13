import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyApPdIAgUBnSF-gZR2CtAK1HLGgSAZgNec",
    authDomain: "dileep-app-29e32.firebaseapp.com",
    databaseURL: "https://dileep-app-29e32.firebaseio.com",
    projectId: "dileep-app-29e32",
    storageBucket: "dileep-app-29e32.appspot.com",
    messagingSenderId: "267920691567",
    appId: "1:267920691567:web:5649a0109db47af93a589a",
    measurementId: "G-SRPV0YHW9E"
};

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
  if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`); 
   const snapShot = await userRef.get();

  if(!snapShot.exists) {
      const { displayName,email } = userAuth;
      const createdAt =new Date();

      try {
          await userRef.set ({
              displayName,
              email,
              createdAt,
              ...additionalData
          })
      } catch (error) {
          console.log('error creating user',error.message);
      }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
