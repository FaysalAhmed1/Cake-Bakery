import React, { useEffect, useState } from "react";
import Cake from "../Cake/Cake";
import "./Cakes.css";
const Cakes = () => {
  const [cakes, setCakes] = useState([]);
  useEffect(() => {
    fetch("https://mighty-thicket-14562.herokuapp.com/cakes")
      .then((res) => res.json())
      .then((data) => setCakes(data));
  }, []);
  let cut = cakes.slice(0, 6);
  return (
    <div className="cake-container container mt-5 pt-5 pb-5 bg-info">
      {cut.map((cake) => (
        <Cake key={cake.space} cake={cake}></Cake>
      ))}
    </div>
  );
};

export default Cakes;
