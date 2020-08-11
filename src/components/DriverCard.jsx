import React from 'react';
import Rating from './Rating';
import './DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driverCard">
      <div className="col">
        <img className="driverPhoto" src={img} alt={name} />
      </div>
      <div className="col">
        <h4>{name}</h4>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
