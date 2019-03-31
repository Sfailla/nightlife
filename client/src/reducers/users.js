const defaultState = {
	currentUser: null,
	isLoggedIn: false,
	username: null,
	avatar: null
};

const usersReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'SET_USERNAME':
			return {
				...state,
				username: action.payload.username
			};
		case 'SET_USER':
			return {
				...state,
				currentUser: action.payload.currentUser
			};
		case 'IS_LOGGED_IN':
			return {
				...state,
				isLoggedIn: action.payload.bool
			};
		case 'SET_AVATAR':
			return {
				...state,
				avatar: action.payload.avatar
			};
		default:
			return state;
	}
};

export default usersReducer;
