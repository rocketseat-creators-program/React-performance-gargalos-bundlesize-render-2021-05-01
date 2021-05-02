import React from "react";

export default function Suggestion({ title, image, size = "h-24" }) {
  return (
    <a
      href="https://vitormalencar.com"
      className="bg-opacity-5 block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
      style={{
        background: `url(${image}) center`,
        backgroundSize: "cover",
      }}
    >
      <div className={size} />

      <h3 className="text-lg font-bold filter drop-shadow-lg text-white leading-tight">
        {title}
      </h3>
    </a>
  );
}
