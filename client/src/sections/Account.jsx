import React, { Component } from 'react';

import Form, { BorderlessForm } from '../components/Form';
import RadioGroup from '../components/RadioGroup';

import noAvatar from '../images/noAvatar.jpg'  // switch to SVG... 
import guyAvatar from '../images/person-guy-flat.png';
import girlAvatar from '../images/person-girl-flat.png';


class Account extends Component {

    state = {
        selectedAvatar: 'male-avatar',
    }

    handleOnChange = (evt) => {
        evt.persist();
        this.setState(() => ({ selectedAvatar: evt.target.value }))
    }

    handleSelectAvatar = () => {
        const avatar = this.state.selectedAvatar;
        let imgSrc = noAvatar;

        switch(avatar) {
            case 'no-avatar':
                imgSrc = noAvatar;
                break;
            case 'male-avatar':
                imgSrc = guyAvatar;
                break;
            case 'female-avatar':
                imgSrc = girlAvatar;
                break;
            default:
                'no image available';
        }

        return imgSrc;
    }

    componentDidUpdate() {
        document.querySelector('input[name=avatar-select]:checked').value;
    }

    render() {

        return (
            <div className="acct">
                <p className="acct__title heading-primary">
                    Account
                </p>
                <p className="acct__sub-title heading-secondary">
                    create a profile
                </p>
                <div className="acct__profile-card">
                    <div className="acct__wrapper">
                        <div className="acct__card-title heading-tertiary">
                            Profile
                        </div>
                        <a href="#" role="button">
                            Save
                        </a>
                    </div>
                    <hr />
                    <div className="acct__avatar-wrapper">
                        <div className="acct__avatar">
                            <img src={this.handleSelectAvatar()} alt="no-avatar"/>
                        </div>
                        <div className="acct__checkboxes">
                            <RadioGroup
                                labelName="guy-avatar"
                                type="radio"
                                id="male-avatar"
                                handleChecked={this.state.selectedAvatar === 'male-avatar'}
                                handleOnChange={this.handleOnChange}
                                name="avatar-select" />
                            
                            <RadioGroup
                                labelName="female-avatar"
                                type="radio"
                                id="female-avatar"
                                handleChecked={this.state.selectedAvatar === 'female-avatar'}
                                handleOnChange={this.handleOnChange}
                                name="avatar-select" />
                            
                            <RadioGroup
                                labelName="no-avatar"
                                type="radio"
                                id="no-avatar"
                                handleChecked={this.state.selectedAvatar === 'no-avatar'}
                                handleOnChange={this.handleOnChange}
                                name="avatar-select" />
                        </div>
                    </div>
                    <hr/>
                    <div className="acct__content">
                        <div className="acct__names">
                            <ul>
                                <li>Add An Avatar URL</li>
                                <li>Add Email</li>
                                <li>Add Location</li>
                                <li>Add Description</li>
                            </ul>
                            
                        </div>
                        <div className="acct__form">                            
                            <BorderlessForm 
                                type="text" 
                                name="avatar"
                                label="Add-Avatar-url" />

                            <BorderlessForm
                                type="email"
                                name="email"
                                label="Add-Email" />

                            <BorderlessForm
                                type="text"
                                name="location"
                                label="Add-Location" />

                            <textarea 
                                name="description"
                                rows={5}
                                placeholder="Add-Description" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;