import React from 'react';

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class LikeButton extends React.Component {
  constructor() {
    super();
    this.likes = 0;
    this.likesMessage = ' Likes';
    this.bgColor = 'purple';
    this.state = {
      likes: 0,
      likesMessage: ' Likes',
      bgColor: 'blue',
    };
  }

  handleLikeButtonClick = () => {
    let colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    this.setState((previousState) => {
      return {
        likes: previousState.likes + 1,
        likesMessage: previousState.likes === 0 ? ' Like' : ' Likes',
        bgColor: (previousState.bgColor = colors[randomIntFromInterval(0, 5)]),
      };
    });
  };

  render() {
    return (
      <button
        onClick={this.handleLikeButtonClick}
        style={{ backgroundColor: this.state.bgColor }}
      >
        <span>{this.state.likes}</span>
        {this.state.likesMessage}
      </button>
    );
  }
}

export default LikeButton;
