import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav() {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName = 'active'>HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new' activeClassName='active'>
                    New Tweet
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}