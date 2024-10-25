import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [buttonColor, setButtonColor] = useState("White");

  function handleClick() {
    setHeadingText("Submitted");
  }

  function mouseOverButton() {
    setButtonColor("black");
  }

  function mouseOutButton() {
    setButtonColor("White");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={handleClick}
        onMouseOver={mouseOverButton}
        onMouseOut={mouseOutButton}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
