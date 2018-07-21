import React, { Component } from 'react';

import SideNavHeader from '../objects/SideNavHeader';
import SideNav from '../components/SideNav';
import Search from '../sections/Search';
import Account from '../sections/Account';
import Dashboard from '../sections/Dashboard';
import Register from '../sections/Register';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const routes = (
	<Switch>
		<Route exact path="/" component={Search} />
		<Route path="/dashboard" component={Dashboard} />
		<Route path="/account" component={Account} />
		<Route path="/sign-up" component={Register} />
	</Switch>
);

class Layout extends Component {
	render() {
		return (
			<Router>
				<div className="home__grid-container home__homepage-container">
					<SideNavHeader />
					<div className="home__side-nav">
						<SideNav />
					</div>
					<div className="home__main-page-area">{routes}</div>
				</div>
			</Router>
		);
	}
}

export default Layout;
