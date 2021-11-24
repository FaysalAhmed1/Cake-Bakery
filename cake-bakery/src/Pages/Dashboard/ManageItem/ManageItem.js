import React, { useEffect, useState } from "react";

const ManageItem = () => {
  const [cakes, setCakes] = useState([]);
  useEffect(() => {
    fetch("https://mighty-thicket-14562.herokuapp.com/cakes")
      .then((res) => res.json())
      .then((data) => setCakes(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you Sure to delete the Oven ?");

    if (proceed) {
      const url = `https://mighty-thicket-14562.herokuapp.com/cakes/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Order was Removed");
            const remaining = cakes.filter((cake) => cake._id !== id);
            setCakes(remaining);
          }
        });
    }
  };
  return (
    <div className={"bg-info"}>
      {cakes.map((cake) => (
        <div key={cake._id}>
          <h3> {cake.name} </h3>
          <img
            style={{ width: "300px", height: "250px" }}
            src={cake.img}
            alt=""
            srcset=""
          />
          <button
            style={{ margin: "30px" }}
            className={"btn btn-danger"}
            onClick={() => handleDelete(cake._id)}
          >
            {" "}
            delete{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageItem;
