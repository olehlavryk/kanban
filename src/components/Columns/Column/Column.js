import React, { useContext } from "react";
import { CardGrid, Card, Header, Button } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import Cards from "../../Cards/Cards/Cards";
import "./Column.css";
import { deleteColumn } from "src/api/actions/index";
import Context from "src/components/App/context";

const Column = ({ id, name }) => {
  const { handlerRemoveColumn } = useContext(Context);

  const deleteItem = (event, id) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    deleteColumn(id)
      .then(() => handlerRemoveColumn(id))
      .catch(console.error);
  };

  return (
    <>
      <CardGrid>
        <Card size="l" className="Column">
          <div className="Column__header">
            <Header mode="secondary">{name}</Header>
            <Button mode="tertiary" size="l" onClick={(e) => deleteItem(e, id)}>
              x
            </Button>
          </div>

          <CardGrid>
            <Cards columnId={id} />
          </CardGrid>
        </Card>
      </CardGrid>
    </>
  );
};

Column.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Column;
