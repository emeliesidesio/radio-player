import React from "react";
import Station from "./station";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioChannels: []
    };
  }

  componentDidMount() {
    fetch("https://api.sr.se/api/v2/channels?format=json&size=100")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ radioChannels: json.channels });
      });
  }

  render() {
    return (
      <div className="station">
        <h1>Lyssna direkt på Sveriges Radio</h1>
        {this.state.radioChannels.map(item => {
          return (
            <Station
              key={item.id}
              name={item.name}
              image={item.image}
              color={item.color}
              audio={item.liveaudio.url}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
