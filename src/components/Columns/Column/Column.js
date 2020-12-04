import React, { useContext } from "react";
import {
  CardGrid,
  Card,
  Header,
  Button,
  ActionSheet,
  ActionSheetItem,
  usePlatform,
  IOS,
} from "@vkontakte/vkui";
import Icon16MoreHorizontal from "@vkontakte/icons/dist/16/more_horizontal";
import PropTypes from "prop-types";
import Cards from "../../Cards/Cards/Cards";
import "./Column.css";
import { deleteColumn } from "src/api/actions/index";
import Context from "src/components/App/context";

const Column = ({ id, name }) => {
  const osname = usePlatform();
  const { handlerRemoveColumn, setPopout } = useContext(Context);

  const deleteItem = (event, id) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    deleteColumn(id)
      .then(() => handlerRemoveColumn(id))
      .catch(console.error);
  };

  const showColumnOptions = () => {
    setPopout(
      <ActionSheet onClose={() => setPopout(null)}>
        <ActionSheetItem
          autoclose
          mode="destructive"
          onClick={(e) => deleteItem(e, id)}
        >
          Remove Column
        </ActionSheetItem>
        {osname === IOS && (
          <ActionSheetItem autoclose mode="cancel">
            Cancel
          </ActionSheetItem>
        )}
      </ActionSheet>
    );
  };

  return (
    <>
      <CardGrid>
        <Card size="l" className="Column">
          <div className="Column__header">
            <Header mode="secondary">{name}</Header>

            {/* <Button mode="tertiary" size="l" onClick={(e) => deleteItem(e, id)}> */}
            <Button mode="tertiary" size="l" onClick={showColumnOptions}>
              <Icon16MoreHorizontal />
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
