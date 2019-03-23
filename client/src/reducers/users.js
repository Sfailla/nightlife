const defaultState = {
	currentUser: null,
	isLoggedIn: false,
	username: ''
};

const usersReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'SET_USERNAME':
			return {
				...state,
				username: action.username
			};
		case 'SET_USER':
			return {
				...state,
				currentUser: action.payload.currentUser
			};
		case 'IS_LOGGED_IN':
			return {
				...state,
				isLoggedIn: action.payload
			};
		default:
			return state;
	}
};

export default usersReducer;
