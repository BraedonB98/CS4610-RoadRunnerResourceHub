import React from "react";
import { NavLink } from 'react-router-dom'

import './styling/NavLinks.css';

const NavLinks = props => {
    
    return (
        <ul className = "nav-links">
            <li>
                <NavLink to ="/" exact>HOME</NavLink>
            </li>
            <li>
                <NavLink to = {`/Freshman`}>Freshman</NavLink>
            </li>
            <li>
                <NavLink to = {`/Sophomore`}> Sophomore </NavLink>
            </li>
            <li>
                <NavLink to = {`/Junior`}> Junior </NavLink>
            </li>
            <li>
                <NavLink to = {`/Senior`}> Senior </NavLink>
            </li>

        </ul>
    )
}

export default NavLinks;