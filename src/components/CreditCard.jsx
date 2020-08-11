import React from 'react';
import './CreditCard.css';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const zeroPad = (num, places) => String(num).padStart(places, '0');

  let cardLastNumbers = number.substr(-4);
  let expiringMonth = expirationMonth.toString().substr(-2);
  let expiringYear = expirationYear.toString().substr(-2);
  console.log(typeof expiringMonth);

  return (
    <div
      className="creditCard"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="creditCardTypeRow">
        {type === 'Visa' ? (
          <img className="creditCardType" src="./img/visa.png" alt="" />
        ) : (
          <img className="creditCardType" src="./img/master-card.svg" alt="" />
        )}
      </div>
      <div className="creditCardNumber">•••• •••• •••• {cardLastNumbers}</div>
      <div className="creditCardExpires">
        Expires {zeroPad(expiringMonth, 2)}/{expiringYear}
        <span>{bank}</span>
      </div>
      <div className="creditCardName">{owner}</div>
    </div>
  );
};

export default CreditCard;
