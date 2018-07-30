export const getUsername = (username) => ({
	type: 'GET_USERNAME',
	username
});

export const isLoggedIn = (bool) => ({
	type: 'IS_LOGGED_IN',
	payload: bool
});
