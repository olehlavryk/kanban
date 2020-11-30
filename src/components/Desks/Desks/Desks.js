import React from "react";
import { PanelHeader, Div } from "@vkontakte/vkui";

import PropTypes from "prop-types";
import DeskList from "../DeskList/DeskList";
import DeskCreate from "../DeskCreate/DeskCreate";

const Desks = ({ onChangePanel, setDesks, addDesk, removeDesk, desks }) => {
  return (
    <>
      <PanelHeader>My Desks</PanelHeader>

      <Div>
        <DeskCreate onCreate={addDesk} />
      </Div>

      <DeskList
        desks={desks}
        onDelete={removeDesk}
        onLoadDesks={setDesks}
        onDeskClick={onChangePanel}
      />
    </>
  );
};

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
  setDesks: PropTypes.func.isRequired,
  desks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  addDesk: PropTypes.func.isRequired,
  removeDesk: PropTypes.func.isRequired,
};

export default Desks;
