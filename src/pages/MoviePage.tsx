import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { RootState, AppDispatch } from "../store/store";
import { setGenre } from "../store/slices/moviesSlice";
import axiosInstance from "../api/axios";

interface Movie {
  id: string;
  title: string;
  poster: string;
}

const fetchMovies = async (genre: string): Promise<Movie[]> => {
  const response = await axiosInstance.get("", { params: { s: genre } });
  if (response.data.Response === "True") {
    return response.data.Search.map((movie: any) => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
    }));
  } else {
    throw new Error(response.data.Error || "No movies found.");
  }
};

const MoviePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedGenre = useSelector(
    (state: RootState) => state.movies.selectedGenre
  );

  const genres = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"];

  const {
    data: movies = [],
    isLoading,
    isError,
    error,
  } = useQuery(["movies", selectedGenre], () => fetchMovies(selectedGenre), {
    enabled: !!selectedGenre,
    staleTime: 20000,
  });

  return (
    <div className="bg-black text-white min-h-screen p-6">
      {/* Genre Selector */}
      <div className="mb-6">
        <select
          value={selectedGenre}
          onChange={(e) => dispatch(setGenre(e.target.value))}
          className="bg-[#181818] text-white px-4 py-2 rounded-md"
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {/* Dynamic Genre Heading */}
      <h2 className="text-3xl font-semibold mb-6">
        {selectedGenre ? `${selectedGenre} Movies` : "Select a Genre"}
      </h2>

      {/* Movies Grid */}
      {isLoading ? (
        <p>Loading movies...</p>
      ) : isError ? (
        <p className="text-red-500">{(error as Error).message}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-[#181818] rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={movie.poster !== "N/A" ? movie.poster : "/placeholder.png"}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{movie.title}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviePage;
