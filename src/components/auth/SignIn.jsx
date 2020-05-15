import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.user.users)
    const authError = useSelector(state => state.auth.authError)
   
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    const login = () => {
        for(let i = 0; i < user.length; i++) {
            if(user[i].email === email && user[i].password === password) {
                dispatch({ type: "LOGIN_SUCCESS", user: user[i]}, history.push("/create"))
                break;
            } else {
                dispatch({ type: "LOGIN_ERROR"})
            }
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">
                    Login
                </h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <div className="red-text">
                        { authError === 'Login failed' ? <p>Email or Password is wrong</p> : null }
                    </div>
                </div>
                <div className="input-field">
                    <button className="btn black lighthen-1 z-depth-0" 
                    onClick={login}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
