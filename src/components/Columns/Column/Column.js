import React from "react";
import { CardGrid, Card, Header } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import ColumnCard from "./../ColumnCard/ColumnCard";
import "./Column.css";

const Column = ({ name }) => {
  return (
    <>
      <CardGrid>
        <Card size="l" className="Column">
          <Header mode="secondary">{name}</Header>
          <CardGrid>
            <ColumnCard>Hello I am card!</ColumnCard>
          </CardGrid>
        </Card>
      </CardGrid>
    </>
  );
};

Column.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Column;
