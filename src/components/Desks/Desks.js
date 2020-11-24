import React from "react";
import { Button } from "@vkontakte/vkui";
import PropTypes from "prop-types";

const Desks = ({ onChangePanel }) => {
  return (
    <>
      <div>Hello, I'm panel with desks</div>
      <Button onClick={onChangePanel}>Go to columns</Button>
    </>
  );
};

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
};

export default Desks;
