import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyBh0ksi6wxwD0wxhr8XXXUopYnb2L-NmU4",
    authDomain: "profile-manager-7313e.firebaseapp.com",
    projectId: "profile-manager-7313e",
    storageBucket: "profile-manager-7313e.appspot.com",
    messagingSenderId: "1075978956658",
    appId: "1:1075978956658:web:79a0b757e5f40b2414f7eb"
});

export const firestoreDB = firebase.firestore();
export default firebase;
