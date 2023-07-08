import React from 'react'
import { NavLink } from 'react-router-dom';

function NavItem({ to, text }) {
    return (
        <li>
            <NavLink
                to={to}
                className="hover:text-cyan"
                activeClassName="text-cyan"
                exact
            >
                {text}
            </NavLink>
        </li>
    );
}

export default NavItem