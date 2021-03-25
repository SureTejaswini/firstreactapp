import Dispatcher from '../dispatcher/Dispatcher';
import IssueApi from '../data/IssueApi';
import * as ActionTypes from '../constants/ActionTypes';

export default class ProductActions {
    static saveIssues(issue) {
      
          IssueApi.saveIssues(issue,data=>
            Dispatcher.dispatch({
                actionType: ActionTypes.ADD_ISSUE,
                issue: data
            }))
    } 
    
}