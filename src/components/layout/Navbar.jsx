import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const authError = useSelector( state => state.auth.authError)

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Blogger</Link>
                { authError === "Login success" ? <SignedInLinks/> : <SignedOutLinks/> }
            </div>   
        </nav>
    )
}