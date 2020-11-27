import React from "react";
import { CardGrid, Card, Header, Div } from "@vkontakte/vkui";

import ColumnCard from "./../ColumnCard/ColumnCard";
import "./Column.css";

const Column = () => {
  return (
    <>
      <CardGrid>
        <Card size="l" className="Column">
          <Header mode="secondary">Column name</Header>
          <CardGrid>
            <ColumnCard>Hello I am card!</ColumnCard>
          </CardGrid>
        </Card>
      </CardGrid>
    </>
  );
};

export default Column;
