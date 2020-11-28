import React, { useEffect, useState } from "react";
import { CardGrid } from "@vkontakte/vkui";
import firebase from "firebase/app";
import ColumnCard from "./../Columns/ColumnCard/ColumnCard";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // todo move to API layer
    const db = firebase.firestore();

    db.collection("cards")
      .get()
      .then((querySnapshot) => {
        const cards = [];

        querySnapshot.forEach((desk) => {
          const { deskId, name } = desk.data();
          cards.push({
            id: desk.id,
            deskId,
            name,
          });
        });

        setCards(cards);
      });
  }, []);

  return (
    <CardGrid>
      {cards.map(({ id, name }) => (
        <ColumnCard key={id} id={id}>
          {name}
        </ColumnCard>
      ))}
    </CardGrid>
  );
};

export default Cards;
