import React from 'react';
import PropTypes from 'prop-types';

const Typography = ({
	headingPrimary,
	headingSecondary,
	headingTertiary,
	className,
	addStyles
}) => {
	if (headingPrimary && className) {
		return (
			<h1
				style={{ ...addStyles }}
				className={`heading-primary ${className}`}
			>
				{headingPrimary}
			</h1>
		);
	} else if (headingPrimary) {
		return (
			<h1 style={{ ...addStyles }} className={`heading-primary`}>
				{headingPrimary}
			</h1>
		);
	}
	if (headingSecondary && className) {
		return (
			<h2
				style={{ ...addStyles }}
				className={`heading-secondary ${className}`}
			>
				{headingSecondary}
			</h2>
		);
	} else if (headingSecondary) {
		return (
			<h2 style={{ ...addStyles }} className={`heading-secondary`}>
				{headingSecondary}
			</h2>
		);
	}
	if (headingTertiary && className) {
		return (
			<h3
				style={{ ...addStyles }}
				className={`heading-tertiary ${className}`}
			>
				{headingTertiary}
			</h3>
		);
	} else if (headingTertiary) {
		return (
			<h3 style={{ ...addStyles }} className={`heading-tertiary`}>
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
