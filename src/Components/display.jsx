import React, { Component } from "react";
import DrumBeat from "./drumbeat";

class Display extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.notes.map((e) => {
          return (
            <DrumBeat
              key={e.id}
              index={e.index}
              id={e.id}
              string={e.string}
              source={e.source}
              handleClickDrums={this.props.handleClickDrums}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Display;
/*
<div className="row">
          <div className="col-4">1</div>
          <div className="col-4">2</div>
          <div className="col-4">3</div>
          <div className="col-4">4</div>
          <div className="col-4">5</div>
          <div className="col-4">6</div>
          <div className="col-4">7</div>
          <div className="col-4">8</div>
          <div className="col-4">9</div>
          <div className="col-4">10</div>
          <div className="col-4">11</div>
          <div className="col-4">12</div>
        </div>
*/
