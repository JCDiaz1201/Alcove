import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import dummyData from './dummyData.js';

const PreviewImages = props => {
  let images = dummyData.test.data.thumbs;

  if (images.length === 1) {
    return (
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <img src={images[0]} />
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    );
  }

  if (images.length === 2) {
    return (
      <Container>
        <Row>
          <Col>
            <img src={images[0]} />
          </Col>
          <Col>
            <img src={images[1]} />
          </Col>
        </Row>
      </Container>
    );
  }

  if (images.length === 3 || images.length === 4) {
    return (
      <Container>
        <Row>
          <Col>
            <img src={images[0]} />
          </Col>
          <Col>
            <img src={images[1]} />
          </Col>
          <Col>
            <img src={images[2]} />
          </Col>
        </Row>
      </Container>
    );
  }

  if (images.length >= 5) {
    return (
      <Container>
        <Row>
          <Col md={6}>{images[0]}</Col>
          <Col md={6}>
            <Row>
              <Col md={6}>{images[1]}</Col>
              <Col md={6}>{images[2]}</Col>
            </Row>
            <Row>
              <Col md={6}>{images[3]}</Col>
              <Col md={6}>
                {images[4]}
                <Button>
                  Launch the super cool modal!
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <div>
      <Button>Launch the super cool modal!</Button>
    </div>
  );
}

export default PreviewImages;