import React, { Component } from "react";
import "./App.css";
import { Jumbotron } from "./components/Jumbotron";
import { Header } from "./components/Header";
import Wrapper from "./components/Wrapper";
import presidents from "./presidents.json";
import Card from "./components/Card"

export class App extends Component {

state = {
  presidents
}

  render() {
    return (
      <div className="App">
      <Header />
      <Jumbotron />
      <Wrapper>
        {this.state.presidents.map(presidents => (
          <Card
            id={presidents.id}
            key={presidents.id}
            name={presidents.name}
            image={presidents.image}
            clicked={presidents.clicked}
          />
        ))}
      </Wrapper>
    </div>
    )
  }
}

export default App;




