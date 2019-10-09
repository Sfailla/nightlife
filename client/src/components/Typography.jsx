import React from 'react';
import PropTypes from 'prop-types';

const Typography = ({
	headingPrimary,
	headingSecondary,
	headingTertiary,
	className,
	addStyles
}) => {
	if (headingPrimary) {
		return (
			<h1
				style={{ ...addStyles }}
				className={
					className ? (
						`heading-primary ${className}`
					) : (
						'heading-primary'
					)
				}
			>
				{headingPrimary}
			</h1>
		);
	}
	if (headingSecondary) {
		return (
			<h2
				style={{ ...addStyles }}
				className={
					className ? (
						`heading-secondary ${className}`
					) : (
						'heading-secondary'
					)
				}
			>
				{headingSecondary}
			</h2>
		);
	}
	if (headingTertiary) {
		return (
			<h3
				style={{ ...addStyles }}
				className={
					className ? (
						`heading-tertiary ${className}`
					) : (
						'heading-tertiary'
					)
				}
			>
				{headingTertiary}
			</h3>
		);
	}
};

Typography.propTypes = {
	headingPrimary: PropTypes.string,
	headingSecondary: PropTypes.string,
	headingTertiary: PropTypes.string,
	addStyles: PropTypes.object,
	className: PropTypes.string
};

export default Typography;
