import React from 'react';
import { Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo2.png'
import bg from '../../Images/bannerbackground.png';

const SignUp = () => {
    return (
        <div className="d-flex justify-content-center align-items-center py-5" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', backgroundRepeat: 'no-repeat' }}>
            <div>
                <div><img style={{ maxWidth: '250px' }} className="img-fluid" src={logo} alt="" /></div>
                <Form className="my-4">
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Control type="name" placeholder="Name" />
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                        <Form.Control type="password" placeholder="Re-enter Password" />
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Control type="submit" value="Sign Up" className="btn btn-danger" placeholder="Password" />
                    </Form.Group>
                    <NavLink to="/login" className="text-decoration-none"><p className="text-center text-danger">Already have an account?</p></NavLink>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;
