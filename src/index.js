import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyASIPXHLdO955NMKJoqs5xujK9qyAjxaoI",
  authDomain: "canban-f5324.firebaseapp.com",
  databaseURL: "https://canban-f5324.firebaseio.com",
  projectId: "canban-f5324",
  storageBucket: "canban-f5324.appspot.com",
  messagingSenderId: "813359221555",
  appId: "1:813359221555:web:e6aa099a984394e1af0c46",
  measurementId: "G-F6PWM7VV1T",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Init VK  Mini App
// bridge.send("VKWebAppInit");

// const db = firebase.firestore();
// db.collection("desks")
//   .get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, doc.data());
//     });
//   });

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
