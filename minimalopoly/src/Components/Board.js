import React, { Component } from 'react';
import one from '../images/one.png'
import two from '../images/two.png'
import three from '../images/three.png'
import four from '../images/four.png'
import five from '../images/five.png'
import six from '../images/six.png'
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
      display: "none"
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
  hide = () => {
    this.setState({ display: "none" })
  }
  show = (tile) => {
    console.log(tile)
    this.setState({display: "block"})
  }
  render() {
    return (
      <div>
        <div id="box" style={{
          position: 'absolute',
          backgroundColor: "red",
          width: "30px",
          height: "30px",
          zIndex: "989",
          transform: "translate(" + this.state.currentPosX + "px, " + this.state.currentPosY + "px)"
        }}></div>
        <div className="board">
          <div className="die1" id="die1" style={{
            position: "inherit",
            background: this.state.background1,
            width: "70px",
            height: "70px",
            transform: "translate(700px, 100px)"
          }}></div>

          <div className="die2" id="die2" style={{
            position: "inherit",
            background: this.state.background2,
            width: "70px",
            height: "70px",
            transform: "translate(800px, 100px)"
          }}></div>

          <div className="tile" id="die2" style={{
            position: "inherit",
            display: this.state.display,
            background: "white",
            width: "250px",
            height: "450px",
            marginTop: "10%",
            marginLeft: "45%",
            zIndex: "991"
          }}></div>
          <div className="back" id="die2" style={{
            position: "inherit",
            display: this.state.display,
            background: "rgba(0, 0, 0, 0.708)",
            width: "100%",
            height: "100%",
            zIndex: "990"
          }} onClick={this.hide}></div>
          <button className="roll" onClick={this.roll}>Roll</button>
          <button id="0" className="go" onClick={() => this.show(0)}></button>
          <button id="1" className="br1" onClick={() => this.show(1)}></button>
          <button id="2" className="cc1"></button>
          <button id="3" className="br2"></button>
          <button id="4" className="tax1"></button>
          <button id="5" className="stat1"></button>
          <button id="6" className="lb1"></button>
          <button id="7" className="ch1"></button>
          <button id="8" className="lb2"></button>
          <button id="9" className="lb3"></button>
          <button id="10" className="jail"></button>

          <button id="30" className="gojail"></button>
          <button id="29" className="yel3"></button>
          <button id="28" className="ww"></button>
          <button id="27" className="yel2"></button>
          <button id="26" className="yel1"></button>
          <button id="25" className="stat3"></button>
          <button id="24" className="red3"></button>
          <button id="23" className="red2"></button>
          <button id="22" className="ch2"></button>
          <button id="21" className="red1"></button>
          <button id="20" className="fp"></button>

          <button id="11" className="pin1"></button>
          <button id="12" className="elec"></button>
          <button id="13" className="pin2"></button>
          <button id="14" className="pin3"></button>
          <button id="15" className="stat2"></button>
          <button id="16" className="oran1"></button>
          <button id="17" className="cc2"></button>
          <button id="18" className="oran2"></button>
          <button id="19" className="oran3"></button>

          <button id="31" className="gr1"></button>
          <button id="32" className="gr2"></button>
          <button id="33" className="cc3"></button>
          <button id="34" className="gr3"></button>
          <button id="35" className="stat4"></button>
          <button id="36" className="ch3"></button>
          <button id="37" className="db1"></button>
          <button id="38" className="tax2"></button>
          <button id="39" className="db2"></button>
        </div>
      </div>
    )
  }
}