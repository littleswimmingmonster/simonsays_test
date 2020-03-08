import React from "react";
import ButtonComponent from "./ButtonComponent";
import "./GameBoard.css";

function GameBoardComponent() {
  return (
    <div>
      <div className="gameboard-base-bottom"></div>
      <div className="gameboard-base"></div>
      <div className="gameboard">
        <div className="section section-1">
          <ButtonComponent color="blue" position={1} />
        </div>
        <div className="section section-2">
          <ButtonComponent color="red" position={2} />
        </div>
        <div className="section section-3">
          <ButtonComponent color="yellow" position={3} />
        </div>
        <div className="section section-4">
          <ButtonComponent color="green" position={4} />
        </div>
      </div>
      <div className="counter-div">
        <div className="text">
          {/* <span style={{ marginLeft: "2.78vw" }}>1</span> */}8
          <span style={{ marginLeft: "2.78vw" }}></span>1
        </div>
      </div>
    </div>
  );
}

export default GameBoardComponent;
