// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "25px 25px 0 #F69689",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["responsive", "hover", "focus", "active", "group-hover"],
    },
  },
  plugins: [],
};
