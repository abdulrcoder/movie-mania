import React from "react";

const genres = [
  { name: "Action", image: "https://via.placeholder.com/40/FFD700" },
  { name: "Indie", image: "https://via.placeholder.com/40/9370DB" },
  { name: "Adventure", image: "https://via.placeholder.com/40/2E8B57" },
  { name: "RPG", image: "https://via.placeholder.com/40/8B0000" },
  { name: "Strategy", image: "https://via.placeholder.com/40/4682B4" },
  { name: "Shooter", image: "https://via.placeholder.com/40/FF4500" },
];

const GenreSidebar: React.FC = () => {
  return (
    <div className="bg-black text-white h-full  flex flex-col p-10 ">
      <h2 className="text-3xl font-bold mb-6">Genres</h2>
      <ul className="space-y-4">
        {genres.map((genre, index) => (
          <li
            key={index}
            className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition"
          >
            <img
              src={genre.image}
              alt={`${genre.name} thumbnail`}
              className="w-10 h-10 rounded-md object-cover"
            />
            <span className="text-base">{genre.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreSidebar;
