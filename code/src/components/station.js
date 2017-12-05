import React from "react"

class Station extends React.Component {
  render() {
    return (
      <div className="radio-box">
        <div className="image-box">
          <img src={this.props.image} alt="text" />
        </div>
        <div className="content-box" style={{ backgroundColor: `#${this.props.color}` }}>
          <h1>{this.props.name}</h1>
          <audio controls src={this.props.audio} type="audio/mpeg">
            <track kind="captions" />
          </audio>
        </div>
      </div>
    )
  }
}

export default Station
