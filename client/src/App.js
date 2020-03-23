import React from "react";
import "./App.css";
import axios from "axios";
import NavBar from "./components/NavBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log("CDM: res: ", res);
        this.setState({
          players: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div data-testid="player-list">
          {this.state.players.map(player => {
            return (
              // console.log(player),
              <div key={player.id}>
                <h3>{player.name}</h3>
                <p>Country: {player.country}</p>
                <p>Searches: {player.searches}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
