import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from '../src/store/appReducer';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import { saveState, loadState } from './localStorage/localStorage';
import { reduxDT } from './reduxDT/reduxDevtool';

import './styles/style.scss';

const persistedData = loadState();
const store = createStore(appReducer, persistedData, reduxDT());

store.subscribe(() => {
	saveState(store.getState());
	console.log(store.getState().users);
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
