import React from 'react';
import './DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {
  let rate = Math.round(rating);

  let finalMessage = '';
  function stars(rate) {
    for (let i = 0; i < rate; i++) {
      finalMessage += '★';
    }
    if (finalMessage.length < 5) {
      for (let i = rate; i < 5; i++) {
        finalMessage += '☆';
      }
    }
    return finalMessage;
  }
  stars(rate);

  return (
    <div className="driverCard">
      <div className="col">
        <img className="driverPhoto" src={img} />
      </div>
      <div className="col">
        <h4>{name}</h4>
        <h2>{finalMessage}</h2>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
