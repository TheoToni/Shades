import React, { useState } from "react";
import { motion } from "framer-motion";

interface DiceProps {
  // Optional prop to allow passing a specific color if needed
  color?: string;
}

const getRandomColor = () => {
  const colors = [
    "#FFAE6C",
    "#FE9261",
    "#FF8F7B",
    "#EABCA5",
    "#EF634C",
    "#914249",
    "#A88685",
    "#9D4C5F",
    "#A66666",
    "#6E586C",
    "#9E7C7B",
    "#11537D",
    "#99AABA",
    "#637F81",
    "#37799F",
    "#003B5B",
    "#4DAEBF",
    "#27253C",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Dice: React.FC<DiceProps> = ({ color }) => {
  const [showBlackDiv, setShowBlackDiv] = useState(false);

  // If a color prop is provided, use it; otherwise, generate a random color
  const diceColor = color || getRandomColor();

  const handleClick = () => {
    setShowBlackDiv((prev) => !prev); // Toggle the value of showBlackDiv
  };

  return (
    <motion.div
      className="dice p-7 md:p-10 rounded-md shadow-black"
      style={{
        background: `linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(0,0,0,0.2)), ${diceColor}`, // Gradient background
      }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={handleClick} // Toggle the visibility of the black div when the white div is clicked
    >
      <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white flex justify-center items-center">
        {showBlackDiv && (
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-black"></div>
        )}
      </div>
    </motion.div>
  );
};

export default Dice;
