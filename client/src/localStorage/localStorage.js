export const saveState = (state) => {
	try {
		// Convert the state to a JSON string
		const serializedState = JSON.stringify(state);
		// Save the serialized state to localStorage against the key 'app_state'
		localStorage.setItem('STATE', serializedState);
	} catch (err) {
		// Log errors here, or ignore
	}
};

export const loadState = () => {
	try {
		// Load the data saved in localStorage, against the key 'STATE'
		const serializedState = localStorage.getItem('STATE');
		// Passing undefined to createStore will result in our app getting the default state
		// If no data is saved, return undefined
		if (serializedState === null) {
			return undefined;
		}
		// De-serialise the saved state, and return it.
		return JSON.parse(serializedState);
	} catch (err) {
		// Return undefined if localStorage is not available,
		// or data could not be de-serialised,
		// or there was some other error
		return undefined;
	}
};
