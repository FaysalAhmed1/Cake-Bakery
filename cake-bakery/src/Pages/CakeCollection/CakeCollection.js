import React, { useEffect, useState } from "react";
import Cake from "../Home/Cake/Cake";
import Navigation from "../Shared/Navigation/Navigation";

const CakeCollection = () => {
  const [cakes, setCakes] = useState([]);
  useEffect(() => {
    fetch("https://mighty-thicket-14562.herokuapp.com/cakes")
      .then((res) => res.json())
      .then((data) => setCakes(data));
  }, []);

  return (
    <>
      <Navigation></Navigation>
      <div className="cake-container">
        {cakes.map((cake) => (
          <Cake key={cake.space} cake={cake}></Cake>
        ))}
      </div>
    </>
  );
};

export default CakeCollection;
