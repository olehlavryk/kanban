import React, { useContext } from "react";
import { Div } from "@vkontakte/vkui";
import CreateForm from "../../Form/CreateForm/CreateForm";
import { createColumn } from "src/api/actions/index";
import Context from "src/components/App/context";

const ColumnCreate = () => {
  const { handlerAddColumn, activeDesk } = useContext(Context);

  const createItem = (name) => {
    return createColumn(name, activeDesk.id)
      .then((doc) => {
        handlerAddColumn({
          id: doc.id,
          ...doc.data(),
        });
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <Div style={{ boxSizing: "border-box" }}>
      <CreateForm
        onSubmit={createItem}
        placeholder="Enter column name"
        actionTitle="Create column"
      />
    </Div>
  );
};

export default ColumnCreate;
