'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Page = () => {
  return (
    <div className="py-5 bg-dark">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="mb-4">Welcome to My Site</h1>
            <p className="lead">
              This is a simple Next.js app using React-Bootstrap and the new App Router.
              Explore the About and Contact pages to learn more.
            </p>
            <Button href="/about" variant="primary" size="lg">
              Learn More
            </Button>
          </Col>
          <Col md={6}>
            <img
              src="/welcomeImg.png"
              alt="Welcome"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page;
