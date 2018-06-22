import React, { Component } from 'react';

import AppHeader from '../objects/AppHeader';
import SideNav from '../components/SideNav';

import Search from '../sections/Search';
import Account from '../sections/Account';
import Dashboard from '../sections/Dashboard';
import SignUp from '../sections/SignUp';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const routes = (
	<Switch>
		<Route exact path="/" component={Search} />
		<Route path="/dashboard" component={Dashboard} />
		<Route path="/account" component={Account} />
		<Route path="/sign-up" component={SignUp} />
	</Switch>
);

class Layout extends Component {
	render() {
		return (
			<Router>
				<div className="home__grid-container">
					<AppHeader />
					<div className="home__side-nav">
						<SideNav />
					</div>
					<div className="home__main-page-area">
						{/* {routes} */}

						<SignUp />
					</div>
				</div>
			</Router>
		);
	}
}

export default Layout;
