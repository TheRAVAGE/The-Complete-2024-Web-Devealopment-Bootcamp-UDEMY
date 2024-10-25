// import animals from "./data";

// console.log(animals);

// const [cat, dog] = animals;
// console.log(cat);

// const { name: catName, sound: catSound } = cat;
// console.log(catName);

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
// console.log(cars);
const [honda, tesla] = cars;
// console.log(tesla);

//Tesla
const {
  coloursByPopularity: teslaColoursByPopularity,
  speedStats: teslaSpeedStats,
} = tesla;
// console.log(teslaSpeedStats);
const { topSpeed: teslaTopSpeed } = teslaSpeedStats;
console.log(teslaTopSpeed);
const [teslaTopColour] = teslaColoursByPopularity;
// console.log(teslaTopColour);

//Honda
const {
  coloursByPopularity: hondaColoursByPopularity,
  speedStats: hondaSpeedStats,
} = honda;
// console.log(hondaSpeedStats);
const { topSpeed: hondaTopSpeed } = hondaSpeedStats;
console.log(hondaTopSpeed);
const [hondaTopColour] = hondaColoursByPopularity;
// console.log(hondaTopColour);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
