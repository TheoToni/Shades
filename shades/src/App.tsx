// App.js
import React, { useState } from "react";
import "./App.css";
import Dice from "./components/dice";

function App() {
  const [diceObjects, setDiceObjects] = useState(Array(25).fill({}));

  return (
    <div className="main grid grid-cols-5 grid-rows-5 gap- bg-[#380A15] rounded-3xl overflow-hidden shadow-custom-shadow">
      {diceObjects.map((dice, index) => (
        <Dice key={index} />
      ))}
    </div>
  );
}

export default App;
