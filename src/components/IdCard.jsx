import React from 'react';
import './IdCard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="person">
      <div className="col">
        <img src={picture} alt="" />
      </div>
      <div className="col">
        <p>
          <strong>First name: </strong>
          {firstName}
        </p>
        <p>
          <strong>Last name: </strong>
          {lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {gender}
        </p>
        <p>
          <strong>Height: </strong>
          {height / 100}m
        </p>
        <p>
          <strong>Birth: </strong>
          {birth.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
