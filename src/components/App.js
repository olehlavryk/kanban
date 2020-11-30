import React, { useState } from "react";
import { View, Panel } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Desks from "./Desks/Desks/Desks";
import Columns from "./Columns/Columns/Columns";

const panel = {
  desks: "desks",
  columns: "columns",
};

const App = () => {
  const [activePanel, setActivePanel] = useState(panel.desks);
  const [activeDesk, setActiveDesk] = useState(null);

  const goToColumns = (deskId) => {
    setActiveDesk(desks.find(({ id }) => id === deskId));
    setActivePanel(panel.columns);
  };
  const goToDesks = () => setActivePanel(panel.desks);

  // desks
  const [desks, setDesks] = useState([]);

  const handlerAddDesk = (desk) => setDesks([...desks, desk]);
  const handlerRemoveDesk = (deskId) => {
    setDesks(desks.filter(({ id }) => id !== deskId));
  };

  // columns
  const [columns, setColumns] = useState([]);

  const handlerAddColumn = (column) => setColumns([...columns, column]);
  const handlerRemoveColumn = (columnId) => {
    setColumns(columns.filter(({ id }) => id !== columnId));
  };

  return (
    <View activePanel={activePanel}>
      <Panel id={panel.desks}>
        <Desks
          onChangePanel={goToColumns}
          setDesks={setDesks}
          addDesk={handlerAddDesk}
          removeDesk={handlerRemoveDesk}
          desks={desks}
        />
      </Panel>
      <Panel id={panel.columns}>
        {activeDesk && (
          <Columns
            desk={activeDesk}
            goBack={goToDesks}
            AddColumn={handlerAddColumn}
            columns={columns}
            removeColumn={handlerRemoveColumn}
            setColumns={setColumns}
          />
        )}
      </Panel>
    </View>
  );
};

export default App;
