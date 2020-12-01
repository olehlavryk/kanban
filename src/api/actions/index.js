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
