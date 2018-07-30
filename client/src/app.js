import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from '../src/store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/style.scss';

import Header from './components/Header';
import HomePage from './pages/HomePage';

// const saveState = (state) => {
// 	try {
// 		// Convert the state to a JSON string
// 		const serialisedState = JSON.stringify(state);

// 		// Save the serialised state to localStorage against the key 'app_state'
// 		window.localStorage.setItem('app_state', serialisedState);
// 	} catch (err) {
// 		// Log errors here, or ignore
// 	}
// };

// const loadState = () => {
// 	try {
// 		// Load the data saved in localStorage, against the key 'app_state'
// 		const serialisedState = window.localStorage.getItem('app_state');

// 		// Passing undefined to createStore will result in our app getting the default state
// 		// If no data is saved, return undefined
// 		if (!serialisedState) return undefined;

// 		// De-serialise the saved state, and return it.
// 		return JSON.parse(serialisedState);
// 	} catch (err) {
// 		// Return undefined if localStorage is not available,
// 		// or data could not be de-serialised,
// 		// or there was some other error
// 		return undefined;
// 	}
// };

// const oldState = loadState();
// const store = createStore(oldState);

// store.subscribe(() => {
// 	saveState(store.getState());
// });

const store = createStore();
store.subscribe(() => {
	const state = store.getState();
	console.log(state.users);
	return state;
});

const App = () => (
	<div>
		<Header />
		<HomePage />
	</div>
);

const app = (
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
);

render(app, document.getElementById('root'));
