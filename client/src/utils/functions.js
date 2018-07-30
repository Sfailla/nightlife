import decode from 'jwt-decode';

// function for truncating names of search results
export const truncateRes = (str) => {
	if (typeof str === 'string' && str.length > 30) {
		str = str.slice(0, 30);
		str += '...';
		return str;
	} else {
		return str;
	}
};

// Function checks for token to grant access to restricted routes
export const checkAuth = () => {
	const token = localStorage.getItem('TOKEN');

	if (!token) {
		return false;
	}
	// try {
	// 	if (token && decode(token).exp !== undefined) {
	// 		const { exp } = decode(token);
	// 		if (exp > new Date.getTime() / 1000) {
	// 			return false;
	// 		}
	// 	}
	// } catch (e) {
	// 	return false;
	// }
	return true;
};
