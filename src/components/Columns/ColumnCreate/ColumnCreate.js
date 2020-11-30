import React from "react";
import firebase from "firebase/app";
import PropTypes from "prop-types";
import { Div } from "@vkontakte/vkui";
import CreateForm from "../../Form/CreateForm/CreateForm";

const ColumnCreate = ({ onCreate, deskId }) => {
  const handleCreateColumn = (name) => {
    // create new desk
    // TODO move to API layer
    const db = firebase.firestore();
    return db
      .collection("columns")
      .add({
        name,
        deskId,
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
    <Div style={{ boxSizing: "border-box" }}>
      <CreateForm
        onSubmit={handleCreateColumn}
        placeholder="Enter column name"
        actionTitle="Create column"
      />
    </Div>
  );
};

ColumnCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
  deskId: PropTypes.string.isRequired,
};

export default ColumnCreate;
