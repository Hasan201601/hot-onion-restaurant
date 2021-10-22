import React from 'react';
import { Form, Row } from 'react-bootstrap';

const ShippingInfo = () => {
    return (
        <div>
            <h1>Edit every Details</h1>
            <hr />
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
                    <Form.Control type="submit" value="Save & Continue" className="btn btn-danger" placeholder="Password" />
                </Form.Group>
            </Form>
        </div>
    );
};

export default ShippingInfo;
