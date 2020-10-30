import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    likes: 0,
  };

  addHandler = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
    let circleChanger = document.querySelector(".circle");
    if (this.state.likes % 2 === 0 || this.state.likes % 2 === 2) {
      circleChanger.style.background = "blue";
    } else {
      circleChanger.style.background = "red";
    }
  };

  removeHandler = () => {
    if (this.state.likes > 0) {
      this.setState({
        likes: this.state.likes - 1,
      });
    }
    let circleChanger = document.querySelector(".circle");
    if (this.state.likes % 2 === 0 || this.state.likes % 2 === 2) {
      circleChanger.style.background = "blue";
    } else {
      circleChanger.style.background = "red";
    }
  };

  resetHandler = () => {
    this.setState({
      likes: 0,
    });
    let circleChanger = document.querySelector(".circle");
    circleChanger.style.background = "red";
  };

  render() {
    return (
      <div class="container">
        <div class="circle"></div>
        <h1>Total Likes: {this.state.likes}</h1>
        <div class="buttons">
          <button onClick={this.addHandler}>Add One</button>
          <button onClick={this.removeHandler}>Remove One</button>
          <button onClick={this.resetHandler}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
