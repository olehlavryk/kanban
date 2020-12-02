import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

export const initialize = () => {
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
};

export const deskCreate = (name) => {
  // create new desk
  const db = firebase.firestore();
  return db
    .collection("desks")
    .add({
      name,
    })
    .then((docRef) => docRef.get());
};

export const getDesks = () => {
  const db = firebase.firestore();

  return db
    .collection("desks")
    .get()
    .then((querySnapshot) => {
      const desks = [];

      querySnapshot.forEach((desk) => {
        desks.push({
          id: desk.id,
          name: desk.data().name,
        });
      });

      return desks;
    });
};

export const deleteDesk = (id) => {
  const db = firebase.firestore();

  return db.collection("desks").doc(id).delete();
};

export const getColumns = (deskId) => {
  const db = firebase.firestore();

  return db
    .collection("columns")
    .where("deskId", "==", deskId)
    .get()
    .then((querySnapshot) => {
      const columns = [];

      querySnapshot.forEach((desk) => {
        const { deskId, name } = desk.data();
        columns.push({
          id: desk.id,
          deskId,
          name,
        });
      });

      return columns;
    });
};

export const createColumn = (name, deskId) => {
  const db = firebase.firestore();

  return db
    .collection("columns")
    .add({
      name,
      deskId,
    })
    .then((docRef) => docRef.get());
};

export const deleteColumn = (id) => {
  const db = firebase.firestore();

  return db.collection("columns").doc(id).delete();
};

export const getCards = (columnId) => {
  const db = firebase.firestore();

  return db
    .collection("cards")
    .where("columnId", "==", columnId)
    .get()
    .then((querySnapshot) => {
      const cards = [];

      querySnapshot.forEach((desk) => {
        const { columnId, name } = desk.data();
        cards.push({
          id: desk.id,
          columnId,
          name,
        });
      });

      return cards;
    });
};

export const deleteCard = (id) => {
  const db = firebase.firestore();

  return db.collection("cards").doc(id).delete();
};

export const cardCreate = (name, columnId) => {
  const db = firebase.firestore();

  return db
    .collection("cards")
    .add({
      name,
      columnId,
    })
    .then((docRef) => docRef.get());
};
