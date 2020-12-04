import React from "react";
import { View, Panel } from "@vkontakte/vkui";
import { useAppState } from "src/components/App/hooks";
import "@vkontakte/vkui/dist/vkui.css";
import Desks from "../Desks/Desks/Desks";
import Columns from "../Columns/Columns/Columns";
import { panel } from "src/components/App/constants";
import Context from "src/components/App/context";
import ErrorBoundary from "src/components/ErrorBoundary/ErrorBoundary";

const App = () => {
  const state = useAppState();

  return (
    <ErrorBoundary>
      <Context.Provider value={state}>
        <View activePanel={state.activePanel} popout={state.popout}>
          <Panel id={panel.desks}>
            <Desks />
          </Panel>
          <Panel id={panel.columns}>{state.activeDesk && <Columns />}</Panel>
        </View>
      </Context.Provider>
    </ErrorBoundary>
  );
};

export default App;
