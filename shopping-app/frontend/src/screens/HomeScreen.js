import React from "react";
import Products from "../products/products";
import { Row, Col } from "react-bootstrap";

function HomeScreen() {
  return (
    <>
      <Row>
        {Products.map((product) => (
          <Col>
            <h3>{product.name}</h3>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
