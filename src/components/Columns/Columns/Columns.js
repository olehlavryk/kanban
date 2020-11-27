import React, { useEffect, useState } from "react";
import { PanelHeader, Spinner, Gallery } from "@vkontakte/vkui";
import firebase from "firebase/app";
import Column from "./../Column/Column";
import ColumnCreate from "./../ColumnCreate/ColumnCreate";

const Columns = () => {
  const [columns, setColumns] = useState([]);

  const handlerAddColumn = (column) => setColumns([...columns, column]);

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
        slideWidth="100%"
        align="left"
        style={{ height: "100%", marginTop: 20 }}
      >
        {columns.map(({ id, name }) => {
          return <Column key={id} {...{ name }} />;
        })}
        {/* Column for creating */}
        <ColumnCreate onCreate={handlerAddColumn} />
      </Gallery>
    </>
  );
};

export default Columns;
