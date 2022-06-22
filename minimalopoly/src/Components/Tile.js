import React, { Component } from "react";


export default class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {display: "none"}
    }
    show = (tile) => {
        console.log(tile)
        this.setState({display: "block"})
      }
      hide = () => {
        this.setState({ display: "none" })
      }
  render() {
    return (
        <>
            <div className="back" style={{
            position: "inherit",
            display: this.state.display,
            background: "rgba(0, 0, 0, 0.708)",
            width: "100%",
            height: "100%",
            zIndex: "990"
          }} onClick={this.hide}></div>

            <div className="tile" style={{
            position: "inherit",
            display: this.state.display,
            background: "white",
            width: "250px",
            height: "450px",
            marginTop: "10%",
            marginLeft: "45%",
            zIndex: "991"
          }}></div>
            <button className={this.props.className} id={this.props.id} onClick={() => this.show(this.props.id)}></button>
        </>
    )
  }
}
