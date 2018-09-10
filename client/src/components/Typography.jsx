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
			<p
				style={{ ...addStyles }}
				className={`heading-primary ${classname}`}
			>
				{headingPrimary}
			</p>
		);
	} else if (headingPrimary) {
		return (
			<p style={{ ...addStyles }} className={`heading-primary`}>
				{headingPrimary}
			</p>
		);
	}
	if (headingSecondary && classname) {
		return (
			<p
				style={{ ...addStyles }}
				className={`heading-secondary ${classname}`}
			>
				{headingSecondary}
			</p>
		);
	} else if (headingSecondary) {
		return (
			<p style={{ ...addStyles }} className={`heading-secondary`}>
				{headingSecondary}
			</p>
		);
	}
	if (headingTertiary && classname) {
		return (
			<p
				style={{ ...addStyles }}
				className={`heading-tertiary ${classname}`}
			>
				{headingTertiary}
			</p>
		);
	} else if (headingTertiary) {
		return (
			<p style={{ ...addStyles }} className={`heading-tertiary`}>
				{headingTertiary}
			</p>
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
