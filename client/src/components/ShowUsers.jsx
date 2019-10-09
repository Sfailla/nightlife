import React, { Fragment, PureComponent } from 'react';

import Typography from './Typography';

class ShowUsers extends PureComponent {
	render() {
		return (
			<Fragment>
				<div className="show-users__user-card">
					<div className="show-users__user-card-container">
						<div className="show-users__heading-wrapper">
							<Typography
								headingTertiary="Users"
								addStyles={{ fontSize: '1.6rem' }}
							/>
							<p style={{ paddingRight: '1.5rem' }}>online</p>
						</div>
						<div className="show-users__bottom-card">
							<hr />
							<ul className="show-users__content">
								{this.props.displayUsers()}
							</ul>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default ShowUsers;
