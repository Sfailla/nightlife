import React from 'react';


const Dashboard = () => (
    <div className="dashboard__container">
        <div className="dashboard__title-wrapper">
            <div className="dashboard__title heading-primary">
                Dashboard
            </div>
            <div className="dashboard__sub-title heading-secondary">
                What would you like to do?
            </div>
        </div>
        <div className="dashboard__selection-component">
            <div className="select">
                <div className="select__container">
                    <div className="select__card">
                        <a href="#">
                            <div className="select__card--title">Search</div>
                            <div className="select__card--icon">Icon</div>
                        </a>
                    </div>
                    <div className="select__card">
                        <a href="#">
                            <div className="select__card--title">My Events</div>
                            <div className="select__card--icon">Icon</div>
                        </a>
                    </div>
                    <div className="select__card">
                        <a href="#">
                            <div className="select__card--title">Sign Up</div>
                            <div className="select__card--icon">Icon</div>
                        </a>
                    </div>
                    <div className="select__card">
                        <a href="#">
                            <div className="select__card--title">Account Settings</div>
                            <div className="select__card--icon">Icon</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
); 

export default Dashboard;