export const setUser = user => ({
	type: 'SET_USER',
	payload: {
		currentUser: user
	}
});

export const setUsername = username => ({
	type: 'SET_USERNAME',
	payload: {
		username
	}
});

export const isLoggedIn = bool => ({
	type: 'IS_LOGGED_IN',
	payload: {
		bool
	}
});

export const setAvatar = avatar => ({
	type: 'SET_AVATAR',
	payload: {
		avatar
	}
});
