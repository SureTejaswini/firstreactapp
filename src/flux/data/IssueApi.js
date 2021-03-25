import axios from 'axios';



export default class IssueApi {
    static getAllIssues(cb) {
        
        axios.get('http://localhost:3001/issues')
            .then(response => cb(response.data))
            .catch(error => {
                throw error
            });
    }

    static saveIssues(issue,cb) {
       
         
        axios.post('http://localhost:3001/issues', issue)
            .then(response => cb(response.data))
            .catch(function(error) {
                console.log(error);
            });
         
    }
    
    
}