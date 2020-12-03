import React, { useContext } from "react";
import { Card as Ticket, Div, Button } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import { deleteCard } from "src/api/actions/index";
import "./Card.css";
import Context from "src/components/App/context";

const Card = ({ children, id }) => {
  const { handlerRemoveCard } = useContext(Context);

  const deleteItem = (event, id) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    deleteCard(id)
      .then(() => handlerRemoveCard(id))
      .catch(console.error);
  };

  return (
    <Ticket size="l" mode="outline" className="ColumnCard">
      <div className="ColumnCard__wrapper">
        <Div>{children}</Div>
        <Button mode="tertiary" size="l" onClick={(e) => deleteItem(e, id)}>
          x
        </Button>
      </div>
    </Ticket>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
