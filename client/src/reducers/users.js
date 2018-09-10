const usersDefaultState = {
	username: '',
	isLoggedIn: false,
	avatarSelect: 'default-avatar',
	avatar: '/22acd1da9b455b7ce7196bb89f01127a.jpg'
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
		case 'SET_AVATAR':
			return {
				...state,
				avatarSelect: action.avatarSelect,
				avatar: action.avatar
			};
		default:
			return state;
	}
};

export default usersReducer;
