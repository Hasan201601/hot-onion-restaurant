import React from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../Images/logo2.png';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="dark">
                <Container>
                    <Navbar.Brand to="/home" style={{ textAlign: 'start' }} ><img src={logo} style={{ width: '25%' }} alt="" /></Navbar.Brand>
                    <Nav className="ms-auto d-flex justify-content-center align-items-center">

                        <div>
                            <i className="fas fa-shopping-cart cart"></i><Badge bg="danger" style={{ marginLeft: '-5px ' }}>9</Badge>
                        </div>
                        <div>
                            <NavLink to="/login" className="text-dark text-decoration-none px-3 fs-5 border-bottom-0 fw-bolder"><span>Login</span></NavLink>
                        </div>
                        <button className="btn btn-danger rounded-pill px-3 fw-bolder"><NavLink to="/signup" className="text-decoration-none text-white">SignUp</NavLink></button>
                    </Nav>
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;