import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function HomePage() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://blog.skyloov.com/wp-content/uploads/2022/09/IMG-World-of-Adventure-featured-1140x700.jpeg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HomePage;
