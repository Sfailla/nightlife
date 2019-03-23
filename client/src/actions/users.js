export const setUser = user => ({
	type: 'SET_USER',
	payload: {
		currentUser: user
	}
});

export const setUsername = username => ({
	type: 'SET_USERNAME',
	username
});

export const isLoggedIn = bool => ({
	type: 'IS_LOGGED_IN',
	payload: bool
});
