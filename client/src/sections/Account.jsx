import React, { Component } from 'react';

import { BorderlessForm } from '../components/Form';
import RadioGroup from '../components/RadioGroup';

import guyAvatar from '../images/person-guy-flat.png';
import girlAvatar from '../images/person-girl-flat.png';


class Account extends Component {

    state = {
        avatarSelect: 'male-avatar',
        isCustom: false,
        avatar: '',
        email: '',
        location: '',
        description: '',
    }

    handleOnChange = (evt) => {
        evt.persist();
        const { name, value } = evt.target;

        console.log({[name]: value})
        this.setState(() => ({ [name]: value }))
    }

    handleSelectAvatar = () => {
        const avatar = this.state.avatarSelect;
        let imgSrc = null;

        switch(avatar) {
            case 'custom-avatar':
                imgSrc = this.state.avatar;
                break;
            case 'male-avatar':
                imgSrc = guyAvatar;
                break;
            case 'female-avatar':
                imgSrc = girlAvatar;
                break;
            default:
                return null;
        }

        return imgSrc;
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
                        
                    </div>
                    <hr />
                    <div className="acct__avatar-wrapper">
                        <div className="acct__avatar">
                            <img src={this.handleSelectAvatar() } alt="no-avatar"/>
                        </div>
                        <div className="acct__checkboxes">
                            <RadioGroup
                                labelName="male-avatar"
                                type="radio"
                                id="male-avatar"
                                handleChecked={this.state.avatarSelect === 'male-avatar'}
                                handleOnChange={this.handleOnChange}
                                name="avatarSelect" />
                            
                            <RadioGroup
                                labelName="female-avatar"
                                type="radio"
                                id="female-avatar"
                                handleChecked={this.state.avatarSelect === 'female-avatar'}
                                handleOnChange={this.handleOnChange}
                                name="avatarSelect" />
                            
                            <RadioGroup
                                labelName="custom-avatar"
                                type="radio"
                                id="custom-avatar"
                                handleChecked={this.state.avatarSelect === 'custom-avatar'}
                                handleOnChange={this.handleOnChange}
                                name="avatarSelect" />

                            <input type="button" value="Submit" />
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
                                label="Add-Avatar-url"
                                handleOnSubmit={this.handleOnSubmit}
                                handleOnChange={this.handleOnChange} />

                            <BorderlessForm
                                type="email"
                                name="email"
                                label="Add-Email" 
                                handleOnSubmit={this.handleOnSubmit}
                                handleOnChange={this.handleOnChange} />

                            <BorderlessForm
                                type="text"
                                name="location"
                                label="Add-Location"
                                handleOnSubmit={this.handleOnSubmit}
                                handleOnChange={this.handleOnChange} />

                            <textarea 
                                name="description"
                                rows={5}
                                placeholder="Add-Description"
                                onSubmit={this.handleOnSubmit}
                                onChange={this.handleOnChange} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;