import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import Card from "./Card/Card";

const Cards = () => {
  const [cards, setCards] = useState([]);

  const handlerRemoveCard = (cardId) => {
    setCards(cards.filter(({ id }) => id !== cardId));
  };

  useEffect(() => {
    // todo move to API layer
    const db = firebase.firestore();

    db.collection("cards")
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
  }, []);

  return (
    <>
      {cards.map(({ id, name }) => (
        <Card key={id} id={id} onDelete={handlerRemoveCard}>
          {name}
        </Card>
      ))}
    </>
  );
};

export default Cards;
