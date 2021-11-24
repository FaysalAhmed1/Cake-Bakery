import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const CakeOrder = () => {
  const { cakeId } = useParams();
  const [cake, setCake] = useState({});

  useEffect(() => {
    fetch(`https://mighty-thicket-14562.herokuapp.com/cakes/${cakeId}`)
      .then((res) => res.json())
      .then((data) => setCake(data));
  }, []);
  return (
    <div>
      <h2> {cake.name}</h2>
      <h2>this is booking: {cakeId}</h2>
    </div>
  );
};

export default CakeOrder;
