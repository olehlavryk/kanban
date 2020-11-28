import React from "react";
import { Card, Div, Button } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import firebase from "firebase/app";
import "./ColumnCard.css";

const ColumnCard = ({ children, id, onDelete }) => {
  const deleteCard = (event, id) => {
    if (event) event.preventDefault();

    // todo move removing to API layer
    const db = firebase.firestore();

    db.collection("cards")
      .doc(id)
      .delete()
      .then(() => onDelete(id))
      .catch(console.error);
  };

  return (
    <Card size="l" mode="outline" className="ColumnCard">
      <div className="ColumnCard__wrapper">
        <Div>{children}</Div>
        <Button mode="tertiary" size="l" onClick={(e) => deleteCard(e, id)}>
          x
        </Button>
      </div>
    </Card>
  );
};

ColumnCard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ColumnCard;
