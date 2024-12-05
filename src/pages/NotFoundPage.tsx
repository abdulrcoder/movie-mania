import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-6xl font-bold text-purple-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-6">
        Oops! The page you are looking for doesn't exist.
      </p>
      <Link to="/movies">
        <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-md shadow-md transition">
          Go to Moviepage
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
