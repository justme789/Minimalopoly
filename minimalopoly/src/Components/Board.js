import React, { Component } from 'react';
import one from '../images/one.png'
import two from '../images/two.png'
import three from '../images/three.png'
import four from '../images/four.png'
import five from '../images/five.png'
import six from '../images/six.png'
import Tile from './Tile';
var tile = 0
var number = [one, two, three, four, five, six]

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPosX: 585,
      currentPosY: 585,
      background1: "#c4c4c4",
      background2: "#c4c4c4",
      tile: 0,
      display: "none",
      playerTurn: null,
    }
  }
  roll = () => {
    var num1 = Math.floor(Math.random() * 6)
    var num2 = Math.floor(Math.random() * 6)
    this.setState({ background1: "url(" + number[num1] + ")", background2: "url(" + number[num2] + ")" })
    tile = num1 + num2 + tile + 2
    console.log(tile)
    var el = document.getElementById(tile % 39 + "").getBoundingClientRect()
    this.setState({ currentPosX: el.x + el.width / 2 - 15, currentPosY: el.y + el.height / 2 - 15 })
  }

  render() {
    return (
      <div>
        <div className="board">
          <div className="die1" id="die1" style={{
            background: this.state.background1,
          }}></div>

          <div className="die2" id="die2" style={{
            background: this.state.background2
          }}></div>

          <button className="roll" onClick={this.roll}>Roll</button>

          <Tile id="0" className="go"></Tile>
          <Tile id="1" className="br1"></Tile>
          <Tile id="2" className="cc1"></Tile>
          <Tile id="3" className="br2"></Tile>
          <Tile id="4" className="tax1"></Tile>
          <Tile id="5" className="stat1"></Tile>
          <Tile id="6" className="lb1"></Tile>
          <Tile id="7" className="ch1"></Tile>
          <Tile id="8" className="lb2"></Tile>
          <Tile id="9" className="lb3"></Tile>
          <Tile id="10" className="jail"></Tile>

          <Tile id="30" className="gojail"></Tile>
          <Tile id="29" className="yel3"></Tile>
          <Tile id="28" className="ww"></Tile>
          <Tile id="27" className="yel2"></Tile>
          <Tile id="26" className="yel1"></Tile>
          <Tile id="25" className="stat3"></Tile>
          <Tile id="24" className="red3"></Tile>
          <Tile id="23" className="red2"></Tile>
          <Tile id="22" className="ch2"></Tile>
          <Tile id="21" className="red1"></Tile>
          <Tile id="20" className="fp"></Tile>

          <Tile id="11" className="pin1"></Tile>
          <Tile id="12" className="elec"></Tile>
          <Tile id="13" className="pin2"></Tile>
          <Tile id="14" className="pin3"></Tile>
          <Tile id="15" className="stat2"></Tile>
          <Tile id="16" className="oran1"></Tile>
          <Tile id="17" className="cc2"></Tile>
          <Tile id="18" className="oran2"></Tile>
          <Tile id="19" className="oran3"></Tile>

          <Tile id="31" className="gr1"></Tile>
          <Tile id="32" className="gr2"></Tile>
          <Tile id="33" className="cc3"></Tile>
          <Tile id="34" className="gr3"></Tile>
          <Tile id="35" className="stat4"></Tile>
          <Tile id="36" className="ch3"></Tile>
          <Tile id="37" className="db1"></Tile>
          <Tile id="38" className="tax2"></Tile>
          <Tile id="39" className="db2"></Tile>
        </div>
      </div>
    )
  }
}