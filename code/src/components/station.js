import React from "react"

class Station extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <img src={this.props.image} alt="text" />
        <div>{this.props.color}</div>
        <audio controls src={this.props.audio} type="audio/mpeg">
          <track kind="captions" />
        </audio>
      </div>
    )
  }
}

export default Station
