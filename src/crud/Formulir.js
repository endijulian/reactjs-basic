import React from "react";
import { Col, Row, Button, Form } from "react-bootstrap";

const Formulir = () => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>Tambah Data</h4>
          <hr></hr>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="nama">
              <Form.Label column sm={2}>
                Nama Makanan
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Nama makanan...." />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="description">
              <Form.Label column sm={2}>
                Description
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="textarea"
                  placeholder="description"
                  style={{ height: "100px" }}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="harga">
              <Form.Label column sm={2}>
                Harga
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="number" placeholder="Rp.0" />
              </Col>
            </Form.Group>

            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
