import React from "react";
import PropTypes from "prop-types";
import CreateForm from "../../../Form/CreateForm/CreateForm";
import { cardCreate } from "src/api/actions/index";

const CardCreate = ({ onCreate, style, columnId }) => {
  const createItem = (name) => {
    return cardCreate(name, columnId)
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
