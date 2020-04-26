import React from "react";

export default class LD46 extends React.Component {
  componentDidMount() {
    require("../scripts/gamejams/ld46/index.js");
  }

  render() {
    return (
      <div id="LD46">
        <h1> Ludum Dare 46 - Bullet Blocker </h1>

        <p>
          {
            "Bullet Blocker is a vanilla javascript browser game i made for the "
          }
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ldjam.com/events/ludum-dare/46"
          >
            Game Jam Ludum Dare 46
          </a>
          {". Rules are simple: Make a game in 48 hours! Stick to the topic: "}
          <b>Keep it alive!</b>
        </p>

        <canvas
          className="gamescreen"
          id="gamescreen"
          width={800}
          height={600}
        />

        <p>{"What do you think of this game? Leave a comment below! "}</p>
        <p>
          <i>Comments currently work in progress</i>
        </p>
      </div>
    );
  }
}
