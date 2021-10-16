import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Food.css'

const Food = (props) => {
    const { mealId, mealDesc, mealName, mealPrice, mealImage } = props.meal
    const history = useHistory();
    const handleDetails = mealId => {
        history.push(`/home/details/${mealId}`)
    }
    return (
        <div>
            <Col>
                <Card className="border-0 card-hover" onClick={() => handleDetails(mealId)}>
                    <Card.Img variant="top" src={mealImage} style={{ width: '65%', display: 'block', margin: 'auto', paddingTop: '10px' }} />
                    <Card.Body>
                        <Card.Title><h6>{mealName}</h6></Card.Title>
                        <Card.Text>
                            <small>{mealDesc}</small>
                        </Card.Text>
                        <Card.Text>
                            <h4>${mealPrice}</h4>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Food;