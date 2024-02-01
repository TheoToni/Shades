// Dice.js (or Dice.tsx)
import React from "react";
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
  // If a color prop is provided, use it; otherwise, generate a random color
  const diceColor = color || getRandomColor();

  return (
    <motion.div
      className="dice p-5 md:p-10 rounded-md shadow-black"
      style={{ backgroundColor: diceColor }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-white"></div>
    </motion.div>
  );
};

export default Dice;
