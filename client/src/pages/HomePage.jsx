import React, { Component } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoggedIn } from '../actions/users';

import MainHeader from '../objects/MainHeader';
import MainSideNav from '../components/MainSideNav';
import Search from '../sections/Search';
import Account from '../sections/Account';
import Dashboard from '../sections/Dashboard';
import Register from '../sections/Register';
import Login from '../Components/Login';

import { checkAuth } from '../utils/functions';
import Auth from '../utils/AuthComponent';

const AuthRoute = ({ component: Component, rest }) => (
	<Route
		{...rest}
		render={(props) => (checkAuth() ? <Component {...props} /> : <Redirect to={{ pathname: '/sign-up' }} />)}
	/>
);

const Routes = () => (
	<Switch>
		<Route exact path="/" component={() => <Search />} />
		<AuthRoute exact path="/dashboard" component={() => <Dashboard />} />
		<AuthRoute exact path="/account" component={() => <Account />} />
		<Route exact path="/sign-in" component={() => <Login />} />
		<Route exact path="/sign-up" component={() => <Register />} />
	</Switch>
);

class HomePage extends Component {
	state = {};

	Auth = new Auth();

	logout = () => {
		this.Auth.logout();
		this.props.dispatch(isLoggedIn(false));
		this.props.history.push('/');
	};

	render() {
		return (
			<div className="home__grid-container home__homepage-container">
				<MainHeader logout={this.logout} isLoggedIn={this.props.user.isLoggedIn} />
				<div className="home__side-nav">
					<MainSideNav isLoggedIn={this.props.user.isLoggedIn} />
				</div>
				<div className="home__main-page-area">
					<Routes />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.users
	};
};

export default withRouter(connect(mapStateToProps)(HomePage));
