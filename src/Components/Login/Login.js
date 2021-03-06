import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import logo from '../../Images/logo2.png'
import bg from '../../Images/bannerbackground.png';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className="d-flex justify-content-center align-items-center py-5" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', backgroundRepeat: 'no-repeat' }}>
            <div>
                <div><img style={{ maxWidth: '250px' }} className="img-fluid" src={logo} alt="" /></div>
                <Form className="my-4">
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Control type="submit" value="Login" className="btn btn-danger" placeholder="Password" />
                    </Form.Group>
                    <div className="text-center">
                        <p className="my-0">Or</p>
                        <p className="mb-2">Sign In With</p>
                        <i class="fab fa-google fa-2x"></i>
                    </div>
                    <NavLink to="/signup" className="text-decoration-none"><p className="text-center text-danger">Want to Create an account?</p></NavLink>

                </Form>
            </div>
        </div>
    );
};

export default Login;