import React from "react";
import Result from "../result/result.comp";
import "./styles.game.css";
class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      userScore: 0,
      botScore: 0,
      userChoice: "None",
      botChoice: "None",
      result: null,
    };
  }
  handleClick = (e) => {
    const id = parseInt(e.target.id);
    let botVal = Math.floor(Math.random() * Math.floor(3));
    this.checkRes(id, botVal);
  };
  checkRes = (a, b) => {
    if (a === b) {
      this.setState({ result: "Draw" });
      if (a === 0) {
        this.setState({ userChoice: "Rock", botChoice: "Rock" });
      }
      if (a === 1) {
        this.setState({ userChoice: "Paper", botChoice: "Paper" });
      }
      if (a === 2) {
        this.setState({ userChoice: "Scissor", botChoice: "Scissor" });
      }
    }
    if (a === 0 && b === 1) {
      this.setState({
        userChoice: "Rock",
        botChoice: "paper",
        botScore: this.state.botScore + 1,
        result: "Bot Wins",
      });
    }
    if (a === 0 && b === 2) {
      this.setState({
        userChoice: "Rock",
        botChoice: "scissor",
        userScore: this.state.userScore + 1,
        result: "You Win",
      });
    }
    if (a === 1 && b === 0) {
      this.setState({
        userChoice: "Paper",
        botChoice: "Rock",
        userScore: this.state.userScore + 1,
        result: "You Win",
      });
    }
    if (a === 1 && b === 2) {
      this.setState({
        userChoice: "Paper",
        botChoice: "Scissor",
        botScore: this.state.botScore + 1,
        result: "Bot Wins",
      });
    }
    if (a === 2 && b === 0) {
      this.setState({
        userChoice: "Scissor",
        botChoice: "Rock",
        botScore: this.state.botScore + 1,
        result: "Bot Wins",
      });
    }
    if (a === 2 && b === 1) {
      this.setState({
        userChoice: "Scissor",
        botChoice: "Paper",
        userScore: this.state.userScore + 1,
        result: "You Win",
      });
    }
  };
  resetgame = () => {
    this.setState({
      userScore: 0,
      botScore: 0,
      userChoice: "None",
      botChoice: "None",
      result: null,
    });
  };
  render() {
    return (
      <div>
        <Result data={this.state}></Result>
        <div className="game-container">
          <button id="0" onClick={this.handleClick}>
            Rock
          </button>
          <button id="1" onClick={this.handleClick}>
            Paper
          </button>
          <button id="2" onClick={this.handleClick}>
            Scissor
          </button>
        </div>

        <div className="reset">
          <button className="reset-btn" onClick={this.resetgame}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Game;
