import React, { Component }  from 'react';

import Header from '../components/Header'
import Layout from '../layout/Layout';

export default class Homepage extends Component {
    render() {
        return (
            <div> 
                <Header />
                <div className="container">
                    <Layout />
                </div>
            </div>
        );
    }
}
