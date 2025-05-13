'use client'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavComponent = () => {
    return (
        <Navbar expand="lg" className="bg-black text-white">
      <Container >
        <Navbar.Brand href="/" className='text-white'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="/about" className='text-white'>About</Nav.Link>
            <Nav.Link href="/products/csr" className='text-white'>Products/csr</Nav.Link>
            <Nav.Link href="/products/ssr" className='text-white'>Products/ssr</Nav.Link>
            <Nav.Link href="/products/ssg" className='text-white'>Products/ssg</Nav.Link>
            <Nav.Link href="/products/isr" className='text-white'>Products/isr</Nav.Link>
          </Nav>
          <Nav.Link href="/random" className='text-white'>notFound</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavComponent;
