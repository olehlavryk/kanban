import React from "react";
import PropTypes from "prop-types";
import { Card, Div, Button } from "@vkontakte/vkui";
import "./DeskItem.css";
import firebase from "firebase/app";

const DeskItem = ({ id, children, onDelete, onClick }) => {
  const deleteItem = (event, id) => {
    if (event) {
      event.preventDefault();
    }

    // todo move removing to API layer
    const db = firebase.firestore();

    db.collection("desks")
      .doc(id)
      .delete()
      .then(() => onDelete(id))
      .catch(console.error);
  };

  return (
    <Card size="l" onClick={onClick}>
      <Div className="DeskItem">
        {children}
        <Button mode="tertiary" size="l" onClick={(e) => deleteItem(e, id)}>
          x
        </Button>
      </Div>
    </Card>
  );
};

DeskItem.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  onDelete: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DeskItem;
