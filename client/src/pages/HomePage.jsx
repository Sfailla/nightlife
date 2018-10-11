import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoggedIn } from '../actions/users';

import MainHeader from '../components/MainHeader';
import MainSideNav from '../components/MainSideNav';
import Search from '../sections/Search';
import Account from '../sections/Account';
import Dashboard from '../sections/Dashboard';
import Register from '../sections/Register';
import Login from '../components/Login';

import { checkAuth } from '../utils/functions';
import Auth from '../utils/AuthClass';

const AuthRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			checkAuth() ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: '/sign-in' }} />
			)}
	/>
);

class HomePage extends React.Component {
	static propTypes = {
		isLoggedIn: PropTypes.bool,
		logout: PropTypes.func
	};

	Auth = new Auth();

	logout = () => {
		this.Auth.logout();
		this.props.dispatch(isLoggedIn(false));
		this.props.history.push('/');
	};

	render() {
		return (
			<div className="home__grid-container home__homepage-container">
				<MainHeader
					logout={this.logout}
					isLoggedIn={this.props.user.isLoggedIn}
				/>
				<div className="home__side-nav">
					<MainSideNav isLoggedIn={this.props.user.isLoggedIn} />
				</div>
				<div className="home__main-page-area">
					<Switch>
						<Route exact path="/" render={props => <Search {...props} />} />
						<AuthRoute
							exact
							path="/dashboard"
							component={props => <Dashboard {...props} logout={this.logout} />}
						/>
						<AuthRoute
							exact
							path="/account"
							component={props => <Account {...props} />}
						/>
						<Route exact path="/sign-in" render={() => <Login />} />
						<Route exact path="/sign-up" render={() => <Register />} />
					</Switch>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.users
	};
};

export default withRouter(connect(mapStateToProps)(HomePage));
