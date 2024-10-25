//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const time = new Date().getHours();
const minutes = new Date().getMinutes();
const seconds = new Date().getSeconds();
let secondsTime = seconds;
let minutesTime = minutes;

if (Math.floor(seconds / 10) === 0) {
  secondsTime = "0" + seconds;
}
if (Math.floor(minutes / 10) === 0) {
  minutesTime = "0" + minutes;
}

const styleOfMsg = {
  color: "yellow",
  fontSize: "30px",
};
let msg = " ";
let showTime = " ";

setInterval(function () {
  location.reload();
}, 1000);

if (time >= 0 && time < 10) {
  msg = "Good Morning";
  styleOfMsg.color = "red";
  showTime = "0" + time + ":" + minutes + ":" + seconds + " AM";
} else if (time >= 10 && time < 12) {
  msg = "Good Morning";
  styleOfMsg.color = "red";
  showTime = time + ":" + minutes + ":" + seconds + " AM";
} else if (time === 12) {
  msg = "Good Afternoon";
  styleOfMsg.color = "green";
  showTime = time + ":" + minutesTime + ":" + secondsTime + " PM";
} else if (time > 12 && time < 18) {
  msg = "Good Afternoon";
  styleOfMsg.color = "green";
  showTime = time - 12 + ":" + minutes + ":" + seconds + " PM";
} else if (time >= 18 && time < 24) {
  msg = "Good Evening";
  styleOfMsg.color = "blue";
  showTime = time - 12 + ":" + minutes + ":" + seconds + " PM";
}

ReactDOM.render(
  <h1 style={styleOfMsg}>
    Time: {showTime} <h2>Message: {msg}</h2>
  </h1>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
