import React from "react";
import { Card, Button } from "react-bootstrap";

const CustomCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Card Image"
      />
      <Card.Body className="d-flex align-items-center justify-content-center">
        <Button variant="primary">Click Me</Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
