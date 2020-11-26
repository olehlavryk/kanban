import React, { useEffect } from "react";
import { CardGrid, Div } from "@vkontakte/vkui";
import PropTypes from "prop-types";
import DeskItem from "../DeskItem/DeskItem";
import firebase from "firebase/app";

const DeskList = ({ desks, onDelete, onLoadDesks }) => {
  useEffect(() => {
    // todo move to API layer
    const db = firebase.firestore();
    db.collection("desks")
      .get()
      .then((querySnapshot) => {
        const desks = [];

        querySnapshot.forEach((desk) => {
          desks.push({
            id: desk.id,
            name: desk.data().name,
          });
        });

        onLoadDesks(desks);
      });
  }, []);

  if (!desks.length) {
    return <Div style={{ textAlign: "center" }}>There are no desks yet!</Div>;
  }

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
  onLoadDesks: PropTypes.func.isRequired,
};

export default DeskList;
