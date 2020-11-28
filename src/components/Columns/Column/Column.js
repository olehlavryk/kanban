import React from "react";
import { CardGrid, Card, Header, Button } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import firebase from "firebase/app";
import Cards from "../../Cards/Cards/Cards";
import "./Column.css";

const Column = ({ id, name, onDelete }) => {
  const deleteColumn = (event, id) => {
    if (event) event.preventDefault();

    // todo move removing to API layer
    const db = firebase.firestore();

    db.collection("columns")
      .doc(id)
      .delete()
      .then(() => onDelete(id))
      .catch(console.error);
  };

  return (
    <>
      <CardGrid>
        <Card size="l" className="Column">
          <div className="Column__header">
            <Header mode="secondary">{name}</Header>
            <Button
              mode="tertiary"
              size="l"
              onClick={(e) => deleteColumn(e, id)}
            >
              x
            </Button>
          </div>

          <CardGrid>
            <Cards />
          </CardGrid>
        </Card>
      </CardGrid>
    </>
  );
};

Column.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Column;
