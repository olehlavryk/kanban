import React, { useState } from "react";
import firebase from "firebase/app";
import PropTypes from "prop-types";
import CreateForm from "./../../Form/CreateForm/CreateForm";

const DeskCreate = ({ onCreate }) => {
  const [name, setName] = useState("");

  const handleCreateDesk = (name) => {
    // create new desk
    // TODO move to API layer
    const db = firebase.firestore();
    return db
      .collection("desks")
      .add({
        name,
      })
      .then((docRef) => docRef.get())
      .then((doc) => {
        return onCreate({
          id: doc.id,
          ...doc.data(),
        });
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <CreateForm
      onSubmit={handleCreateDesk}
      placeholder="Enter name of desk"
      actionTitle="Create Desk"
    />
  );
};

DeskCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default DeskCreate;
