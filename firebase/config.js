import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBuCMq-G3UyquAsV9zndxqcgPzAQng4eoo",
    authDomain: "memo-miaoplus.firebaseapp.com",
    projectId: "memo-miaoplus",
    storageBucket: "memo-miaoplus.appspot.com",
    messagingSenderId: "795370179971",
    appId: "1:795370179971:web:bcc296c82f177251b87ab6"
  };

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }