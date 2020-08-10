import React from 'react';

const Random = (props) => {
  const { max, min } = props;
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div className="row">
      <p>
        Random value between {props.min} and {props.max} is {randomNumber}
      </p>
    </div>
  );
};

export default Random;
