import React from "react";
import { PanelHeader, Div } from "@vkontakte/vkui";
import DeskList from "../DeskList/DeskList";
import DeskCreate from "../DeskCreate/DeskCreate";

const Desks = () => {
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

export default Desks;
