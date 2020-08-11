import React from 'react';

class ClickablePicture extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  handleImageClick = () => {
    this.setState({
      clicked: !this.state.clicked ? true : false,
    });
  };

  render() {
    return (
      <div>
        {this.state.clicked ? (
          <img
            src={this.props.imgClicked}
            onClick={this.handleImageClick}
            alt=""
          />
        ) : (
          <img src={this.props.img} onClick={this.handleImageClick} alt="" />
        )}
      </div>
    );
  }
}

export default ClickablePicture;
