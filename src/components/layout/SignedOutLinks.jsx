import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignedOutLinks() {
    return (
        <ul className="right">
            <li>
                <NavLink to="/create">Create Post</NavLink>
            </li>
        </ul>
    )
}