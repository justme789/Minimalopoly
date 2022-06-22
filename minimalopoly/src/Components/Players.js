import React, { Component } from "react";

const colors = ["yellow", "green", "blue", "black", "white", "purple"];

export default class Players extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name : "player",
      owned : [],
      money : 1000,
      tile : this.props.tile,
      turn : false,
      x : this.props.x, 
      y : this.props.y
    }
  }
  changeCoords = () => {
    console.log("changeCoords")
  }
  render() {
    return <div className={this.props.className} id={this.props.id} style={{
      display: this.props.style,
      position: "absolute",
      backgroundColor: colors[this.props.playerNum],
      width: "30px",
      height: "30px",
      zIndex: "989",
      transform:
        "translate(" +
        this.props.x +
        "px, " +
        this.props.y +
        "px)",
    }}></div>;
  }
}
