import * as firebase from 'firebase';

//Initialize firebaseio
const firebaseConfig = {
  apiKey: "AIzaSyCwZNFgSb4XL1BS1c3WrVRs8vOl4KcYYqg",
  authDomain: "transform-ceeef.firebaseapp.com",
  databaseURL: "https://transform-ceeef.firebaseio.com",
  projectId: "transform-ceeef",
  storageBucket: "transform-ceeef.appspot.com",
  messagingSenderId: "751834135267",
  appId: "1:751834135267:web:0247ba977874083ca863d6",
  measurementId: "G-9FSXEY6WCQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();
