import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='links' to="/">Clients</Link>
            <Link className='links' to="employees">Employees</Link>
            <Link className='links' to="students">Students</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Home