import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favorite Foods
    </h1>
    <div>
      <img className="food-image" src={img + "?grayscale"} alt="Random Image" />
      <img className="food-image" src={img + "?blur=3"} alt="Random image" />
      <img className="food-image" src={img} alt="Random Image" />
    </div>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
