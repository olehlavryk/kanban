import React, { useContext } from "react";
import CreateForm from "./../../Form/CreateForm/CreateForm";
import { deskCreate } from "./../../../api/actions/index";
import Context from "src/components/App/context";

const DeskCreate = () => {
  const { addDesk } = useContext(Context);

  const handleCreateDesk = (name) => {
    return deskCreate(name)
      .then((doc) => {
        return addDesk({
          id: doc.id,
          ...doc.data(),
        });
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <CreateForm
      onSubmit={handleCreateDesk}
      placeholder="Enter desk name"
      actionTitle="Create Desk"
    />
  );
};

export default DeskCreate;
