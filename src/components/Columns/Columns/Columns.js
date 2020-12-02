import React, { useEffect } from "react";
import { PanelHeader, PanelHeaderBack, Gallery } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import Column from "./../Column/Column";
import ColumnCreate from "./../ColumnCreate/ColumnCreate";
import { getColumns } from "./../../../api/actions/index";

const Columns = ({
  goBack,
  setColumns,
  columns,
  removeColumn,
  AddColumn,
  desk,
}) => {
  useEffect(() => {
    getColumns(desk.id).then((columns) => setColumns(columns));
  }, [setColumns, desk.id]);

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
