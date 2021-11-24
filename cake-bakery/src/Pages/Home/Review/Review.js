import React from "react";
import { Card } from "react-bootstrap";

const Review = ({ review }) => {
  const { description, email } = review;
  return (
    <div className="container">
      <Card style={{}}>
        <Card.Body>
          <Card.Title>{description}</Card.Title>
          <p>-----------------------</p>
          <Card.Title> by: {email}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Review;
