import React from 'react';
import Group from './Group';
import "./profilePage.css"


class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Yağmur',
            surname: 'Akarken',
            age: 22,
            email: 'yakarken18@ku.edu.tr'
        };
    }

    render() {
        const { name, surname, age, email } = this.state;

        return (
            <div className="profile-container">
                <div className="profile-field">
                    <h1>My Profile</h1>
                </div>
                <div className="profile-field">
                    <div className="profile-key">Name:</div>
                    <div className="profile-value">{name}</div>
                </div>
                <div className="profile-field">
                    <div className="profile-key">Surname:</div>
                    <div className="profile-value">{surname}</div>
                </div>
                <div className="profile-field">
                    <div className="profile-key">Age:</div>
                    <div className="profile-value">{age}</div>
                </div>
                <div className="profile-field">
                    <div className="profile-key">Email:</div>
                    <div className="profile-value">{email}</div>
                </div>
                <div className="profile-field">
                    <div className="profile-key">Flexibility:</div>
                    <div className="profile-value">
                        <select>
                            <option>I am not flexible</option>
                            <option>I am flexible</option>
                            <option>I am very flexible</option>
                        </select>
                    </div>
                </div>
                <div className="complete-profile-button">
                    <button>Complete My Profile</button>
                </div>
            </div>
        );
    }
}

export default ProfilePage;
