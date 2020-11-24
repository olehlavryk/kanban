import React, { useState } from "react";
import { View, Panel } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Desks from "./Desks/Desks";
import Columns from "./Columns/Columns";

const panel = {
  desks: "desks",
  columns: "columns",
};

const App = () => {
  const [activePanel, setActivePanel] = useState(panel.desks);

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
