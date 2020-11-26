import React from "react";
import { Group, CardGrid, Card, Header, Div } from "@vkontakte/vkui";

import "./Column.css";

const Column = () => {
  return (
    <>
      <CardGrid>
        <Card size="l" className="Column">
          <Header mode="secondary">Column name</Header>
          <CardGrid>
            <Card size="l" mode="outline">
              <Div>Card 1</Div>
            </Card>
            <Card size="l" mode="outline">
              <Div>Card 2</Div>
            </Card>
            <Card size="l" mode="outline">
              <Div>Card 2</Div>
            </Card>
          </CardGrid>
        </Card>
      </CardGrid>
    </>
  );
};

export default Column;
