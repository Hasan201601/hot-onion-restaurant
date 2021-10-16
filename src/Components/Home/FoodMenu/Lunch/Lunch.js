import React from 'react';
import { Row } from 'react-bootstrap';
import useMeals from '../../../../Hooks/useMeals';
import Food from '../Food/Food'

const Lunch = () => {
    const [meals] = useMeals();

    return (
        <div className="container mb-3">
            <Row xs={1} md={3} className="g-5">
                {meals.filter(meal => meal.mealType === "lunch").map(ml => <Food
                    key={ml.mealId}
                    meal={ml}></Food>)}
            </Row>

        </div>
    );
};

export default Lunch;