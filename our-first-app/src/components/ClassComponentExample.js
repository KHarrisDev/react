import React, { Component } from "react";

// declare a class component
class ClassComponentExample extends Component {
  constructor(props) {
    super(props);
    // the state is stored in the constructor
    this.state = {
      count: 0
    };
  }
  // setState in these functions will update the state of the component
  incrementCount = () => {
    this.setState({
        count: this.state.count + 1,
    });
  };

  decrementCount = () => {
    this.setState({
        count: this.state.count - 1,
    });
  };

  render() {
    return (
        <div>
          <h1>Welcome to my counter app</h1>
          <p>The count is: {this.state.count}</p>
          {/* onClick is mousehandler function that is triggered by mouse clicks */}
          <button onClick={this.decrementCount}>-</button>
          <button onClick={this.incrementCount}>+</button>
        </div>
      );
  }
}

export default ClassComponentExample;