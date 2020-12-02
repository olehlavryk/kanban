import { useState } from "react";
import { panel } from "src/components/App/constants";

const useNavState = (desks) => {
  const [activePanel, setActivePanel] = useState(panel.desks);
  const [activeDesk, setActiveDesk] = useState(null);

  const goToColumns = (deskId) => {
    setActiveDesk(desks.find(({ id }) => id === deskId));
    setActivePanel(panel.columns);
  };
  const goToDesks = () => setActivePanel(panel.desks);

  return { activePanel, activeDesk, goToColumns, goToDesks };
};

const useDesksState = () => {
  const [desks, setDesks] = useState([]);

  const handlerAddDesk = (desk) => setDesks([...desks, desk]);
  const handlerRemoveDesk = (deskId) => {
    setDesks(desks.filter(({ id }) => id !== deskId));
  };

  return { desks, handlerAddDesk, handlerRemoveDesk, setDesks };
};

const useColumnsState = () => {
  const [columns, setColumns] = useState([]);

  const handlerAddColumn = (column) => setColumns([...columns, column]);
  const handlerRemoveColumn = (columnId) => {
    setColumns(columns.filter(({ id }) => id !== columnId));
  };

  return { columns, handlerAddColumn, handlerRemoveColumn, setColumns };
};

export const useAppState = () => {
  // Desks
  const desksState = useDesksState();

  // Columns
  const columnsState = useColumnsState();

  // Nav
  const navState = useNavState(desksState.desks);

  return {
    ...desksState,
    ...columnsState,
    ...navState,
  };
};