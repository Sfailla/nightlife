import { combineReducers } from 'redux';
import usersReducer from '../reducers/users';

const appReducers = combineReducers({
	users: usersReducer
});

export default appReducers;
