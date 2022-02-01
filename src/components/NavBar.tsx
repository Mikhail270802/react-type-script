import React from 'react'
import {NavLink} from 'react-router-dom'

export const NavBar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper blue darken-1 px1">
            <a href="/" className="brand-logo">React and TypeScript</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Todo List</NavLink></li>
                <li><NavLink to="/about">Information</NavLink></li>
            </ul>
    </div>
    </nav>

)

