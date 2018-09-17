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
    clicked: [

    ]
  };

  handleIncrement = () => {
    const newScore = this.state.actualScore + 1;
    this.setState({
      actualScore: newScore
    });
    
    console.log(newScore);
    
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore 
      });
    }
    else if (newScore === 12) {
      alert("You win!");
    }
    this.handlePosition();
  };

  handlePosition = () => {
    let changePosition = rearrangeFriends(friends);
    this.setState({ friends: changePosition });
  };

  handleReset = () => {
    this.setState({
      actualScore: 0,
      topScore: this.state.topScore,
      clicked: false
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
      this.handleReset();
    }
  };

  render() {
    return (
      <Wrapper>
        <NavBar
          score={this.state.newScore}
          topScore={this.state.topScore}
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
