import React from "react";
import PropTypes from "prop-types";
import { Div } from "@vkontakte/vkui";
import CreateForm from "../../Form/CreateForm/CreateForm";
import { createColumn } from "src/api/actions/index";

const ColumnCreate = ({ onCreate, deskId }) => {
  const createItem = (name) => {
    return createColumn(name, deskId)
      .then((doc) => {
        onCreate({
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
        onSubmit={createItem}
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
