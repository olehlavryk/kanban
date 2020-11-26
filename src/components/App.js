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
  const [activePanel, setActivePanel] = useState(panel.columns);

  return (
    <View activePanel={activePanel}>
      <Panel id={panel.desks}>
        <Desks
          onChangePanel={() => {
            setActivePanel(panel.columns);
          }}
        />
      </Panel>
      <Panel id={panel.columns}>
        <Columns
          onChangePanel={() => {
            setActivePanel(panel.desks);
          }}
        />
      </Panel>
    </View>
  );
};

export default App;
