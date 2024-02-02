import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Dice from "./components/dice";
import { motion } from "framer-motion";

function App() {
  const [diceObjects, setDiceObjects] = useState(Array(25).fill({}));
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === "Space" && !isRotating) {
        setIsRotating(true);
        setRotationAngle((prevAngle) => prevAngle + 90); // Increment the rotation angle by 90 degrees
      }
    },
    [isRotating]
  );

  const handleRotateClick = () => {
    if (!isRotating) {
      setIsRotating(true);
      setRotationAngle((prevAngle) => prevAngle + 90); // Increment the rotation angle by 90 degrees
    }
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsRotating(false);
    };

    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [handleKeyPress]);

  return (
    <>
      <div className="wrapper">
        <div
          className="main grid grid-cols-5 grid-rows-5 gap- bg-[#380A15] rounded-3xl overflow-hidden "
          style={{
            transform: `rotate(${rotationAngle}deg)`,
            transition: "transform 0.5s ease-in-out", // Add a transition effect to the transform property
          }}
        >
          {diceObjects.map((dice, index) => (
            <Dice key={index} />
          ))}
        </div>
        <div className="likes absolute bottom-0 left-0 md:bottom-20 md:left-20 flex items-center gap-5">
          <motion.img
            src="/src/assets/like.png"
            alt="like"
            className="w-10 h-10 md:w-15 md:h-15"
            whileHover={{ scale: 1.3 }} // Add scaling effect on hover
            transition={{ type: "spring", stiffness: 300 }}
          />
          <p className="font-bold text-black text-2xl">1 </p>
        </div>
      </div>
      <button
        onClick={handleRotateClick}
        className="mt-10 md:mt-20 bg-gradient-to-r from-[#C35341] via-[#D86856] to-[#F1816F] text-white font-semibold py-2 px-6 rounded-full border-none"
      >
        Rotate the dice
      </button>
    </>
  );
}

export default App;
