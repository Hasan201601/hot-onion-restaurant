import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import './SectionNav.css'

const SectionNav = () => {
    let { url } = useRouteMatch();
    const activeStyle = {
        color: 'red!important',
        borderBottom: '3px solid red'
    }
    return (

        <div className="my-5 py-5 text-center">
            <NavLink className="link" activeStyle={activeStyle} to={`${url}/breakfast`}>BreakFast</NavLink>
            <NavLink className="link" activeStyle={activeStyle} to={`${url}/lunch`}>Lunch</NavLink>
            <NavLink className="link" activeStyle={activeStyle} to={`${url}/dinner`}>Dinner</NavLink>
        </div>
    );
};

export default SectionNav;