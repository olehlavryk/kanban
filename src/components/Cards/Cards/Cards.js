import React, { useEffect, useState } from "react";
import Card from "./../Card/Card";
import PropTypes from "prop-types";
import CardCreate from "./CardCreate/CardCreate";
import { getCards } from "src/api/actions";

const Cards = ({ columnId }) => {
  const [cards, setCards] = useState([]);
  const handlerAddCard = (card) => setCards([...cards, card]);
  const handlerRemoveCard = (cardId) => {
    setCards(cards.filter(({ id }) => id !== cardId));
  };

  useEffect(() => {
    getCards(columnId).then((cards) => setCards(cards));
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
