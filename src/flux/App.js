import React from "react";
// import AllIssuesPage from "./component/AllIssuesPage";
// import AddIssuePage from "./component/AddIssuePage";
import {BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
// import IssueDetailPage from "./component/IssueDetailPage";
import RegistrationForm from './component/Registrationform';


class Links extends React.Component {
    render() {
        return (

            <nav>
            <div >

            <NavLink exact activeClassName = "active" to = "/">About </NavLink>   &nbsp; &nbsp;
           <NavLink activeClassName = "active"to = "/users"> Register </NavLink> 
            {/* <NavLink activeClassName = "active"to = "/issues"> Issues </NavLink>  */}

            </div> </nav >
        );
    }
}
export default class App extends React.Component {

        render() {
            return (

                <Router>
                <div>
                <Links/>
                <Switch>
                {/* <Route path = "/issues/:name"component = {IssueDetailPage}/>   
                <Route path = "/issues"component = {AllIssuesPage}/>    */}
                {/* <Route path = "/addIssue"component = {AddIssuePage}/> */}
                 <Route path = "/users"component = {RegistrationForm}/>    
                <Route path = "/"render = {() =><h3> About: This application provides information about the issue </h3> } />
                
                </Switch>    
               </div> 
                </Router>
                );
            }
        }
