import React from "react";
import { NavLink } from 'react-router-dom'

import './styling/NavLinks.css';

const NavLinks = props => {
    
    return (
        <ul className = "nav-links">
            <li>
                <NavLink to ="/" exact>Home</NavLink>
            </li>
            <li>
                <NavLink to = {`/NewStudents`}> New Students </NavLink>
            </li>
            <li>
                <NavLink to = {`/ContinuingStudents`}> Continuing Students </NavLink>
            </li>
            <li>
                <NavLink to = {`/GraduatingStudents`}> Graduating Students </NavLink>
            </li>

        </ul>
    )
}

export default NavLinks;