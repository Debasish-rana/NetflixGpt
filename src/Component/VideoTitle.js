import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 px-12 absolute bg-gradient-to-r from-black w-screen aspect-video">
      <div className="text-6xl text-white pt-52">{title}</div>
      <div className="w-1/3 p-2 m-2 text-white">{overview}</div>
      <button className="p-3 bg-white px-11 rounded-md">▶️ Play</button>
      <button className="p-3 bg-white px-11 rounded-md mx-4">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
