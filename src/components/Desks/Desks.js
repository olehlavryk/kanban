import React, { useState, useEffect } from "react";
import { PanelHeader, Div } from "@vkontakte/vkui";
import firebase from "firebase/app";
import PropTypes from "prop-types";
import DeskList from "./../DeskList/DeskList";
import DeskCreate from "../DeskCreate/DeskCreate";

const Desks = () => {
  const [desks, setDesks] = useState([]);

  useEffect(() => {
    // todo move to API layer
    const db = firebase.firestore();
    db.collection("desks")
      .get()
      .then((querySnapshot) => {
        const desks = [];

        querySnapshot.forEach((desk) => {
          desks.push({
            id: desk.id,
            name: desk.data().name,
          });
        });

        setDesks(desks);
      });
  }, []);

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

      <DeskList desks={desks} onDelete={handlerRemoveDesk} />
    </>
  );
};

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
};

export default Desks;
