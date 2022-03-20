import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import classes from '../../styles/Navigation.module.css';

const Navigation = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand className={classes.Nav}>
            <Link className={classes.Link} to='/'>
              Jisun Kim
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Nav.Link>
              <Link className={classes.Link} to='/'>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={classes.Link} to='/about'>
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={classes.Link} to='/contact'>
                Contact
              </Link>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
