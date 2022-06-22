import React, { Component } from 'react';
import Tile from './Tile';
import Players from "./Players";

import one from '../images/one.png'
import two from '../images/two.png'
import three from '../images/three.png'
import four from '../images/four.png'
import five from '../images/five.png'
import six from '../images/six.png'

const number = [one, two, three, four, five, six]
var numberOfPlayers = 3

export default class Board extends Component {
  constructor(props) {
    super(props)
    var coords = []
    var tile = []
    for(var i = 0; i < 8; i++){
      coords.push([585,585])
      tile.push(0)
    }
    this.state = {
      numberOfPlayers: numberOfPlayers,
      background1: "#c4c4c4",
      background2: "#c4c4c4",
      tile: tile,
      display: "none",
      turn: 0,
      coords: coords,
      owned: [],
      available: false,
    }
  }
  roll = () => {
    var num1 = Math.floor(Math.random() * 6)
    var num2 = Math.floor(Math.random() * 6)
    this.setState({ background1: "url(" + number[num1] + ")", background2: "url(" + number[num2] + ")" })
    var newTile = this.state.tile
    newTile[this.state.turn] = 2+num1+num2+newTile[this.state.turn]
    this.setState({
      tile: newTile
    })
    var el = document.getElementById(this.state.tile[this.state.turn] % 39 + "").getBoundingClientRect()
    var newCoords = this.state.coords
    newCoords[this.state.turn][0] =  el.x + el.width / 2 - 15
    newCoords[this.state.turn][1] =  el.y + el.height / 2 - 15
    this.setState({
      coords: newCoords,
    })

    if(this.state.owned.indexOf(this.state.tile[this.state.turn])<0){
      document.getElementById(this.state.tile[this.state.turn] % 39 + "").click()
      this.setState({available:true})
    }

    if(!(this.state.turn+1>= numberOfPlayers)){
      this.setState({
        turn: this.state.turn+1
      })
    }
    else{
      this.setState({
        turn: 0
      })
    }
  }
  buy=()=>{
  }
  auction=()=>{}
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
          <div className="screen" id="die3" style={{display: this.state.available? "block": "none"}}></div>
          <button className="buy" onClick={this.buy} style={{display: this.state.available? "block": "none"}}>Buy</button>
          <button className="auction" onClick={this.auction} style={{display: this.state.available? "block": "none"}}>auction</button>
          <Players className="player1" id="player1" tile={this.state.tile[0]} x={this.state.coords[0][0]} style={this.state.numberOfPlayers < 1 ? "none":"block"} y={this.state.coords[0][1]} playerNum={0}></Players>
          <Players className="player2" id="player2" tile={this.state.tile[1]} x={this.state.coords[1][0]} style={this.state.numberOfPlayers < 2 ? "none":"block"} y={this.state.coords[1][1]} playerNum={1}></Players>
          <Players className="player3" id="player3" tile={this.state.tile[2]} x={this.state.coords[2][0]} style={this.state.numberOfPlayers < 3 ? "none":"block"} y={this.state.coords[2][1]} playerNum={2}></Players>
          <Players className="player4" id="player4" tile={this.state.tile[3]} x={this.state.coords[3][0]} style={this.state.numberOfPlayers < 4 ? "none":"block"} y={this.state.coords[3][1]} playerNum={3}></Players>
          <Players className="player5" id="player5" tile={this.state.tile[4]} x={this.state.coords[4][0]} style={this.state.numberOfPlayers < 5 ? "none":"block"} y={this.state.coords[4][1]} playerNum={4}></Players>
          <Players className="player6" id="player6" tile={this.state.tile[5]} x={this.state.coords[5][0]} style={this.state.numberOfPlayers < 6 ? "none":"block"} y={this.state.coords[5][1]} playerNum={5}></Players>
          <Players className="player7" id="player7" tile={this.state.tile[6]} x={this.state.coords[6][0]} style={this.state.numberOfPlayers < 7 ? "none":"block"} y={this.state.coords[6][1]} playerNum={6}></Players>
          <Players className="player8" id="player8" tile={this.state.tile[7]} x={this.state.coords[7][0]} style={this.state.numberOfPlayers < 8 ? "none":"block"} y={this.state.coords[7][1]} playerNum={7}></Players>
          
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