import React from 'react';

const Rating = (props) => {
  let rating = Math.round(props.children);

  return (
    <div className="ratingStars">
      {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
    </div>
  );

  // OVER ENGINEERING SOLUTION
  //
  // let finalMessage = '';
  // for (let i = 0; i < 5; i++) {
  //   if (i < rating) {
  //     finalMessage += '★';
  //   } else {
  //     finalMessage += '☆';
  //   }
  // }

  // function stars(rate) {
  //   for (let i = 0; i < rate; i++) {
  //     finalMessage += '★';
  //   }
  //   if (finalMessage.length < 5) {
  //     for (let i = rate; i < 5; i++) {
  //       finalMessage += '☆';
  //     }
  //   }
  //   return finalMessage;
  // }
  // stars(rating);

  // return <div className="ratingStars">{finalMessage}</div>;
};

export default Rating;
