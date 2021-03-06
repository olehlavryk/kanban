import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Card, Div, Button } from "@vkontakte/vkui";
import "./DeskItem.css";
import { deleteDesk } from "./../../../api/actions/index";
import Context from "src/components/App/context";

const DeskItem = ({ id, children }) => {
  const { goToColumns, handlerRemoveDesk } = useContext(Context);

  const deleteItem = (event, id) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    deleteDesk(id)
      .then(() => handlerRemoveDesk(id))
      .catch(console.error);
  };

  const goToColumnPanel = () => goToColumns(id);

  return (
    <Card size="l" onClick={goToColumnPanel}>
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
};

export default DeskItem;
