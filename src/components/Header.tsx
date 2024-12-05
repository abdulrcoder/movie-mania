const Header = () => {
  return (
    <div className="flex items-center justify-between bg-black px-4 py-2">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo1.png"
          alt="Logo"
          className="h-10 w-10 m-2 mr-2 rounded-md "
        />
      </div>

      {/* Search Bar */}
      <div className=" flex-1 mr-9 mx-5 flex items-center bg-[#181818] rounded-full  px-4 py-2">
        <input
          type="text"
          placeholder="Search games..."
          className="bg-transparent  text-white placeholder-gray-400 focus:outline-none"
        />
      </div>

      {/* Dark Mode Toggle */}
      <div className=" hidden md:flex items-center">
        <span className="text-white mr-2">Dark Mode</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-10 h-5 bg-gray-600 peer-focus:outline-none rounded-full peer-checked:bg-purple-500"></div>
          <span className="absolute top-0.5 left-1 w-4 h-4 bg-white rounded-full transform peer-checked:translate-x-5 transition"></span>
        </label>
      </div>
    </div>
  );
};

export default Header;
