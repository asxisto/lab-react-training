import React from 'react';
import data from './../data/berlin.json';
import './Facebook.css';

class Facebook extends React.Component {
  constructor(props) {
    super(props);
    this.profile = {
      profileData: data,
    };
  }

  render() {
    const profilesList = this.profile.profileData.map((person) => (
      <div className="person" key={person.lastName}>
        <div className="col">
          <img src={person.img} className="personPhoto" alt="profile img" />
        </div>
        <div className="col">
          <p>
            <strong>First name: </strong>
            {person.firstName}
          </p>
          <p>
            <strong>Last name: </strong>
            {person.lastName}
          </p>
          <p>
            <strong>Country: </strong>
            {person.country}
          </p>
          <p>
            <strong>Type: </strong>
            {person.isStudent ? 'Student' : 'Teacher'}
          </p>
        </div>
      </div>
    ));
    return profilesList;
  }
}

export default Facebook;
