import React from "react"

class Station extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <img src={this.props.image} alt="text" />
      </div>
    )
  }
}

export default Station
