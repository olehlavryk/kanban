import React, { useState } from "react";
import { PanelHeader, Div } from "@vkontakte/vkui";

import PropTypes from "prop-types";
import DeskList from "../DeskList/DeskList";
import DeskCreate from "../DeskCreate/DeskCreate";

const Desks = () => {
  const [desks, setDesks] = useState([]);

  const handlerAddDesk = (desk) => setDesks([...desks, desk]);
  const handlerRemoveDesk = (deskId) => {
    setDesks(desks.filter(({ id }) => id !== deskId));
  };

  return (
    <>
      <PanelHeader>My Desks</PanelHeader>

      <Div>
        <DeskCreate onCreate={handlerAddDesk} />
      </Div>

      <DeskList
        desks={desks}
        onDelete={handlerRemoveDesk}
        onLoadDesks={setDesks}
      />
    </>
  );
};

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
};

export default Desks;
