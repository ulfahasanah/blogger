import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function SignedInLinks() {
    const dispatch = useDispatch()
    return (
        <ul className="right">
            <li>
                <NavLink to="/create">New Post</NavLink>
            </li>
            <li>
                <NavLink to="/" onClick={() => dispatch({ type: "LOGOUT_SUCCESS"})}>Log Out</NavLink>
            </li>
        </ul>
    )
}