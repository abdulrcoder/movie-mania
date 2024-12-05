import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <div className="text-3xl font-bold tracking-wider flex items-center ">
          🎥 <span className="hidden md:flex"> Movie Mainia</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-800 px-5 py-2 rounded-md hover:bg-gray-700 transition">
            Log In
          </button>
          <Link to={"/sign-in"}>
            <button className=" hidden md:block bg-purple-600 px-5 py-2 rounded-md hover:bg-purple-500 transition">
              Get Started
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-8 py-16 text-center bg-gray-950">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
          Explore the Best <span className="text-purple-600">Movies</span> and{" "}
          <span className="text-purple-600">TV Shows</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          watch endless entertainment, tailored just for you. Stream anytime,
          anywhere.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to={"/movies"}>
            <button className="bg-purple-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-purple-500 transition">
              Explore Now
            </button>
          </Link>
          <Link to={"/learn-more"}>
            <button className="bg-gray-800 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-700 transition">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Popular Genres Section */}
      <section className="px-8 py-12">
        <h2 className="text-3xl font-bold mb-6">Popular Genres</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Horror",
            "Sci-Fi",
            "Fantasy",
            "Thriller",
          ].map((genre, index) => (
            <div
              key={index}
              className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-60 transition"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{genre}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Movies Section */}
      <section className="px-8 py-12 bg-gray-950">
        <h2 className="text-3xl font-bold mb-6">Featured Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "The Witcher", img: "https://via.placeholder.com/150" },
            { title: "Tomb Raider", img: "https://via.placeholder.com/150" },
            { title: "Interstellar", img: "https://via.placeholder.com/150" },
            { title: "Inception", img: "https://via.placeholder.com/150" },
          ].map((movie, index) => (
            <div
              key={index}
              className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={movie.img}
                alt={movie.title}
                className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-75 p-4">
                <h3 className="text-lg font-bold">{movie.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="px-8 py-16 text-center bg-black">
        <h2 className="text-4xl font-extrabold mb-6">
          Start Your Journey Today!
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Join Movie Maini and discover your next favorite movie or show.
        </p>
        <button className="bg-purple-600 px-10 py-4 rounded-md text-xl font-semibold hover:bg-purple-500 transition">
          Sign Up Now
        </button>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 border-t border-gray-800 text-center text-gray-500">
        &copy; 2024 Movie Maini. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
