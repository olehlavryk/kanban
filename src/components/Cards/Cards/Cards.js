import React, { useEffect, useContext } from "react";
import Card from "./../Card/Card";
import PropTypes from "prop-types";
import CardCreate from "./CardCreate/CardCreate";
import { getCards } from "src/api/actions";
import Context from "src/components/App/context";

const Cards = ({ columnId }) => {
  const { cards, setCards } = useContext(Context);

  useEffect(() => {
    getCards(columnId).then((cards) => setCards(cards));
  }, [columnId]);

  return (
    <>
      {cards.map(({ id, name }) => (
        <Card key={id} id={id}>
          {name}
        </Card>
      ))}

      <CardCreate
        columnId={columnId}
        style={{ marginTop: 10, display: "inline-block" }}
      />
    </>
  );
};

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default Cards;
