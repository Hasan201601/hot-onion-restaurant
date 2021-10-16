import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const WhyUsAnswer = ({ data }) => {
    const { image, icon, title, description } = data
    return (
        <div>
            <Col>
                <Card border="0">
                    <Card.Img variant="top" src={image} />
                    <Row className="mt-2">
                        <Col><img src={icon} alt="" /></Col>
                        <Col xs={10}>
                            <h4>{title}</h4>
                            <p>{description}</p>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </div>
    );
};

export default WhyUsAnswer;
