import React from "react";
import firebase from "firebase/app";
import PropTypes from "prop-types";
import CreateForm from "./../../Form/CreateForm/CreateForm";
import { deskCreate } from "./../../../api/actions/index";

const DeskCreate = ({ onCreate }) => {
  const handleCreateDesk = (name) => {
    return deskCreate(name)
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
      placeholder="Enter desk name"
      actionTitle="Create Desk"
    />
  );
};

DeskCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default DeskCreate;
