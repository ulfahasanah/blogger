import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function ProjectDetails() {
    const { id }  = useParams()
    const dispatch = useDispatch()
    const project = useSelector( state => state.project.projects)
    const authError = useSelector(state => state.auth.authError)

    function filterById() {
        return project.filter(el => {
            return el.id === +id
        })
    }
    
    return (
        <div className="container">
            { filterById().map((project, i) => {
                return (
                    <div className="card z-depth-0 project-summary" key={i}>
                        <div className="card-content grey-text text-darken-3">
                            <span className="card-title">
                                {project.title}
                            </span>
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
                            <p className="card-content">
                                {project.description}
                            </p>
                            <div className="card-action grey lighten-4 grey-text">
                                <div>posted by { project.firstName + " " + project.lastName }</div>
                                <div> { project.date }</div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectDetails
