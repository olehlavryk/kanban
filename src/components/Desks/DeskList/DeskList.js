import React, { useEffect } from "react";
import { CardGrid, Spinner } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import DeskItem from "../DeskItem/DeskItem";
import { getDesks } from "./../../../api/actions/index";

const DeskList = ({ desks, onDelete, onLoadDesks, onDeskClick }) => {
  useEffect(() => {
    getDesks().then((desks) => onLoadDesks(desks));
  }, [onLoadDesks]);

  if (!desks.length) {
    return <Spinner size="medium" style={{ marginTop: 20 }} />;
  }

  return (
    <CardGrid>
      {desks.map(({ id, name }) => (
        <DeskItem
          key={id}
          {...{ id, onDelete }}
          onClick={() => onDeskClick(id)}
        >
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
  onLoadDesks: PropTypes.func.isRequired,
  onDeskClick: PropTypes.func.isRequired,
};

export default DeskList;
