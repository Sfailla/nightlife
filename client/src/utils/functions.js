// import decode from 'jwt-decode';

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

// function for truncating names of search results
// takes in a str and it's max length allowed.
export const truncate = (str, len) => {
	if (typeof str === 'string' && str.length > len) {
		str = str.slice(0, len);
		str += '...';
		return str;
	} else {
		return str;
	}
};

// function to change rating number to star
export const changeNumToStar = num => {
	if (num <= 0) {
		return 'n/a';
	} else {
		let str = '⭐';
		let newStr = '';
		while (num > 0) {
			newStr += str;
			num--;
		}
		return newStr;
	}
};
