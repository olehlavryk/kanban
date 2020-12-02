import React from "react";
import { Card as Ticket, Div, Button } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import { deleteCard } from "src/api/actions/index";
import "./Card.css";

const Card = ({ children, id, onDelete }) => {
  const deleteItem = (event, id) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    deleteCard(id)
      .then(() => onDelete(id))
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
  onDelete: PropTypes.func.isRequired,
};

export default Card;
