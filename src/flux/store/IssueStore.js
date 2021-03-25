import Dispatcher from '../dispatcher/Dispatcher';
import * as ActionTypes from '../constants/ActionTypes';
import { EventEmitter } from 'events';

let _issues = [];

class IssueStoreClass extends EventEmitter {
    addChangeListener(cb) {
          debugger;
        this.on('change', cb);
    }

   getSelectedIssue(cb) {
      this.on('change', cb);
    }
    emitChange() {
        this.emit('change');
    }

    getAllIssues() {
        debugger;
        return _issues;
    }
}

let IssueStore = new IssueStoreClass();
export default IssueStore;

Dispatcher.register(action => {
  
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            _issues = action.issue;
            IssueStore.emitChange();
            break;
        case ActionTypes.ADD_ISSUE:
            _issues.push(action.issue);
            IssueStore.emitChange();
            break;
        default:
    }
});