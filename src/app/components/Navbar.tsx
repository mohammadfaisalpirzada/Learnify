"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <nav className="bg-indigo-600 text-white p-2 flex items-center justify-between text-xl">
      {/* Logo */}
      <div className="text-2xl font-bold">Learnify</div>

      {/* Desktop Links */}
      <div className="hidden md:flex flex-1 justify-center">
      <ul className="flex space-x-7">
        {["Home", "Portfolio", "Resume Builder", "Contact"].map((item) => (
          <li key={item}>

            <a href={item === "Home" ? "/" : `/${item.toLowerCase()}`}  className="hover:text-gray-300">{item}</a>
          </li>
        ))}
      </ul>
</div>
      {/* Search Bar and Profile Image (Desktop Only) */}
      <div className="hidden md:flex items-center space-x-7">
        <input
          type="text"
          placeholder=" Search Learnify. . ."
          className="bg-indigo-300 p-1 rounded-full text-white"
        />
        <div className="w-15 h-15 rounded-full overflow-hidden">
          <Image src="/images/profile.jpg" alt="Profile" width={40} height={40} />
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center" onClick={handleToggleMenu}>
        <button className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Links (Horizontally Aligned) */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-4">
          <div className="flex space-x-4">
            {["Home", "Portfolio", "ResumeBuilder", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="hover:text-gray-300"
                onClick={() => setIsMobileOpen(false)}  // Close menu on click
              >
                {item}
              </a>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="bg-indigo-300 p-2 rounded w-10/12 text-black mt-4"
          />
          <div className="w-10 h-10 rounded-full overflow-hidden mt-2">
            <Image src='/images/profile.jpg' alt="Profile" width={40} height={40} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
