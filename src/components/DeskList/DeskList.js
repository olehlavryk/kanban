import React, { useState, useEffect } from "react";
import { CardGrid } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import DeskItem from "./../DeskItem/DeskItem";

const DeskList = ({ desks, onDelete }) => {
  if (!desks.length) return null;

  return (
    <CardGrid>
      {desks.map(({ id, name }) => (
        <DeskItem key={id} {...{ id, onDelete }}>
          {name}
        </DeskItem>
      ))}
    </CardGrid>
  );
};

DeskList.propTypes = {
  desks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeskList;
