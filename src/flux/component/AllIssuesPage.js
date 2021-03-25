import React from "react";
//import ProductApi from "../data/ProductApi";
import IssueList from "./IssueList";
import { Link } from 'react-router-dom';
import IssueStore from '../store/IssueStore';
import InitializeActions from '../actions/InitializeActions';
export default class AllIsuesPage extends React.Component {
    constructor(props) {
        super(props);
  
        this._onChange = this._onChange.bind(this);

     
        this.state = {

            issue:IssueStore.getAllIssues()
        };
    }
    
    componentDidMount() {
        
        InitializeActions.initIssues();
        IssueStore.addChangeListener(this._onChange);
        
         
    }
    _onChange() {
          
        this.setState({ issue: IssueStore.getAllIssues() });
    }
   
    render() {
        return ( <div>
            <h1> Issues List </h1>  
            <IssueList issue = { this.state.issue } > </IssueList>
            <br/>
            <Link to = "/addIssue"> Add Issue </Link> 
                </div >
        );

    }
  }