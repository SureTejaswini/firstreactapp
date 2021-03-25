import React from "react";
import { withRouter } from "react-router-dom";
import IssueActions from '../actions/IssueActions';
import IssueForm from "./IssueForm";

class AddIssuePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleSubmit(issue) {
     
        IssueActions.saveIssues(issue);
        this.props.history.push('/issues');
    }

    render() {
        return (<IssueForm onSave = { this.handleSubmit }/>
        );
    }
}

export default withRouter(AddIssuePage);