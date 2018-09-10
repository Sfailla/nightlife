import React, { Fragment } from 'react';

import Header from '../components/Header';
import HomePage from '../pages/HomePage';

export default class MainLayout extends React.Component {
	render() {
		return (
			<Fragment>
				<Header />
				<HomePage />
			</Fragment>
		);
	}
}
