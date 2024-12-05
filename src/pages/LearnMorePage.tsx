import { Link } from "react-router-dom";

const LearnMorePage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-4">
          Learn More About Movie Mania
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Explore the exciting features of Movie Mania! Discover your favorite
          genres, the latest movie trends, and everything you need to enhance
          your movie experience.
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Discover Genres</h2>
          <p className="text-gray-400">
            Dive into a variety of genres, from action and adventure to romance
            and sci-fi. Find movies tailored to your preferences!
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Trending Movies</h2>
          <p className="text-gray-400">
            Stay updated with the latest and most popular movies, curated just
            for you.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">
            Personalized Recommendations
          </h2>
          <p className="text-gray-400">
            Get movie recommendations based on your viewing habits and favorite
            genres.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Explore Classics</h2>
          <p className="text-gray-400">
            Relive cinematic history with timeless classics and iconic
            masterpieces.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Reviews & Ratings</h2>
          <p className="text-gray-400">
            Read expert reviews and audience ratings to make informed viewing
            decisions.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-[#181818] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Movie Trailers</h2>
          <p className="text-gray-400">
            Watch the latest trailers and teasers to get a sneak peek at
            upcoming releases.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <Link to={"/movies"}>
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-semibold">
            Explore Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LearnMorePage;
