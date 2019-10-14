import React from 'react';
import PropTypes from 'prop-types';

import {
	withRouter,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
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
import authorize from '../utils/AuthClass';
import BGImg from '../images/city-skyline.png';

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
		logout: PropTypes.func,
		isLoggedIn: PropTypes.func
	};

	state = {
		openDrawer: false
	};

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
		authorize
			.authFetch('/users/presence', {
				method: 'PATCH',
				body: JSON.stringify({ isLoggedIn })
			})
			.then(doc => doc.json())
			.then(doc => {})
			.catch(err => console.error(err));
	};

	logout = () => {
		this.setUserPresence(false);
		authorize.logout();
		this.props.isLoggedIn(false);
		this.props.history.push('/');
	};

	componentDidMount() {
		const body = document.getElementsByTagName('body')[0];
		body.style.backgroundImage = `url('${BGImg}')`;
	}

	render() {
		let backdrop;
		if (this.state.openDrawer) {
			backdrop = <Backdrop closeDrawer={this.handleCloseDrawer} />;
		}
		return (
			<div className="home__grid-container">
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
					<SideDrawer
						username={this.props.user.username}
						avatar={this.props.user.avatar}
						isLoggedIn={this.props.user.isLoggedIn}
						logout={this.logout}
						showDrawer={this.state.openDrawer}
						closeDrawer={this.handleCloseDrawer}
					/>
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
						<AuthRoute
							exact
							path="/account"
							component={props => (
								<Account {...props} logout={this.logout} />
							)}
						/>
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
