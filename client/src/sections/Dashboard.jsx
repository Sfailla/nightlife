import React from 'react';

import DashOptions from '../objects/DashOptions';
import DashLowerContent from '../objects/Dash-LC';

import img1 from '../images/unsplash-nl1.jpg';
import img2 from '../images/unsplash-nl2.jpg';
import img3 from '../images/unsplash-nl3.jpg';
import img4 from '../images/unsplash-nl4.jpg';

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
        <div className="dashboard__selection">
            <DashOptions />
        </div>
        <div className="dash-content">
            <div className="lower-box dash-content__pic-box">
                <img src={img2} alt="lower box img" />
                {/* <img src={img4} alt="lower box img" /> */}
                <img src={img1} alt="lower box img" />
                <img src={img3} alt="lower box img" />
                <img src={img4} alt="lower box img" />
                
            </div>
            <div className="lower-box dash-content__content-box">
                <DashLowerContent />
            </div>
        </div>
    </div>
); 

export default Dashboard;