import React from "react";
import { View, Panel } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Desks from "../Desks/Desks/Desks";
import Columns from "../Columns/Columns/Columns";
import { panel } from "src/components/App/constants";
import Context from "src/components/App/context";
import { useAppState } from "src/components/App/hooks";

const App = () => {
  const state = useAppState();

  return (
    <Context.Provider value={state}>
      <View activePanel={state.activePanel}>
        <Panel id={panel.desks}>
          <Desks />
        </Panel>
        <Panel id={panel.columns}>{state.activeDesk && <Columns />}</Panel>
      </View>
    </Context.Provider>
  );
};

export default App;
