import React from 'react'

function NavItem({ href, text }) {
    return (
        <li>
            <a href={href} className="hover:text-cyan">{text}</a>
        </li>
    );
}

export default NavItem