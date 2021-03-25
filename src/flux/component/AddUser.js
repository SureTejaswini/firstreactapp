import React from "react";
import { withRouter } from "react-router-dom";
import IssueActions from '../actions/IssueActions';
import RegistrationForm from "./Registrationform";

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleSubmit(user) {
     
        IssueActions.saveIssues(user);
        this.props.history.push('/users');
    }

    render() {
        return (<RegistrationForm onSave = { this.handleSubmit }/>
        );
    }
}

export default withRouter(AddUser);