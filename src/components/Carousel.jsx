import React from 'react';
import './Carousel.css';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  // handleLeftClick = () => {
  //   this.setState({
  //     index:
  //       this.state.index === 0
  //         ? this.props.imgs.length - 1
  //         : this.state.index + 1,
  //   });
  // };

  // handleRightClick = () => {
  //   this.setState({
  //     index:
  //       this.state.index === this.props.imgs.length -1
  //         ? 0
  //         : this.state.index + 1,
  //   });
  // };

  handleRightClick = () => {
    this.navigate(1);
  };

  handleLeftClick = () => {
    this.navigate(-1);
  };

  navigate(value) {
    const currentIndex = this.state.index;
    const amountOfImages = this.props.imgs.length;
    const index = (currentIndex + value + amountOfImages) % amountOfImages;

    this.setState({
      index,
    });
  }

  render() {
    return (
      <div className="carousel">
        <button onClick={this.handleLeftClick}>{'<'}</button>
        <img src={this.props.imgs[this.state.index]} alt="New Carousel Img" />
        <button onClick={this.handleRightClick}>{'>'}</button>
      </div>
    );
  }
}

export default Carousel;
