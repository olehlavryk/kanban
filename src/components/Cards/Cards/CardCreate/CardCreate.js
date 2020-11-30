import React from "react";
import firebase from "firebase/app";
import PropTypes from "prop-types";
import CreateForm from "../../../Form/CreateForm/CreateForm";

const CardCreate = ({ onCreate, style, columnId }) => {
  const handleCreateDesk = (name) => {
    // create new desk
    // TODO move to API layer
    const db = firebase.firestore();
    return db
      .collection("cards")
      .add({
        name,
        columnId,
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
      placeholder="Enter card name"
      actionTitle="Create Card"
      style={style}
    />
  );
};

CardCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
  style: PropTypes.object,
  columnId: PropTypes.string.isRequired,
};

export default CardCreate;
