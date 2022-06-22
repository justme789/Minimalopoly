import React, { Component } from "react";
import { Player } from "../Player.js";

var colors = ["red", "green", "blue", "black", "white"];
var p0 = new Player(0, colors[0]);
var p1 = new Player(1, colors[1]);
var p2 = new Player(2, colors[2]);
var playerss = [p0, p1, p2];

export default class Players extends Component {
  renderPlayers = () => {
    var renderedPlayers = [];
    for (var i = 0; i < playerss.length; i++) {
      var id = "palyer" + i;
      renderedPlayers.push(
        <div
          id={id}
          key={id}
          style={{
            position: "absolute",
            backgroundColor: playerss[i].color,
            width: "30px",
            height: "30px",
            zIndex: "989",
            transform:
              "translate(" +
              this.state.currentPosX +
              "px, " +
              this.state.currentPosY +
              "px)",
          }}
        ></div>
      );
    }
    return renderedPlayers;
  };

  constructor(props) {
    super(props);
  }
  render() {
    return <div></div>;
  }
}
