import React, { useState } from "react";
import Icon16Add from "@vkontakte/icons/dist/16/add";
import { Button, Card, FormLayout, Input } from "@vkontakte/vkui";
import PropTypes from "prop-types";

const modes = {
  button: "button",
  form: "form",
};

const statuses = {
  default: "default",
  error: "error",
};

const CreateForm = ({ onSubmit, placeholder, actionTitle }) => {
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

  if (mode === modes.button) {
    return (
      <Button
        onClick={() => setMode(modes.form)}
        before={<Icon16Add />}
        size="xl"
      >
        {actionTitle}
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
          placeholder={placeholder}
          bottom={errorMsg}
        />
        <div style={{ display: "flex" }}>
          <Button size="l" stretched onClick={onSubmit}>
            {actionTitle}
          </Button>
          <Button size="l" stretched mode="outline" onClick={resetForm}>
            Cancel
          </Button>
        </div>
      </FormLayout>
    </Card>
  );
};

CreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  actionTitle: PropTypes.string.isRequired,
};

export default CreateForm;
