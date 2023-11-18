import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Article from "./Components/Product";
import Name from "./Components/Name";
import Price from "./Components/Price";
import Desc from "./Components/Description";
import Img from "./Components/Image";

function App() {
  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Product</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Informations
          </Card.Subtitle>
          <Article/>
          <Name />
          <Price />
          <Desc />
          <Img />
          <Card.Text>here to find everything on this product</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
