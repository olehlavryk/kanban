import React from "react";
import PropTypes from "prop-types";
import CreateForm from "../../Form/CreateForm/CreateForm";
import { deskCreate } from "src/api/actions/index";

const DeskCreate = ({ onCreate }) => {
  const createItem = (name) => {
    deskCreate(name)
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
      onSubmit={createItem}
      placeholder="Enter name of desk"
      actionTitle="Create Desk"
    />
  );
};

DeskCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default DeskCreate;
