import React from 'react';
import PropTypes from 'prop-types';

import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoggedIn } from '../actions/users';
import { checkAuth } from '../utils/functions';

import MainHeader from '../components/MainHeader';
import MainSideNav from '../components/MainSideNav';
import Search from '../sections/Search';
import Account from '../sections/Account';
import Dashboard from '../sections/Dashboard';
import Register from '../sections/Register';
import Login from '../components/Login';
import SideDrawer from '../components/SideDrawer';
import Backdrop from '../components/Backdrop';
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
		logout: PropTypes.func
	};

	state = {
		openDrawer: false
	};

	Auth = new Auth();

	handleOpenDrawer = () => {
		this.setState(prevState => {
			return {
				openDrawer: !prevState.openDrawer
			};
		});
	};

	handleCloseDrawer = () => {
		this.setState({ openDrawer: false });
	};

	setUserPresence = isLoggedIn => {
		this.Auth
			.authFetch('/users/presence', {
				method: 'PATCH',
				body: JSON.stringify({ isLoggedIn })
			})
			.then(doc => doc.json())
			.then(doc => {
				console.log(doc);
			})
			.catch(err => console.error(err));
	};

	Auth = new Auth();

	logout = () => {
		this.setUserPresence(false);
		this.Auth.logout();
		this.props.isLoggedIn(false);
		this.props.history.push('/');
	};

	render() {
		let backdrop;
		if (this.state.openDrawer) {
			backdrop = <Backdrop closeDrawer={this.handleCloseDrawer} />;
		}
		return (
			<div className="home__grid-container home__homepage-container">
				<MainHeader
					logout={this.logout}
					isLoggedIn={this.props.user.isLoggedIn}
					isOpen={this.state.openDrawer}
					openDrawer={this.handleOpenDrawer}
				/>
				<div className="home__side-nav">
					<MainSideNav isLoggedIn={this.props.user.isLoggedIn} />
				</div>
				<div className="home__main-page-area">
					<SideDrawer showDrawer={this.state.openDrawer} />
					{backdrop}
					<Switch>
						<Route exact path="/" component={Search} />
						<AuthRoute
							exact
							path="/dashboard"
							component={props => (
								<Dashboard
									{...props}
									currentUser={this.props.user}
									logout={this.logout}
								/>
							)}
						/>
						<AuthRoute exact path="/account" component={Account} />
						<Route exact path="/sign-in" component={Login} />
						<Route exact path="/sign-up" component={Register} />
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

const HomePageWithRouter = withRouter(
	connect(mapStateToProps, { isLoggedIn })(HomePage)
);

export default HomePageWithRouter;
