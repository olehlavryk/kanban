import React, { useContext } from "react";
import PropTypes from "prop-types";
import CreateForm from "../../../Form/CreateForm/CreateForm";
import { cardCreate } from "src/api/actions/index";
import Context from "src/components/App/context";

const CardCreate = ({ style, columnId }) => {
  const { handlerAddCard } = useContext(Context);

  const createItem = (name) => {
    return cardCreate(name, columnId)
      .then((doc) => {
        return handlerAddCard({
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
  style: PropTypes.object,
  columnId: PropTypes.string.isRequired,
};

export default CardCreate;
