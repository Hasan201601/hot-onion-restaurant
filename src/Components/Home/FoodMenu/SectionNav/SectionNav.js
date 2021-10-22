import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import './SectionNav.css'
import { NavLink } from 'react-bootstrap';

const SectionNav = () => {
    let { url } = useRouteMatch();
    const activeStyle = {
        color: 'red!important',
        borderBottom: '3px solid red'
    }
    const history = useHistory()
    const goToMeals = id => {
        history.push(`/home/${id}`)
    }
    return (

        <div className="my-5 py-5 text-center d-flex align-items-center justify-content-center">
            <NavLink className="link" activeStyle={activeStyle} onClick={() => goToMeals("breakfast")}>BreakFast</NavLink>
            <NavLink className="link" activeStyle={activeStyle} onClick={() => goToMeals("lunch")}>Lunch</NavLink>
            <NavLink className="link" activeStyle={activeStyle} onClick={() => goToMeals("dinner")}>Dinner</NavLink>
        </div>
    );
};

export default SectionNav;