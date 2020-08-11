import React from 'react';
import './NumbersTable.css';

const NumbersTable = (props) => {
  const { limit } = props;
  let squares = [];

  for (let square = 1; square <= limit; square++) {
    //square % 2 === 0 ? 'impar' : 'par';
    squares.push(square);
  }

  console.log(squares);

  return (
    <div className="square">
      {squares.map((square) => {
        return (
          <ul
            key={square}
            style={{ backgroundColor: square % 2 === 0 ? 'red' : 'white' }}
            className="squareList"
          >
            <li className="squareTile">{square}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default NumbersTable;
