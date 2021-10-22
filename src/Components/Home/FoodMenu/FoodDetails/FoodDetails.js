import React, { useState } from 'react';
import { Button, NavLink } from "react-bootstrap"
import { useHistory, useParams } from 'react-router';
import useMeals from '../../../../Hooks/useMeals';
import './FoodDetail.css'

const FoodDetails = (props) => {
    const [number, setNumber] = useState(0);
    const { Id } = useParams();
    const [meals] = useMeals();
    const detail = meals.find(meal => meal.mealId === parseInt(Id))
    const nextFirst = meals.find(meal => meal.mealId === (parseInt(Id) + 1))
    const nextSecond = meals.find(meal => meal.mealId === (parseInt(Id) + 2))
    const handleIncrease = () => {
        setNumber(number + 1)
    }
    const handleDecrease = () => {
        if (!number) {
            return;
        }
        setNumber(number - 1)
    }
    const history = useHistory();
    const goToReview = () => {
        history.push('/home/review')
    }
    return (
        <div className="container">
            <div className="d-flex justify-content-around">
                <div className="me-5 justify-content-start w-50">
                    <h2 className="pb-3">{detail?.mealName}</h2>
                    <p className="pb-3">{detail?.mealDetails}</p>
                    <div className="d-flex  align-items-center ">
                        <h3 className="fw-bolder me-4">${detail?.mealPrice}</h3>
                        <div className="d-flex justify-content-center align-items-center number-change-btn rounded-pill">
                            <i className="fas fa-minus me-3" onClick={handleDecrease}></i><span className="fs-4">{number}</span><i className="fas fa-plus ms-3" onClick={handleIncrease}></i>
                        </div>
                    </div>
                    <Button variant="danger" className="rounded-pill fs-5 px-4 my-3"><i className="fas fa-shopping-cart fa-1x"></i> Add</Button>
                    <div >
                        <img src={nextFirst?.mealImage} width="150px" alt="" />
                        <img src={nextSecond?.mealImage} width="150px" alt="" />
                    </div>
                </div>
                <div className="w-50">
                    <img src={detail?.mealImage} className="img-fluid" alt="" />
                </div>

            </div>
            <div className="text-center">
                <Button variant="danger" onClick={goToReview} disabled={false}>Proceed To CheckOut</Button>
            </div>
        </div>
    );
};

export default FoodDetails;