import React, { useEffect, useState } from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Cake from "../Cake/Cake";
import Footer from "../Footer/Footer";

const MoreOvens = () => {
  const [cakes, setCakes] = useState([]);
  useEffect(() => {
    fetch("https://mighty-thicket-14562.herokuapp.com/cakes")
      .then((res) => res.json())
      .then((data) => setCakes(data));
  }, []);
  let cut = cakes.slice(0, 99);
  return (
    <>
      <Navigation></Navigation>
      <div className="cake-container container mt-5 pt-5 pb-5 bg-info">
        {cut.map((cake) => (
          <Cake key={cake.space} cake={cake}></Cake>
        ))}
      </div>

      <Footer></Footer>
    </>
  );
};

export default MoreOvens;
