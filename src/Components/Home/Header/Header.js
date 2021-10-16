import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../Images/logo2.png'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="dark">
                <Container>
                    <Navbar.Brand to="/home" style={{ textAlign: 'start' }} ><img src={logo} style={{ width: '25%' }} alt="" /></Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link to="/home" ><i className="fas fa-shopping-cart text-dark fa-1x"></i></Nav.Link>
                        <NavLink to="/login" className="text-dark text-decoration-none px-3 fs-5 border-bottom-0"><p>Login</p></NavLink>
                        <button className="btn btn-danger rounded-pill px-3">SignUp</button>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;