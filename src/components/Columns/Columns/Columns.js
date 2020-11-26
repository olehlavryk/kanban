import React, { useEffect, useState } from "react";
import { PanelHeader, Spinner, Gallery } from "@vkontakte/vkui";
import firebase from "firebase/app";
import Column from "./../Column/Column";

const Columns = () => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    // todo move to API layer
    const db = firebase.firestore();

    db.collection("columns")
      .get()
      .then((querySnapshot) => {
        const columns = [];

        querySnapshot.forEach((desk) => {
          const { deskId, name } = desk.data();
          columns.push({
            id: desk.id,
            deskId,
            name,
          });
        });

        setColumns(columns);
      });
  }, []);

  if (!columns.length) {
    return (
      <>
        <PanelHeader>Desk name</PanelHeader>
        <Spinner size="medium" style={{ marginTop: 20 }} />
      </>
    );
  }

  return (
    <>
      <PanelHeader>Desk name</PanelHeader>

      <Gallery
        slideWidth="85%"
        align="left"
        style={{ height: "100%", marginTop: 20 }}
      >
        {columns.map(({ id }) => {
          return <Column key={id} />;
        })}
      </Gallery>
    </>
  );
};

export default Columns;
