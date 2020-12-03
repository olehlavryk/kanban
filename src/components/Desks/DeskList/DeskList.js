import React, { useEffect, useContext } from "react";
import { CardGrid, Spinner } from "@vkontakte/vkui";
import DeskItem from "../DeskItem/DeskItem";
import { getDesks } from "./../../../api/actions/index";
import Context from "src/components/App/context";

const DeskList = () => {
  const { setDesks, desks } = useContext(Context);
  const state = useContext(Context);

  console.log(state);

  useEffect(() => {
    getDesks().then((desks) => setDesks(desks));
  }, [setDesks]);

  if (!desks.length) {
    return <Spinner size="medium" style={{ marginTop: 20 }} />;
  }

  return (
    <CardGrid>
      {desks.map(({ id, name }) => (
        <DeskItem key={id} {...{ id }}>
          {name}
        </DeskItem>
      ))}
    </CardGrid>
  );
};

export default DeskList;
