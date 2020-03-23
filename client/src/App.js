import React from "react";
import "./App.css";
import axios from "axios";
import PlayerCard from "./components/PlayerCard";

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
      <div>
        <h2>Sprint Challenge</h2>
        {this.state.players.map(player => {
          return (
            // console.log(player),
            <div key={player.id}>
              <PlayerCard playerData={player} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
