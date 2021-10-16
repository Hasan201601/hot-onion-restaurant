import React from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useMeals from '../../../../Hooks/useMeals';
import Food from '../Food/Food';

const MealType = () => {
    const [meals] = useMeals();
    const { mealCategory } = useParams();

    return (
        <div className="container mb-3">
            <Row xs={1} md={3} className="g-5">
                {meals.filter(meal => meal.mealType === mealCategory).map(ml => <Food
                    key={ml.mealId}
                    meal={ml}></Food>)}
            </Row>

        </div>
    );
};

export default MealType;