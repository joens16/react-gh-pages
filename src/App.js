import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import NavBar from "./components/NavBar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import "./App.css";

function rearrangeFriends(array) {
  array.sort(function (a, b) { return 0.5 - Math.random() });
  return array;
};

class App extends Component {
  state = {
    friends,
    newScore: 0,
    TopScore: 0,
    clicked: []
  };

  handleIncrement = () => {
    const score = this.state.newScore + 1;
    this.setState({
      newScore: score
    });
    
    console.log(score);
    
    if (this.state.newScore >= this.state.TopScore) {
      this.setState({ TopScore: score 
      });
    }
    else if  (this.state.newScore === 2) {
      alert("You win!");
      console.log("This is what i want to see" + this.state.newScore)
    }
    this.handlePosition();
  };

  handlePosition = () => {
    let changePosition = rearrangeFriends(friends);
    this.setState({ friends: changePosition });
  };

  handleReset = () => {
    this.setState({
      newScore: 0,
      TopScore: this.state.TopScore,
      clicked: []
    });
    this.handlePosition();
  };

  handleClick = id => {

    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.state.clicked.push(id);
      console.log(this.state.clicked);
      this.setState({ clicked: this.state.clicked });
    } else {
      alert("You lost!!")
      this.handleReset();
    }
  };

  render() {
    return (
      <Wrapper>
        <NavBar
          newScore={this.state.newScore}
          TopScore={this.state.TopScore}
        />
        <Jumbotron />
        <Container>
          <Row>

            {this.state.friends.map(friends => (
              <Column size="md-3 sm-6">
                <FriendCard
                  key={friends.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handlePosition={this.handlePosition}
                  id={friends.id}
                  image={friends.image}
                />
              </Column>
            ))}
          </Row>
        </Container>


      </Wrapper>
    );
  }

}

export default App;
