import React, { useState, Fragment } from 'react';

import Typography from '../components/Typography';
import SearchResults from '../components/SearchResults';
import Button from '../components/Button';
import Loader from '../components/Loader';

class ResultsPage extends React.Component {
	state = {
		firstScroll: true
	};
	scrollToBottom = () => {
		this.findResults.scrollIntoView({ behavior: 'smooth' });
	};

	componentDidUpdate() {
		if (this.props.hasResults && this.state.firstScroll) {
			if (this.findResults) {
				this.scrollToBottom();
				this.setState({ firstScroll: false });
			}
		}
	}
	render() {
		const styles = {
			spinner: {
				width: '10rem',
				height: '10rem',
				background: 'transparent',
				position: 'absolute',
				left: '50%',
				bottom: '3rem',
				transform: 'translate(-50%, 0%)',

				display: this.props.isLoading ? 'flex' : 'none',
				justifyContent: 'center',
				alignItems: 'center'
			},
			resultsTitle: {
				textAlign: 'center',
				fontSize: '4rem',
				marginTop: '5rem'
			},
			button: {
				width: '18rem',
				height: '3.5rem',
				background: 'var(--primary-color)',
				color: 'white',
				margin: '5rem auto'
			},
			backToTop: {
				padding: '2rem',
				color: 'var(--secondary-color)'
			},
			btnWrapper: {
				marginTop: '2rem',
				textAlign: 'center'
			}
		};
		return (
			<Fragment>
				<div className="results">
					<div className="results__container">
						<div ref={node => (this.findResults = node)} />
						<div style={styles.spinner}>
							{this.props.isLoading && <Loader />}
						</div>

						<ul>
							{this.props.searchResults.length ? (
								<div>
									<div className="results__title">
										<Typography
											headingPrimary={`search results (${this.props
												.searchResults.length})`}
											addStyles={styles.resultsTitle}
										/>
									</div>

									<Button
										addStyles={styles.button}
										type="button"
										name="Clear Results"
										onClick={this.props.handleClearSearch}
									/>

									<SearchResults
										results={this.props.searchResults}
										events={this.props.events}
										isLoggedIn={this.props.isLoggedIn}
										history={this.props.history}
										addEvent={this.props.addEvent}
										initializeEventData={
											this.props.initializeEventData
										}
										disableAddEventButton={
											this.props.disableAddEventButton
										}
									/>

									<div style={styles.btnWrapper}>
										<a href="#search" style={styles.backToTop}>
											back to top
										</a>
									</div>
								</div>
							) : null}
						</ul>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default ResultsPage;
