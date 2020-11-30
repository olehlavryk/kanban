import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import Card from "./../Card/Card";
import PropTypes from "prop-types";
import CardCreate from "./CardCreate/CardCreate";

const Cards = ({ columnId }) => {
  const [cards, setCards] = useState([]);
  const handlerAddCard = (card) => setCards([...cards, card]);
  const handlerRemoveCard = (cardId) => {
    setCards(cards.filter(({ id }) => id !== cardId));
  };

  useEffect(() => {
    // todo move to API layer
    const db = firebase.firestore();

    db.collection("cards")
      .where("columnId", "==", columnId)
      .get()
      .then((querySnapshot) => {
        const cards = [];

        querySnapshot.forEach((desk) => {
          const { columnId, name } = desk.data();
          cards.push({
            id: desk.id,
            columnId,
            name,
          });
        });

        setCards(cards);
      });
  }, [columnId]);

  return (
    <>
      {cards.map(({ id, name }) => (
        <Card key={id} id={id} onDelete={handlerRemoveCard}>
          {name}
        </Card>
      ))}

      <CardCreate
        columnId={columnId}
        style={{ marginTop: 10, display: "inline-block" }}
        onCreate={handlerAddCard}
      />
    </>
  );
};

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default Cards;
