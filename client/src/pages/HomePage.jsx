import React, { Component } from 'react';
import decode from 'jwt-decode';

import SideNavHeader from '../objects/SideNavHeader';
import SideNav from '../components/SideNav';
import Search from '../sections/Search';
import Account from '../sections/Account';
import Dashboard from '../sections/Dashboard';
import Register from '../sections/Register';
import Login from '../Components/Login';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const checkAuth = () => {
	const token = localStorage.getItem('TOKEN');
	if (!token) {
		return false;
	}
	try {
		const { exp } = decode(token);
		if (exp > new Date.getTime() / 1000) {
			return false;
		}
	} catch (e) {
		return false;
	}
	return true;
};

const AuthRoute = ({ component: Component, rest }) => (
	<Route
		{...rest}
		render={(props) => (checkAuth() ? <Component {...props} /> : <Redirect to={{ pathname: '/sign-up' }} />)}
	/>
);

const Routes = () => (
	<Switch>
		<Route exact path="/" component={Search} />
		<AuthRoute path="/dashboard" component={Dashboard} />
		<AuthRoute path="/account" component={Account} />
		<Route path="/sign-in" component={Login} />
		<Route path="/sign-up" component={Register} />
	</Switch>
);

class Layout extends Component {
	render() {
		return (
			<Router>
				<div className="home__grid-container home__homepage-container">
					<SideNavHeader isLoggedIn={checkAuth()} />
					<div className="home__side-nav">
						<SideNav isLoggedIn={checkAuth()} />
					</div>
					<div className="home__main-page-area">
						<Routes />
					</div>
				</div>
			</Router>
		);
	}
}

export default Layout;
