import React from 'react';

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const BoxColor = (props) => {
  const { r, g, b } = props;
  const hexColor = rgbToHex(r, g, b);
  const textColor = r + g + b > (255 * 3) / 2 ? 'black' : 'white';

  return (
    <div
      className="row boxColor"
      style={{ backgroundColor: hexColor, color: textColor }}
    >
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{hexColor}</p>
    </div>
  );
};

export default BoxColor;
