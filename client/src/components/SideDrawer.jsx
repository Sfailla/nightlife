import React from 'react';

import MobileNavigation from './MobileNavigation';
import Avatar from './Avatar';
import Typography from './Typography';
import LogoutButton from './LogoutButton';

const SideDrawer = props => {
	let drawerClass = 'side-drawer';

	if (props.showDrawer) {
		drawerClass = 'side-drawer open';
	}
	return (
		<div className={drawerClass}>
			<div className="side-drawer__avatar-section">
<<<<<<< HEAD
				<div className="side-drawer__profile-wrapper">
					{props.isLoggedIn ? (
						<ul>
							<li>
								<Avatar avatar={props.avatar} size={'8rem'} />
							</li>
							<li>
								<Typography
									addStyles={{ color: 'white' }}
									headingTertiary={props.username}
								/>
							</li>
							<li>
								<LogoutButton
									logout={props.logout}
									addStyles={{ width: '12rem' }}
									name="logout"
								/>
							</li>
						</ul>
					) : (
						<div className="side-drawer__img-wrapper">
							<div className="side-drawer__logo-wrapper">
								<p>NIGHT</p>
								<p>LIFE</p>
							</div>
							{/* <img
								className="side-drawer__img"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFCT8vZwhI1Vfxfr3GMMSsV1EKuLAxYK_hfwx2knuwiYK-buW"
							/> */}
						</div>
					)}
				</div>
=======
				{props.isLoggedIn ? (
					<ul>
						<li>
							<Avatar avatar={props.avatar} size={'8rem'} />
						</li>
						<li>
							<Typography
								addStyles={{ color: 'white' }}
								headingTertiary={props.username}
							/>
						</li>
						<li>
							<LogoutButton
								logout={props.logout}
								addStyles={{ width: '12rem' }}
								name="logout"
							/>
						</li>
					</ul>
				) : (
					<div className="side-drawer__avatar-section--no-auth">
						<p>NIGHTLIFE</p>
					</div>
				)}
>>>>>>> development
			</div>
			<div className="side-drawer__nav-section">
				<MobileNavigation closeDrawer={props.handleCloseDrawer} />
			</div>
		</div>
	);
};

export default SideDrawer;
