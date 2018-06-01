import React, { Component } from 'react';

import Form from '../components/Form';
import SearchResComponent from '../components/SearchRes';

export default class Search extends Component {
    state = {
        searchVal: [],
        results: [],
        errors: [],
    }

    handleOnSubmit = (evt) => {
        evt.preventDefault();

        // basic error handling
        if (this.state.searchVal.length > 0) {
            evt.target.elements.search.value = '';
            this.handleFetchData();            
        } else {
            this.setState(() => ({ errors: '** you must enter a location to search **' }))
        }
    }

    handleOnChange = (evt) => {
        const { name, value } = evt.target;
        this.setState(() => ({ searchVal: value }))
    }

    getToken = () => {
        return '8L1CGTC6CeVEUvOTTAjyudXqIv4GnSNNSTOIb1xCyEhAbfcBAb-0ViQus0U-jN31RYXOuKadsAkLsJm_40A8e-gFzsBrIOSZHElUiirCKVgbcCfzSfHH1Qor6PINW3Yx';
    }

    handleFetchData = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${this.state.searchVal}&limit=20&term=nightclubs,bars,clubs`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${this.getToken()}`,
            }
        })
            .then(res => res.json())
            .then(res => this.setState(() => ({ results: res.businesses })))      
    }

    componentDidMount() {}

    render() {
        return (
            <div className="search">
                <h2 className="search__heading heading-primary u-center-text u-mt-25">
                    See whose going out tonight!
                </h2>
                <div className="search__search-card">
                    <div className="search__search-container">
                        <h2 className="search__heading-secondary heading-secondary u-center-text">
                            Search any area for bars and clubs!
                        </h2>
                        <p className="search__heading-secondary--sub u-mb-25 u-center-text">
                            Please enter City and State, or Zip
                        </p>

                        <Form
                            className="search__search-form"
                            id_name="search"
                            type="text"
                            label="Enter location"
                            placeholder="Enter location"
                            autocomplete={false}
                            handleOnChange={this.handleOnChange}
                            handleOnSubmit={this.handleOnSubmit} />
                                                
                        {this.state.errors.length > 0 ? <p>{this.state.errors}</p> : null}

                    </div>
                </div>

                <br/>

                <div className="results">
                    <ul>
                        {this.state.results.length ? this.state.results.map((data) => {
                            return <SearchResComponent 
                                        key={data.id}
                                        name={data.name}
                                        location={data.location.address1}
                                        img_src={data.image_url}
                                        img_alt="bar images" />
                        }) : <h1>No Data Yet</h1>}
                    </ul>
                </div>
            </div>
        );
    }
};
