import React from "react";
import PropTypes from "prop-types";
import { Card, Div, Button } from "@vkontakte/vkui";
import "./DeskItem.css";
import { deleteDesk } from "./../../../api/actions/index";

const DeskItem = ({ id, children, onDelete, onClick }) => {
  const deleteItem = (event, id) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    deleteDesk(id)
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
