const usersDefaultState = {
	username: '',
	isLoggedIn: false,
	avatar: '',
	selectEvent: []
};

const usersReducer = (state = usersDefaultState, action) => {
	switch (action.type) {
		case 'GET_USERNAME':
			return {
				...state,
				username: action.username
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
