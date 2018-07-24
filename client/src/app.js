import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles/style.scss';

import Header from './components/Header';
import HomePage from './pages/HomePage';

const App = (props) => (
	<div>
		<Header />
		<HomePage />
	</div>
);

render(<App />, document.getElementById('root'));
