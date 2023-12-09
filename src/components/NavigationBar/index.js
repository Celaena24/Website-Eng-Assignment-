import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './index.module.css';

const NavigationBar = () => {
  return (
    <Navbar style={{backgroundColor: "#472126", color: "red"}} variant="dark"  sticky="top" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav className="ms-auto">
            <Nav.Link as={Link} to="/survey">
              <span className={styles.navLinkSpan}>Survey</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/sophie">
              <span className={styles.navLinkSpan}>Bella</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/essay">
              <span className={styles.navLinkSpan}>Essay</span>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
