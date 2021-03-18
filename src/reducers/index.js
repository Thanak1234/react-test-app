import {combineReducers} from 'redux'
import {comment} from "./comment";
import {auth} from './auth';

export default combineReducers({
    comments: comment,
    auth: auth
});
