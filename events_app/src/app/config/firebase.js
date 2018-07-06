import firebase from 'firebase';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyC-5r8O1TA-MJeO_k02_7ryzjI-oRdy5jM',
  authDomain: 'eventsmanagement-95531.firebaseapp.com',
  databaseURL: 'https://eventsmanagement-95531.firebaseio.com',
  projectId: 'eventsmanagement-95531',
  storageBucket: 'eventsmanagement-95531.appspot.com',
  messagingSenderId: '101731016219',
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;
