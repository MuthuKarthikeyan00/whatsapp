import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu-pjsHA0CcWaPCr3DerXCqcnCT6wQr1o",
  authDomain: "phonewhatsapp-a5638.firebaseapp.com",
  projectId: "phonewhatsapp-a5638",
  storageBucket: "phonewhatsapp-a5638.appspot.com",
  messagingSenderId: "904896876644",
  appId: "1:904896876644:web:011d7f2ed7f5fb834dcf71",
  measurementId: "G-REV889XXYQ"
};

 
  const firebaseApp = firebase.initializeApp(firebaseConfig) ;
  const firestoreage=firebase.storage();
  const db =firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new  firebase.auth.GoogleAuthProvider();
  const timestamps=firebase.firestore.FieldValue.serverTimestamp;
  
  export {auth,provider,timestamps,firestoreage};
  export default db;