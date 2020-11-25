import React, { useState } from "react";
import Icon16Add from "@vkontakte/icons/dist/16/add";
import { Button, Card, FormLayout, Input } from "@vkontakte/vkui";

const modes = {
  button: "button",
  form: "form",
};

const statuses = {
  default: "default",
  error: "error",
};

const DeskCreate = () => {
  const [mode, setMode] = useState(modes.button);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(statuses.default);
  const [errorMsg, setErrorMsg] = useState("");

  const resetForm = () => {
    setStatus(statuses.default);
    setErrorMsg("");
    setName("");
    setMode(modes.button);
  };

  const handleCreateDesk = (event) => {
    if (event) {
      event.preventDefault();
    }

    if (!name.trim().length) {
      setStatus(statuses.error);
      setErrorMsg("Desk name is not valid!");
      return;
    }

    // create new Desk
    console.log("create new Desk");

    resetForm();
  };

  if (mode === modes.button) {
    return (
      <Button
        onClick={() => setMode(modes.form)}
        before={<Icon16Add />}
        size="xl"
      >
        Create Desk
      </Button>
    );
  }

  return (
    <Card size="l" mode="shadow">
      <FormLayout onSubmit={handleCreateDesk}>
        <Input
          autoFocus
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          status={status}
          placeholder="Enter desk name"
          bottom={errorMsg}
        />
        <div style={{ display: "flex" }}>
          <Button size="l" stretched onClick={handleCreateDesk}>
            Create Desk
          </Button>
          <Button size="l" stretched mode="outline" onClick={resetForm}>
            Cancel
          </Button>
        </div>
      </FormLayout>
    </Card>
  );
};

export default DeskCreate;
