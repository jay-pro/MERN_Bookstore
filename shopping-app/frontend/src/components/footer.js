import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function footer() {
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col className="text-center">
              <span className="text-center">Copyright &copy; Bui Ha Nhi</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default footer;
