import React from "react";
import PropTypes from "prop-types";
import { Card, Div } from "@vkontakte/vkui";

const DeskItem = ({ children }) => {
  return (
    <Card size="l">
      <Div>{children}</Div>
    </Card>
  );
};

DeskItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default DeskItem;
