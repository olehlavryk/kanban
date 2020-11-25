import React, { useState, useEffect } from "react";
import { CardGrid } from "@vkontakte/vkui";
import DeskItem from "./../DeskItem/DeskItem";
import firebase from "firebase/app";

const DeskList = () => {
  const [desks, setDesks] = useState([]);

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

        setDesks(desks);
      });
  }, []);

  if (!desks.length) return null;

  return (
    <CardGrid>
      {desks.map((desk) => (
        <DeskItem key={desk.name}>{desk.name}</DeskItem>
      ))}
    </CardGrid>
  );
};

export default DeskList;
