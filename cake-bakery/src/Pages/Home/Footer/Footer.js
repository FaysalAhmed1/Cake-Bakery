import React from "react";
import { Card } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Card className="text-center text-white bg-dark">
        <Card.Header> Our Operation Started from 2012 </Card.Header>
        <Card.Body>
          <Card.Title>
            {" "}
            Our Motto is to Provide The Best Quality Ovens to Our Customers{" "}
          </Card.Title>
          <Card.Text>
            New Ovens are Launching Every Week with Customizable Options.
          </Card.Text>
          <button className="btn btn-warning"> Email Us for Queries </button>
        </Card.Body>
        <Card.Footer className="text-muted">
          Copyright &copy; Oven for Baking Cakes
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Footer;
