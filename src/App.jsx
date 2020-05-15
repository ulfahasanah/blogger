import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn';
import CreateProject from './components/projects/CreateProject';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/project/:id" children={<ProjectDetails></ProjectDetails>}/>
          <Route path="/login" component={SignIn}/>
          <Route path="/create" component={CreateProject}/>
          <Route path="/" component={Dashboard}/>     
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
