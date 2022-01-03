import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo1.png';
import './Navigation.css'

const Navigation = () => {
    const { user, admin, logOut } = useAuth();


    return (
        <Navbar collapseOnSelect expand="lg" bg="light" sticky="top" className='py-3' variant="light">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand >
                        <img src={logo} height="35"  alt="logo" />
                    </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="mx-auto">
                        <LinkContainer to="/getStarted" >
                            <Nav.Link>Get Started</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/donation" >
                            <Nav.Link>Donation</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to="/about">
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/contact" >
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                    </Nav>

                    <Nav>
                        {
                            admin && <LinkContainer to="/adminPanel">
                                <Nav.Link>Admin Panel</Nav.Link>
                            </LinkContainer>
                        }

                        {
                            user.displayName && <Navbar.Text>
                                {user.displayName} &nbsp;
                            </Navbar.Text>
                        }

                        {
                            user.email ?
                                <Button
                                    className='button-color border-0'
                                    onClick={logOut}>Logout</Button>
                                :
                                <LinkContainer to="/login">
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;