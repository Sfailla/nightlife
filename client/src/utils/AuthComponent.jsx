export default class Auth {
	register = (username, password) => {
		return fetch('/users/sign-up', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({ username, password })
		}).then((res) => {
			return new Promise((resolve, reject) => {
				if (!res) {
					return reject();
				} else {
					return resolve(res);
				}
			});
		});
	};

	login = (username, password) => {
		return fetch('/users/sign-in', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({ username, password })
		}).then((res) => {
			return new Promise((resolve, reject) => {
				if (!res) {
					return reject();
				} else {
					return resolve(res);
				}
			});
		});
	};

	authFetch = (url, options) => {
		let headers = {
			'Content-Type': 'application/json',
			'x-auth': `${this.getToken()}`
		};
		return fetch(url, {
			headers,
			...options
		}).then((res) => {
			return new Promise((resolve, reject) => {
				if (!res) {
					return reject();
				} else {
					return resolve(res);
				}
			});
		});
	};

	// isTokenExpired(token) {
	//     try {
	//         const decoded = decode(token);
	//         if (decoded.exp < Date.now() / 1000) { // Checking if token is expired
	//             return true;
	//         }
	//         else
	//             return false;
	//     }
	//     catch (err) {
	//         return false;
	//     }
	// }

	isLoggedIn = () => {
		const token = this.getToken();
		return !!token;
	};

	setToken = (token) => {
		localStorage.setItem('TOKEN', token);
	};

	getToken = () => {
		return localStorage.getItem('TOKEN');
	};

	removeToken = () => {
		localStorage.removeItem('TOKEN');
	};

	logout = () => {
		this.authFetch('/users/token', {
			method: 'DELETE'
		});
		this.removeToken();
	};

	checkStatus(response) {
		// raises an error in case response status is not a success
		if (res.status >= 200 && res.status < 300) {
			return res;
		} else {
			var error = new Error(res.statusText);
			error.res = response;
			throw error;
		}
	}
}
