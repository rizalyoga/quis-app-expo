import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLUSpQ154TP84G-RhE-siMoEIRZbN-E9M",
  authDomain: "quis-app-expo.firebaseapp.com",
  projectId: "quis-app-expo",
  storageBucket: "quis-app-expo.appspot.com",
  messagingSenderId: "673280435040",
  appId: "1:673280435040:web:a51b5e88385b853806b405",
  measurementId: "G-J0KKXP3NCX",
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
