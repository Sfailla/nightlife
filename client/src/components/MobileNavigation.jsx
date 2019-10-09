import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Icon } from './Icon';

const MobileNavigation = props => {
	return (
		<Fragment>
			<ul className="side-drawer__ul">
				{props.user.isLoggedIn && (
					<li className="side-drawer__li">
						<Link
							to="/dashboard"
							onClick={() => props.closeDrawer()}
							className="side-drawer__link"
						>
							<div className="side-drawer__link-wrapper">
								<Icon
									icon="dashboard"
									size={25}
									view1={24}
									view2={24}
								/>
								<span>DASHBOARD</span>
							</div>
						</Link>
					</li>
				)}
				{props.user.isLoggedIn && (
					<li className="side-drawer__li">
						<Link
							to="/account"
							onClick={() => props.closeDrawer()}
							className="side-drawer__link"
						>
							<div className="side-drawer__link-wrapper">
								<Icon
									icon="settings"
									size={25}
									view1={32}
									view2={32}
								/>
								<span>SETTINGS</span>
							</div>
						</Link>
					</li>
				)}
				<li className="side-drawer__li">
					<Link
						onClick={() => props.closeDrawer()}
						to="/"
						className="side-drawer__link"
					>
						<div className="side-drawer__link-wrapper">
							<Icon icon="search" size={25} view1={20} view2={20} />
							<span className="side-drawer__search-title">
								SEARCH
							</span>
						</div>
					</Link>
				</li>
				{!props.user.isLoggedIn && (
					<li className="side-drawer__li">
						<Link
							to="/sign-up"
							onClick={() => props.closeDrawer()}
							className="side-drawer__link"
						>
							<div className="side-drawer__link-wrapper">
								<Icon icon="puzzle" size={25} view1={26} view2={28} />
								<span>REGISTER</span>
							</div>
						</Link>
					</li>
				)}
				{!props.user.isLoggedIn && (
					<li className="side-drawer__li">
						<Link
							to="/sign-in"
							onClick={() => props.closeDrawer()}
							className="side-drawer__link"
						>
							<div className="side-drawer__link-wrapper">
								<Icon
									size={25}
									view1={16}
									view2={28}
									icon="code-branch"
								/>
								<span>SIGN IN</span>
							</div>
						</Link>
					</li>
				)}
			</ul>
		</Fragment>
	);
};

const mapStateToProps = state => {
	return {
		user: state.users
	};
};

export default connect(mapStateToProps)(MobileNavigation);
