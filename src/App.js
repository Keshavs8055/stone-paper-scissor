import React from "react";
import Game from "./components/game/game.comp";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <h1>Rock, Paper, Scissor</h1>
          <h5>By Keshav Sharma </h5>
        </div>
        <Game />
      </div>
    );
  }
}

export default App;
