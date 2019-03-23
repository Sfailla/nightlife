import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from '../src/store/appReducer';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './layouts/MainLayout';
import { reduxDT } from './reduxDT/reduxDevtool';
import { saveState, loadState } from './localStorage/localStorage';

import './styles/style.scss';

const persistedData = loadState();
const store = createStore(appReducer, persistedData, reduxDT());

store.subscribe(() => {
	saveState(store.getState());
});

const App = () => <Layout />;

const app = (
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
);

render(app, document.getElementById('root'));
