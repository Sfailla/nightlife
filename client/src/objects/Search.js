import React, { Component } from 'react';

import Form from '../components/Form';

export default class Search extends Component {

    handleOnSubmit = (evt) => {
        evt.preventDefault();
    }

    handleOnChange = (evt) => {
        
    }

    render() {
        return (
            <div className="main">
                <h2 className="main__heading heading-primary u-center-text u-mt-25">
                    See whose going out tonight!
                </h2>
                <div className="main__search-card">
                    <div className="main__search-container">
                        <h2 className="main__heading-secondary heading-secondary u-center-text">
                            Search the local area for bars and clubs!
                        </h2>
                        <p className="main__heading-secondary--sub u-mb-25 u-center-text">
                            Please enter City and State, or Zip
                        </p>

                        <Form
                            className="main__search-form"
                            id_for="search"
                            type="text"
                            label="Search"
                            placeholder="Search"
                            handleOnChange={this.handleOnChange}
                            handleOnSubmit={this.handleOnSubmit} />

                    </div>
                </div>
            </div>
        );
    }
};
