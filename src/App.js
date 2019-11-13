import React, { Component } from "react";
import Flag from "./components/Flag/Flag";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import flags from "./flags.json";
import "./App.css";

class App extends Component {
  // Setting this.state.flags to the flags json array
  state = {
    flags,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.flags.forEach(flag => {
      flag.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.flags.find((o, i) => {
      if (o.id === id) {
        if(flags[i].count === 0){
          flags[i].count = flags[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.flags.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.flags and render a flagFlag component for each flag object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Click Me React Game</Header>
        {this.state.flags.map(flag => (
          <Flag
            clickCount={this.clickCount}
            id={flag.id}
            key={flag.id}
            image={flag.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;