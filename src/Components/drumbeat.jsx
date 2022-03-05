import React, { Component } from "react";

class DrumBeat extends Component {
  render() {
    return (
      <div className="col-4 text-center">
        <button
          id={this.props.id.concat("-button")}
          style={{ width: "100px", height: "100px" }}
          className="drum-pad btn btn-lg m-2 btn-primary"
          onClick={() =>
            this.props.handleClickDrums(this.props.index, this.props.string)
          }
        >
          {this.props.id}
          <audio id={this.props.id} className="clip" src={this.props.source} />
        </button>
      </div>
    );
  }
}

export default DrumBeat;
