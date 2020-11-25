import React from "react";
import { PanelHeader, Div } from "@vkontakte/vkui";

import PropTypes from "prop-types";
import DeskList from "./../DeskList/DeskList";
import DeskCreate from "../DeskCreate/DeskCreate";

const Desks = ({ onChangePanel }) => {
  return (
    <>
      <PanelHeader>My Desks</PanelHeader>

      <Div>
        <DeskCreate />
      </Div>

      <DeskList />
    </>
  );
};

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
};

export default Desks;
