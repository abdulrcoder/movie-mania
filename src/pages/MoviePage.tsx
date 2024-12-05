import React, { useState } from "react";

const MoviePage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [orderBy, setOrderBy] = useState("Relevance");

  const platforms = ["PC", "PlayStation", "Xbox", "iOS", "Android"];
  const orderOptions = ["Relevance", "Popularity", "Rating"];
  const movies = [
    { id: 1, title: "Game 1", image: "/path-to-image1.jpg" },
    { id: 2, title: "Game 2", image: "/path-to-image2.jpg" },
    { id: 3, title: "Game 3", image: "/path-to-image3.jpg" },
    { id: 4, title: "Game 4", image: "/path-to-image4.jpg" },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Adventure Games</h1>
        <div className="flex gap-4">
          {/* Platform Filter */}
          <div className="relative">
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="bg-[#191919] outline-none text-white px-4 py-2 rounded-md w-full cursor-pointer"
            >
              <option value="">Platform</option>
              {platforms.map((platform) => (
                <option key={platform} value={platform}>
                  {platform}
                </option>
              ))}
            </select>
          </div>

          {/* Order By Filter */}
          <div className="relative">
            <select
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
              className="bg-[#191919] outline-none text-white px-4 py-2 rounded-md w-full cursor-pointer"
            >
              {orderOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
