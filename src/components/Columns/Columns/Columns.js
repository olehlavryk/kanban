import React, { useEffect } from "react";
import { PanelHeader, PanelHeaderBack, Gallery } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import firebase from "firebase/app";
import Column from "./../Column/Column";
import ColumnCreate from "./../ColumnCreate/ColumnCreate";

const Columns = ({
  goBack,
  setColumns,
  columns,
  removeColumn,
  AddColumn,
  desk,
}) => {
  useEffect(() => {
    // todo move to API layer
    const db = firebase.firestore();

    db.collection("columns")
      .where("deskId", "==", desk.id)
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
  }, [setColumns, desk.id]);

  // todo case loading
  // todo case if Columns none

  return (
    <>
      <PanelHeader left={<PanelHeaderBack onClick={goBack} />}>
        {desk.name}
      </PanelHeader>

      <Gallery
        slideWidth="100%"
        align="left"
        style={{ height: "100%", marginTop: 20 }}
      >
        {columns.map(({ id, name }) => {
          return (
            <Column key={id} name={name} id={id} onDelete={removeColumn} />
          );
        })}
        {/* Column for creating */}
        <ColumnCreate onCreate={AddColumn} deskId={desk.id} />
      </Gallery>
    </>
  );
};

Columns.propTypes = {
  goBack: PropTypes.func.isRequired,
  setColumns: PropTypes.func.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      deskId: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeColumn: PropTypes.func.isRequired,
  AddColumn: PropTypes.func.isRequired,
  desk: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default Columns;
