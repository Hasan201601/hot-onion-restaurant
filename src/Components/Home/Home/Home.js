import React from 'react';
import { Route } from 'react-router';
import Banner from '../Banner/Banner';
import FoodDetails from '../FoodMenu/FoodDetails/FoodDetails';
import Meals from '../FoodMenu/Meals/Meals';
import Header from '../Header/Header';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Meals></Meals>
            <WhyUs></WhyUs>

        </div>
    );
};

export default Home;