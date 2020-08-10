import React from 'react';

const Rating = (props) => {
  let rating = Math.round(props.children);

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
  stars(rating);

  return (
    <div className="ratingStars">
      {rating} {finalMessage}
    </div>
  );
};

export default Rating;
