import React from "react"
import Station from "./station"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      radioChannels: []
    }
  }

  componentDidMount() {
    fetch("http://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({ radioChannels: json.channels })
    })
  }

  render() {
    return (
      <div className="station">
        {this.state.radioChannels.map((item) => {
          return <Station
            name={item.name}
            image={item.image} />
        })}
      </div>
    )
  }

}

export default App
