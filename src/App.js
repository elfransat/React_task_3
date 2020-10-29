import React, { Component } from "react";

class App extends Component {
  state = {
    likes: 0,
  };

  addHandler = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  removeHandler = () => {
    if (this.state.likes > 0) {
      this.setState({
        likes: this.state.likes - 1,
      });
    } else {
      this.setState({
        likes: 0,
      });
    }
  };

  resetHandler = () => {
    this.setState({
      likes: 0,
    });
  };

  render() {
    return (
      <div>
        <h1>Total Likes: {this.state.likes}</h1>
        <button onClick={this.addHandler}>Add One</button>
        <button onClick={this.removeHandler}>Remove One</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}

export default App;
