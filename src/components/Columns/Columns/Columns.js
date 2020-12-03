import React, { useEffect, useContext } from "react";
import { PanelHeader, PanelHeaderBack, Gallery } from "@vkontakte/vkui";
import Column from "./../Column/Column";
import ColumnCreate from "./../ColumnCreate/ColumnCreate";
import { getColumns } from "./../../../api/actions/index";
import Context from "src/components/App/context";
import "./Columns.css";

const Columns = () => {
  const { goToDesks, setColumns, columns, activeDesk } = useContext(Context);

  useEffect(() => {
    getColumns(activeDesk.id).then((columns) => setColumns(columns));
  }, [setColumns, activeDesk.id]);

  return (
    <>
      <PanelHeader left={<PanelHeaderBack onClick={goToDesks} />}>
        {activeDesk.name}
      </PanelHeader>

      <Gallery slideWidth="100%" align="left" className="Columns__list">
        {columns.map(({ id, name }) => {
          return <Column key={id} name={name} id={id} />;
        })}
        <ColumnCreate />
      </Gallery>
    </>
  );
};

export default Columns;
