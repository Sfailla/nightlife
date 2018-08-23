import React, { Component } from 'react';

import Header from '../components/Header';
import HomePage from '../pages/HomePage';

export default class MainLayout extends Component {
	render() {
		return (
			<div>
				<Header />
				<HomePage />
			</div>
		);
	}
}
