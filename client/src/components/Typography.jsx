import React from 'react';
import PropTypes from 'prop-types';

const Typography = ({
	headingPrimary,
	headingSecondary,
	headingTertiary,
	classname,
	addStyles
}) => {
	if (headingPrimary && classname) {
		return (
			<h1 style={{ ...addStyles }} className={`heading-primary ${classname}`}>
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
	if (headingSecondary && classname) {
		return (
			<h2 style={{ ...addStyles }} className={`heading-secondary ${classname}`}>
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
	if (headingTertiary && classname) {
		return (
			<h3 style={{ ...addStyles }} className={`heading-tertiary ${classname}`}>
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
	classname: PropTypes.string
};

export default Typography;
