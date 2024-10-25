import React, { useState } from "react";

function App() {
  let [time, setCount] = useState(new Date().toLocaleTimeString());
  console.log(time);

  function updateTime() {
    setCount(new Date().toLocaleTimeString());
  }

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
