import React from "react";
import { Button } from "@vkontakte/vkui";
import PropTypes from "prop-types";

const Columns = ({ onChangePanel }) => {
  return (
    <>
      <div>Hello, I'm panel with columns</div>
      <Button onClick={onChangePanel}>Go to desks</Button>
    </>
  );
};

Columns.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
};

export default Columns;
