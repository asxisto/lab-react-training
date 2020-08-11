import React from 'react';

class Dice extends React.Component {
  constructor() {
    super();
    this.state = {
      image: this.image,
      rolling: false,
    };
  }

  randomImage() {
    return Math.floor(Math.ceil() * 6);
  }

  handleDiceClick = () => {
    if (!this.state.rolling) {
      this.setState({
        image: './img/dice_empty.png',
        rolling: true,
      });
      setTimeout(() => {
        const image = this.randomImage();
        this.setState({
          image: image,
          rolling: false,
        });
      }, 1000);
    }
  };

  render() {
    return (
      <img src={this.state.image} alt="Dice" onClick={this.handleDiceClick} />
    );
  }

  // render() {
  //   return (
  //     <div className="diceGame">
  //       {this.state.clicked ? (
  //         <img
  //           src={this.props.imgClicked}
  //           onClick={this.handleDiceClick}
  //           alt="random dice"
  //         />
  //       ) : (
  //         <img
  //           src={this.state.dices[randomIntFromInterval(0, 5)]}
  //           onClick={this.handleDiceClick}
  //           alt="random dice"
  //         />
  //       )}
  //     </div>
  //   );
  // }
}

export default Dice;
