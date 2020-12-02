import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import * as backend from "./api/actions/index";

// Backend Init
backend.initialize();

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
