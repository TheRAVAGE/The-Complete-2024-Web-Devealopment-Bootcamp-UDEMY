import React from "react";
import ReactDOM from "react-dom";

import pi, { DoublePi, TriplePi } from "./math";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{DoublePi()}</li>
    <li>{TriplePi()}</li>
  </ul>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
