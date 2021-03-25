import React from 'react';
import { Link } from 'react-router-dom';
export default class IssueDetailPage extends React.Component {

    constructor(props)
    {
        super(props);

        this.state={
            modified:false
        };

        this.authenticate(props.history);
    }

    authenticate(history)
    {
        let authenticated = window.confirm("Are you sure you want to view the details??");

        if(!authenticated)
        {
            history.replace('/issues');
        }

    }


    render() {
        return ( <
            div >
            <h2> Issue Details </h2>  
            <div> <label><span> Issue Description:</span><span style={{color: 'grey'}}> { this.props.match.params.name }</span> </label> 
                </div> <br/>
                <Link to = "/issues"> Back </Link> 
                </div >

        );
    }
}