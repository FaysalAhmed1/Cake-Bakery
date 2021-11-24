import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cake = ({ cake }) => {
  const { _id, name, description, time, img } = cake;
  return (
    <div className="container">
      <Card style={{}}>
        <Card.Img variant="top" style={{ height: "250px" }} src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>

          <Link to={`/cakeCollection/${_id}`}>
            <button className="btn btn-info"> Order This Oven </button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cake;
