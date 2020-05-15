import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'

function CreateProject() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()
    const authError = useSelector(state => state.auth.authError)
    const user = useSelector(state => state.auth.UserLogin)
    const project = useSelector(state => state.project.projects)

    if(authError === 'Login failed' || authError === null) return <Redirect to="/login"></Redirect>

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">
                    Create New Project
                </h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="description">Description</label>
                    <textarea className="materialize-textarea" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn black lighthen-1 z-depth-0" 
                    onClick={() => dispatch({ type: 'CREATE_PROJECT', project: {id: project[project.length-1].id + 1, title, description, date: new Date().toDateString(), firstName: user.firstName, lastName: user.lastName, isFav: false, totalFavorites: 0}}, history.push("/"))}>Create Project</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProject
