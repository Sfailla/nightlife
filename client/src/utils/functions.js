import decode from 'jwt-decode';

// function for truncating names of search results
export const truncateRes = str => {
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
	// console.log(decode(token))
	if (!token) {
		return false;
	}
	// try {
	// 	const { exp } = decode(token);
	// 	console.log('exp ', new Date(exp));
	// 	console.log(new Date(date));
	// 	if (exp >= date) {
	// 		return false;
	// 	}
	// } catch (e) {
	// 	return false;
	// }
	return true;
};
