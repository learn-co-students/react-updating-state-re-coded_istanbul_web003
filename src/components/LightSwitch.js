import React from "react";

class LightSwitch extends React.Component {
  constructor() {
    super();

    // Initial state is defined
    this.state = {
      toggled: false,
    };
  }

  // when handleClick is called, setState will update the state so that toggle is reversed
  handleClick = () => {
    this.setState((previousState) => {
      return {
        toggled: !previousState.toggled,
      };
    });
  };

  render() {
    return (
      <div>
        <br />
        <button onClick={this.handleClick}>
          {this.state.toggled ? "ON" : "OFF"}
        </button>
        <span> If it is unnecessary, please turn it off. </span>
      </div>
    );
  }
}

export default LightSwitch;
