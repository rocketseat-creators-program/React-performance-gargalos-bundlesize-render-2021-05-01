import React from "react";
import image1 from "../../Images/1.webp";

const AVATAR_URL = "https://randomuser.me/api/portraits/men/20.jpg";

export const Card = () => {
  return (
    <div className="mb-5">
      <a
        href="https://vitormalencar.com"
        className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
        style={{
          background: `url(${image1}) center`,
          backgroundSize: "cover",
        }}
      >
        <div className="h-48" />
        <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
          Winter Himalaya: My road to Everest Base Camp at 5364 meters
        </h2>
        <div className="flex w-full items-center text-sm text-gray-300 font-medium">
          <div className="flex-1 flex items-center">
            <div
              className="rounded-full w-8 h-8 mr-3"
              style={{
                background: `url(${AVATAR_URL}) center`,
                backgroundSize: "cover",
              }}
            />
            <div>Gwen Thomson</div>
          </div>
          <div>👍{"   "}18</div>
        </div>
      </a>
    </div>
  );
};
