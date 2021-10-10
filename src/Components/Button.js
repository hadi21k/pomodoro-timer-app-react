import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-lg font-semibold text-white transition duration-500 bg-green-500 rounded md:py-2 md:px-6 hover:text-black "
    >
      {text}
    </button>
  );
};

export default Button;
