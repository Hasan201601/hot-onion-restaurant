import React from 'react';
import { Row } from 'react-bootstrap';
import WhyUsAnswer from '../WhyUsAnswer/WhyUsAnswer';
import dataStore from './dataStore';

const WhyUs = () => {
    return (
        <div className="container my-5 pt-5">
            <h1 className="fw-bolder">Why you choose us</h1>
            <p style={{ width: '40%' }} className="my-3">We have trusted resources for every imaginable need designers, contractors, point of sales systems, kitchen equipment, software, glassware and everything in between.</p>
            <Row xs={1} md={3} className="g-4">
                {dataStore.map(data => <WhyUsAnswer
                    key={data.id}
                    data={data}
                ></WhyUsAnswer>)
                }
            </Row>
        </div>
    );
};

export default WhyUs;