import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full bg-${isScrolled ? 'white' : 'transparent'} ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex justify-between h-24 items-center">
          {/* Hamburger Menu */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className={`text-${isScrolled ? 'black' : 'white'} hover:text-gray-800 focus:outline-none focus:text-gray-800`}
            >
              {/* Hamburger Icon */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke={isScrolled ? "currentColor" : "white"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center text-black">
            <img className="h-8 w-auto" src="logo.png" alt="Logo" />
          </div>

          {/* Search Bar */}
          <div className="flex items-center">
            <button
              onClick={toggleSearch}
              className={`text-${isScrolled ? 'black' : 'black'} hover:text-gray-800 focus:outline-none focus:text-gray-800`}
            >
              {/* Search Icon */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke={isScrolled ? "currentColor" : "black"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isSearchOpen ? "M15 15l5-5m0 0l-5-5m5 5h-5m5 5v5m-5-5H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2z" : "M20 12a8 8 0 11-16 0 8 8 0 0116 0z"}
                />
              </svg>
            </button>
            {/* Search Bar */}
            {isSearchOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                <input
                  type="text"
                  className="block w-64 sm:text-sm border-gray-300 rounded-md p-1"
                  placeholder="Search"
                />
                <button
                  onClick={toggleSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
                >
                  {/* Close Icon */}
                  <svg
                    className="h-4 w-4 text-black hover:text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
            {/* Menu Overlay */}
            <div className="absolute inset-0 flex justify-center items-center">
              {/* Menu Container */}
              <div className="bg-gray-900 rounded-lg p-4">
                {/* Close Button */}
                <button
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 text-gray-300 hover:text-black focus:outline-none"
                >
                  {/* Close Icon */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                {/* Menu Items */}
                <ul>
                  <li className="py-2">
                    <a href="#" className="text-gray-300 hover:text-black">Home</a>
                  </li>
                  {/* Add more menu items */}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
