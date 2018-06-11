import React from 'react';


const DashSelect = () => (
    <div className="select">
        <div className="select__container">
            <div className="select__card">
                <a href="#">
                    <div className="select__card--icon">Icon</div>
                    <div className="select__card--title">Search</div>
                </a>
            </div>
            <div className="select__card">
                <a href="#">
                    <div className="select__card--icon">Icon</div>
                    <div className="select__card--title">My Events</div>
                </a>
            </div>
            <div className="select__card">
                <a href="#">
                    <div className="select__card--icon">Icon</div>
                    <div className="select__card--title">Sign Up</div>
                </a>
            </div>
            <div className="select__card">
                <a href="#">
                    <div className="select__card--icon">Icon</div>
                    <div className="select__card--title">Account Settings</div>
                </a>
            </div>
        </div>
    </div>
);

export default DashSelect;