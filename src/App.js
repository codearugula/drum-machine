import React, { Component } from "react";
import Display from "./Components/display";
import ReactFCCtest from "react-fcctest";

class App extends Component {
  state = {
    notes: [
      {
        id: "Q",
        index: 0,
        source:
          "https://www.pacdv.com/sounds/voices/you-are-acting-so-weird.wav",
        string: "StringQ",
      },
      {
        id: "W",
        index: 1,
        source:
          "https://www.pacdv.com/sounds/voices/you-are-acting-so-weird.wav",
        string: "StringW",
      },
      {
        id: "E",
        index: 2,
        source:
          "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_hit.wav",
        string: "StringE",
      },
      {
        id: "A",
        index: 3,
        source:
          "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_hit.wav",
        string: "StringA",
      },
      {
        id: "S",
        index: 4,
        source:
          "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_hit.wav",
        string: "StringS",
      },
      {
        id: "D",
        index: 5,
        source:
          "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_hit.wav",
        string: "StringD",
      },
      {
        id: "Z",
        index: 6,
        source:
          "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_hit.wav",
        string: "StringZ",
      },
      {
        id: "X",
        index: 7,
        source:
          "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_hit.wav",
        string: "StringX",
      },
      {
        id: "C",
        index: 8,
        source:
          "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_hit.wav",
        string: "StringC",
      },
    ],
  };

  handleClickDrums = (index, string) => {
    var playPromise = document
      .getElementById(this.state.notes[index].id)
      .play();
    playPromise.currentTime = 0;
    document.getElementById("display-span").textContent = string;
  };

  render() {
    return (
      <div id="drum-machine" className="container-fluid">
        <div id="display" className="row">
          <ReactFCCtest />
          <Display
            notes={this.state.notes}
            handleClickDrums={this.handleClickDrums}
          />
          <span id="display-span" className="border text-center col-12">
            Bang a Drum!
          </span>
        </div>
      </div>
    );
  }
}

document.addEventListener("keydown", function (e) {
  if (document.getElementById(e.key.toUpperCase().concat("-button")) !== null) {
    document.getElementById(e.key.toUpperCase().concat("-button")).click();
  }
});

export default App;
