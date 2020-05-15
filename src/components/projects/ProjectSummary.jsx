import React from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export default function ProjectSummary({project}) {
    const authError = useSelector(state => state.auth.authError)
    const history = useHistory()
    const dispatch = useDispatch()
    

    const handleClick = (e) => {
        e.preventDefault()
        history.push(`/project/${project.id}`)
    }

    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <p className="card-title">
                    {project.title}
                </p>

                { 
                    project.isFav === false && authError === 'Login success' ?
                    <NavLink to='/' className="btn green lighten-1 right"
                        onClick={() => dispatch({ type: "ADD_FAVORITE", id: project.id})}
                    >  
                    <i className="far fa-heart"> { project.totalFavorites }</i>  
                    </NavLink> : 
                    authError === "Login failed" || authError === null ?
                    <NavLink to="/login" className="btn green lighten-1 right"
                    >  
                    <i className="fas fa-heart"> { project.totalFavorites }</i>
                    </NavLink> : 
                    <NavLink to="/" className="btn green lighten-1 right"
                        onClick={() => dispatch({ type: "DELETE_FAVORITE", id: project.id})}
                    >  
                    <i className="fas fa-heart"> { project.totalFavorites }</i>
                    </NavLink>
                }

                {
                    authError === 'Login success' ?
                    <NavLink to='/' className="btn red lighten-1 right"
                    onClick={() => dispatch({ type: "DELETE_PROJECT", id: project.id})}
                    >
                        <i className="fas fa-trash"></i>
                    </NavLink>
                    :
                    <NavLink to='/login' className="btn red lighten-1 right"
                    >
                        <i className="fas fa-trash"></i>
                    </NavLink>
                }
                
                <p className="truncate">{project.description}</p>
                <a href={`${project.id}`} onClick={handleClick}>Read More</a>
                <div className="card-action grey lighten-4 grey-text">
                    <div>posted by { project.firstName + " " + project.lastName }</div>
                    <div> { project.date }</div>
                </div>
                
            </div>
            <hr/>
        </div>
    )
}