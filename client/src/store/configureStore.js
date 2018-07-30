import { createStore, combineReducers } from 'redux';
import usersReducer from '../reducers/users';
import { reduxDT } from '../reduxDT/reduxDevtool';

export default () => {
	const store = createStore(
		combineReducers({
			users: usersReducer
		}),
		reduxDT()
	);
	return store;
};
