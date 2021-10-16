import React from 'react';
import { useRouteMatch, Switch, Route, } from 'react-router-dom';
import FoodDetails from '../FoodDetails/FoodDetails';
import Lunch from '../Lunch/Lunch';
import MealType from '../MealType/MealType';
import SectionNav from '../SectionNav/SectionNav';

const Meals = () => {
    const { path } = useRouteMatch();
    return (
        <div>
            <SectionNav></SectionNav>
            <Switch>
                <Route exact path="/">
                    <Lunch></Lunch>
                </Route>
                <Route exact path="/home">
                    <Lunch></Lunch>
                </Route>
                <Route path={`${path}/:mealCategory`}>
                    <MealType></MealType>
                </Route>
            </Switch>
            <Route path={`/home/details/:Id`}>
                <FoodDetails></FoodDetails>
            </Route>
        </div >
    );
};

export default Meals;