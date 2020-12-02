import firebase from "firebase/app";

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
